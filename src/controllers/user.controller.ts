import prisma from "../db/client.ts"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

export const getUsers = async (req: Request, res: Response) => {
    try {
        const accounts = await prisma.user.findMany()
        if (!accounts) {
            return res.status(404).send({ message: "Accounts not found" })
        }
        res.status(200).send(accounts);
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
                image: image || "https://res.cloudinary.com/dgtamgaup/image/upload/v1713780258/n2qkvc3jpgtfftcsxst8.webp",
                password: passwordHash,
                gender,
                birthDate,
                country
            }
        })
        const userForToken = {
            username: newUser.name,
            id: newUser.id,
        }

        const token = jwt.sign(
            userForToken,
            process.env.SECRET!,
            { expiresIn: 60 * 60 * 24 }
        )
        return res.status(201).send({ user: newUser, token: token })
    } catch (error) {
        res.status(404).send(error)
    }
}

export const updateUser = () => {

}

export const deleteUser = () => {

}