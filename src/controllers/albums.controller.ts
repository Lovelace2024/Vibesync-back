import { Request, Response } from "express"
import prisma from "../db/client.ts"

export const addAlbum = async (req: Request, res: Response) => {
    const { name, thumbnail, genreName, artistName, tracks } = req.body
    try {
        const newAlbum = await prisma.albums.create({
            data: { name, thumbnail, genreName, artistName, tracks }
        })
        res.status(201).send({
            msg: "Album created successfully",
            data: newAlbum,
            type: typeof newAlbum
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

export const getAllAlbums = async (req: Request, res: Response) => {
    try {
        const allAlbums = await prisma.albums.findMany({
            include: {
                tracks: true
            }
        })
        if (!allAlbums) {
            res.status(404).json({ message: "No albums have been found" })
        }
        res.status(200).send(allAlbums)

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getAlbum = async (req: Request, res: Response) => {
    const { albumId } = req.params

    try {
        const selectedAlbum = await prisma.albums.findUnique({
            where: {
                id: albumId
            },
        });
        if (!selectedAlbum) {
            res.status(404).json({ message: "Album not found" });
        }

        res.status(200).send(selectedAlbum);

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const updateAlbum = async (req: Request, res: Response) => {
    const { albumId } = req.params
    const { name, thumbnail, genreName, artistName } = req.body

    try {
        const updatedAlbum = await prisma.albums.update({
            where: {
                id: albumId
            }, data: {
                name,
                thumbnail,
                genreName,
                artistName
            }
        })
        res.status(201).send(updatedAlbum)
    } catch (error) {
        res.status(500).json({ message: "Internal server error " + error })
    }
}

export const deleteAlbum = async (req: Request, res: Response) => {
    const { albumId } = req.params

    try {
        const deletedAlbum = await prisma.artists.delete({
            where: {
                id: albumId
            }
        })
        res.status(201).json({ message: "Album deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}