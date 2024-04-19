import prisma from "../db/client.ts"
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from "jsonwebtoken"

async function createUser(req: Request, res: Response) {
    const { body } = req
    console.log('body', body)
    const { email, name, password, gender, birthDate, country } = body

    const authorization = req.get('authorization')
    let token = null
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    }

    let decodedToken = {}
    if (process.env.SECRET && token) {
        decodedToken = jwt.verify(token, process.env.SECRET)
    } else {
        return res.status(401).json({ error: 'Token missing or invalid' })
    }

    try {

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password: passwordHash,
                gender,
                birthDate,
                country
            }
        })
        return res.send(newUser)
    } catch (error) {
        console.error(error)
    }
}

export { createUser }