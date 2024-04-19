import jwt from "jsonwebtoken" // Generates and verifies JSON Web Tokens
import bcrypt from 'bcrypt' // Encrypts passwords
import { Request, Response } from 'express'
import prisma from "../db/client.ts"

async function loginUser(req: Request, res: Response) {
    const { username, password } = req.body
    
    const user = await prisma.user.findUnique({
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

const token = jwt.sign(
    userForToken,
    process.env.SECRET!,
    { expiresIn: 60 * 60 * 24 }
)

res.status(200).send({ token, username: user.name, name: user.name })
}

export { loginUser }