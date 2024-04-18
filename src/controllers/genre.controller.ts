import { Request, Response } from "express"
import prisma from "src/db/client.ts"

export const addGenre = async (req:Request, res:Response) => {
    const { name, artists, tracks, albums, playlists } = req.body

    try { const newGenre = await prisma.genre.create({ 
        data:{ name, artists, tracks, albums, playlists}})
        res.status(201).send(newGenre)
        
    } catch (error) {
        res.status(404).send(error)
    }
}