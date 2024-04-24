import prisma from "../db/client.ts"
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

export const getUsers = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findMany()
        if (!user) {
            return res.status(404).send({ message: "Accounts not found" })
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error)
    }
}

export const createUser = async (req: Request, res: Response) => {
    const { body } = req
    console.log('body', body)
    const { email, name, image, password, gender, birthDate, country } = body
    try {

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                image,
                password: passwordHash,
                gender,
                birthDate,
                country
            }
        })
        return res.send(newUser)
    } catch (error) {
        res.status(404).send(error)
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { body } = req
    console.log('body', body)
    const { email, name, image, password, gender, birthDate, country } = body
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    try {

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const newUser = await prisma.user.update({
            where: {
                email
            },
            data: {
                email: email || user?.email,
                name: name || user?.name,
                image: image || user?.image,
                password: passwordHash || user?.password,
                gender: gender || user?.gender,
                birthDate: birthDate || user?.birthDate,
                country: country || user?.country
            }
        })
        return res.send(newUser)
    } catch (error) {
        res.status(404).send(error)
    }
}