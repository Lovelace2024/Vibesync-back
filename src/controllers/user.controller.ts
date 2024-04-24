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

export const updateUser = () =>{

}

export const deleteUser = () => {

}