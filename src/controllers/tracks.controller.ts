import { Request, Response } from "express"
import prisma from "src/db/client.ts"

export const createTracks = async (req:Request, res:Response) => {
    const { name, artist, url, thumbnail, genre, album, followers } = req.body

    try { const newTrack = await prisma.tracks.create({ 
        data:{ name, artist, url, thumbnail, genre, album, followers}})
        res.status(201).send(newTrack)
        
    } catch (error) {
        res.status(404).send(error)
    }
}