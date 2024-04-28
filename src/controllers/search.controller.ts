import { Request, Response } from "express"
import prisma  from "../db/client.ts"

export const search = async (req: Request, res: Response) => {
    const { term } = req.params;

    try {
        const traksResults = await prisma.tracks.findMany({
            where: {
                name: {
                    startsWith: term,
                    mode: 'insensitive'
                }
            }
        })

        const artistsResults = await prisma.artists.findMany({
            where: {
                name: {
                    startsWith: term,
                    mode: 'insensitive'
                }
            }
        })

        const genreResults = await prisma.genre.findMany({
            where: {
                name: {
                    startsWith: term,
                    mode: 'insensitive'
                }
            }
        })

        const albumsResults = await prisma.albums.findMany({
            where: {
                name: {
                    startsWith: term,
                    mode: 'insensitive'
                }
            }
        })

        const response = {
            artists: artistsResults,
            tracks: traksResults,
            genre: genreResults,
            albums: albumsResults
        }
       
        res.status(200).send(response)

    } catch(err) {
        res.status(500).json({ message: "Internal server error" })
    }
}
