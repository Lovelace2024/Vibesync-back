import prisma from "../db/client.ts"
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

async function createUser(req: Request, res: Response) {
    const { body } = req
    const { email, name, password } = body
    try {

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password: passwordHash
            }
        })
    } catch (error) {
        console.error(error)
    }
}