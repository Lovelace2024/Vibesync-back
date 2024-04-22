import prisma from "../db/client.ts"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

const getArtists = async (req: Request, res: Response) => {
    try {
        const accounts = await prisma.artists.findMany({
            include: {
                genre: true
            }
        })
        if (!accounts) {
            return res.status(404).send({ message: "Accounts not found" })
        }
        res.status(200).send(accounts);
    } catch (error) {
        res.status(404).send(error)
    }
}

const getArtist = async (req: Request, res: Response) => {
    const { artistId } = req.params

    try {
        const selectedArtist = await prisma.artists.findUnique({
            where: {
                id: artistId
            },
        });
        if (!selectedArtist) {
            res.status(404).json({ message: "Artist not found" });
        }

        res.status(200).send(selectedArtist);

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const createArtist = async (req: Request, res: Response) => {
    const { body } = req
    console.log('body', body)
    const { email, name, image, password, description, genreId } = body
    try {

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const newUser = await prisma.artists.create({
            data: {
                email,
                name,
                description,
                genre: { connect: { id: genreId } },
                thumbnail: image,
                password: passwordHash,
            }
        })
        return res.send(newUser)
    } catch (error) {
        res.status(404).send(error)
    }
}

const updateArtist = async (req: Request, res: Response) => {
    const { email, name, image, description, genreId } = req.body
    const { artistId } = req.params

    const artist = await prisma.artists.findUnique({
        where: {
            id: artistId
        }
    })

    if (!artist) {
        res.status(404).json({ message: "Artist not found" })
    }

    const updatedArtist = await prisma.artists.update({
        where: {
            id: artistId
        },
        data: {
            email: email || artist?.email,
            name: name || artist?.name,
            description: description || artist?.description,
            genre: { connect: { id: genreId } },
            thumbnail: image || artist?.thumbnail
        }
    })
    res.status(201).json({ message: `${updatedArtist.name} updated successfully` })
}

const deleteArtist = async (req: Request, res: Response) => {
    const { artistId } = req.params
    try {
        const deletedArtist = await prisma.artists.delete({
            where: {
                id: artistId
            }
        })
        res.status(201).json({ message: `${deletedArtist.name} deleted successfully` })

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export { getArtists, getArtist, createArtist, updateArtist, deleteArtist }