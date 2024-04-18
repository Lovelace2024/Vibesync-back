import { Request, Response } from "express"
import prisma from "../db/client.ts"

export const addGenre = async (req:Request, res:Response) => {
    const { name, artists, tracks, albums, playlists } = req.body

    try { const newGenre = await prisma.genre.create({ 
        data:{ name, artists, tracks, albums, playlists}})
        res.status(201).send(newGenre)
        
    } catch (error) {
        res.status(404).send(error)
    }
}

export const getAllGenres = async (req:Request, res:Response) => {
    try { const allGenres = await prisma.genre.findMany()
        if (!allGenres) {
            res.status(404).send({ message: "Genres not found" });
            }
            res.status(200).send(allGenres);
        
    } catch (error) {
        res.status(404).json({ message: 'Internal server error' })
    }
}

export const updateGenre = async (req:Request, res:Response) => {
    const { name, artists, tracks, albums, playlists } = req.body
    const { genreId } = req.params

    try {
        const updatedGenre = await prisma.genre.update({
            where: {
                id:genreId 
            },
            data: {
                name, 
                artists,
                tracks,
                albums,
                playlists
            }
        });

        return res.status(200).send(updatedGenre);
    } catch (error) {
        console.error('Error editing genre:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const deleteGenre = async (req:Request, res:Response) => {
    const { genreId } = req.params

    try {
        const deletedGenre = await prisma.genre.delete({
            where: {
                id:genreId}
        });

        return res.status(200).json({message: "Genre deleted successfully"})
    } catch (error) {
        console.error('Error deleting genre:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}