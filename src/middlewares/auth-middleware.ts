import jwt from 'jsonwebtoken';
import { Request, Response } from 'express'


export const authMiddleware = (req: Request, res: Response, next: any) => {
    const authorization = req.get('authorization')
    let token: string | null = null

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
        token = authorization.split(' ')[2]
    }
    let decodedToken = {}
    if (!token) {
        return res.status(401).json({ error: 'No hay token' });
    }
    try {
        if (!process.env.SECRET) {
            throw new Error('Missing SECRET environment variable');
        }
        decodedToken = jwt.verify(token, process.env.SECRET)
    } catch (err) {
        console.log(err)
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    if (!decodedToken) {
        return res.status(401).json({ error: 'decoded token missing' })
    }
    console.log('Middleware works!')
    next()
}