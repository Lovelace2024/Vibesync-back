import prisma from "../db/client.ts"
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

async function loginUser(req: Request, res: Response) {
    const { body } = req
    const { username: email, password } = body
    if (!email || !password) {
        console.error('invalid user or password')
        return
    }
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    const passwordCorrect =
        user === null
            ? false
            : await bcrypt.compare(password, user.password)

    if (!(user && passwordCorrect)) {
        res.status(401).json({
            error: 'invalid user or password'

        })
        return
    }
    res.send({
        name: user.name,
        email: user.email,
        id: user.id,
    })
}

export { loginUser }