import prisma from "../db/client.ts"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { redisClient } from "../redisClient.ts"

const getArtists = async (req: Request, res: Response) => {
    console.log('req')
    try {
        const artistsInRedis = await redisClient.get('artists')
        if (artistsInRedis) {
            return res.status(200).send(JSON.parse(artistsInRedis));
        }
        const artists = await prisma.artists.findMany({
            include: {
                genre: true
            }
        })
        console.log('artists', artists)
        if (!artists) {
            return res.status(404).send({ message: "artists not found" })
        }
        try {
            await redisClient.set('artists', JSON.stringify(artists));
            await redisClient.expire('artists', 60 * 60 * 8);
        } catch (error) {

        }
        res.status(200).send(artists);
    } catch (error) {
        res.status(404).send(error)
    }
}


//artistId viene undefined
const getArtist = async (req: Request, res: Response) => {
    const { artistId } = req.params
    console.log({ artistId })
    try {
        const selectedArtist = await prisma.artists.findUnique({
            where: {
                id: artistId
            },
        });
        console.log({ selectedArtist })
        if (!selectedArtist) {
            res.status(404).json({ message: "Artist not found" });
        }

        res.status(200).send(selectedArtist);

    } catch (error) {
        res.status(400).json(error)
    }
}

const createArtist = async (req: Request, res: Response) => {
    const { body } = req
    console.log('body', body)
    const { email, name, image, password, description, genre } = body
    try {

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const newUser = await prisma.artists.create({
            data: {
                email,
                name,
                description,
                genre: { connect: { name: genre } },
                thumbnail: image,
                password: passwordHash,
            }
        })
        const userForToken = {
            username: newUser.name,
            id: newUser.id,
        }

        const token = jwt.sign(
            userForToken,
            process.env.SECRET!,
            { expiresIn: 60 * 60 * 24 }
        )
        return res.send({
            token: token,
            user: newUser
        })
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