import { Request, Response } from "express"
import prisma from "src/db/client.ts"

export const getAccounts = async (req:Request, res:Response) => {
    try { const accounts = await prisma.user.findMany()
        if (!accounts) {
        return res.status(404).send({ message: "Accounts not found" });
        }
        res.status(200).send(accounts);
    } catch (error) {
        res.status(404).send(error)
    }
}

export const createAccount = async (req:Request, res:Response) => {
    const { name, email, password, country, genre, birthdate } = req.body

    try { const newAccount = await prisma.user.create({ 
        data:{ name, email, password, country, genre, birthdate}})
        res.status(201).send(newAccount)
        
    } catch (error) {
        res.status(404).send(error)
    }
}