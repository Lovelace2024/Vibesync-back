import prisma from "../db/client.ts"
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

async function createUser(req: Request, res: Response) {
    const { body } = req
    console.log('body', body)
    const { email, name, password, gender, birthDate, country } = body
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