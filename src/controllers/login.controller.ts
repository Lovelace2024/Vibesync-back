import jwt from "jsonwebtoken" // Generates and verifies JSON Web Tokens
import bcrypt from 'bcrypt' // Encrypts passwords
import { Request, Response } from 'express'
import prisma from "../db/client.ts"

async function loginUser(req: Request, res: Response) {
    const { username, password, artist } = req.body

    const user =
        artist ?
            await prisma.artists.findUnique({
                where: {
                    email: username
                }
            }) :
            await prisma.user.findUnique({
                where: {
                    email: username
                }
            });

    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(password, user.password)

    if (!(user && passwordCorrect)) {
        return res.status(400).json({ error: 'Invalid username or password' })
    }

    const userForToken = {
        username: user.name,
        id: user.id,
    }

    const accessToken = jwt.sign(
        userForToken,
        process.env.SECRET!,
        { expiresIn: '1m' }
    )

    const refreshToken = jwt.sign(
        userForToken,
        process.env.REFRESH_SECRET!,
        { expiresIn: '2m' }
    )

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            refreshToken
        }
    })
    try {
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 2 * 60 * 60 / 1000,
            sameSite: 'lax',
            // secure: true
        })
    } catch (error) {
        console.log(error)
    }

    res.status(200).send({ accessToken, user })
}

async function handleRefreshToken(req: Request, res: Response) {
    const token = req.cookies?.refreshToken

    if (!token) {
        return res.status(401).json({ error: 'No token provided' })
    }

    const verifiedToken = jwt.verify(token, process.env.REFRESH_SECRET!)
    if (!verifiedToken) {
        return res.status(403).json({ error: 'Invalid token' })
    }

    const user = await prisma.user.findUnique({
        where: {
            id: (verifiedToken as any).id
        }
    })

    if (user?.refreshToken !== token) {
        return res.status(403).json({ error: 'Invalid token' })
    }

    const userForToken = {
        username: user?.name,
        id: user?.id,
    }

    const accessToken = jwt.sign(
        userForToken,
        process.env.SECRET!,
        { expiresIn: '1m' }
    )

    res.status(200).send({ accessToken })

}

export { loginUser, handleRefreshToken }