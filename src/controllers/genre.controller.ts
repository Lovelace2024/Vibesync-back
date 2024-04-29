import { Request, Response } from "express"
import prisma from "../db/client.ts"

export const addGenre = async (req: Request, res: Response) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).send({
            msg: "Name is required"
        })
    }

    try {
        const newGenre = await prisma.genre.create({
            data: { name }
        })
        res.status(201).send({
            msg: "New genre created",
            data: newGenre
        })

    } catch (error) {
        res.status(404).send(error)
    }
}

export const getAllGenres = async (req: Request, res: Response) => {
    try {
        const allGenres = await prisma.genre.findMany({
            include: {
                tracks: true,
                albums: true,
                // artists: true por ahora da error al pedir que incluya la info del artist
            }
        })
        if (!allGenres) {
            res.status(404).send({ message: "Genres not found" });
        }
        res.status(200).send(allGenres);

    } catch (error) {
        res.status(400).send(error)
    }
}

export const updateGenre = async (req: Request, res: Response) => {
    const { name, tracks, artists, albums } = req.body;
    const { genreId } = req.params;

    try {
        const existingGenre = await prisma.genre.findUnique({
            where: {
                id: genreId
            }
        });

        if (!existingGenre) {
            return res.status(404).send("Genre not found");
        }

        const updatedGenre = await prisma.genre.update({
            where: {
                id: genreId
            },
            data: {
                name,
                tracks,
                albums,
                artists
            }
        });

        res.status(200).send({
            msg: "Genre updated",
            data: updatedGenre
        });
    } catch (error) {
        res.status(400).send(error);
    }
}

export const deleteGenre = async (req: Request, res: Response) => {
    const { genreId } = req.params

    try {
        const deletedGenre = await prisma.genre.delete({
            where: {
                id: genreId
            }
        });

        return res.status(200).send({
            message: "Genre deleted successfully",
            data: deletedGenre
        })
    } catch (error) {
        res.status(400).send(error);
    }
}