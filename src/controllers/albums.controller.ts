import { Request, Response } from "express"
import prisma from "../db/client.ts"

//Para hacer el post hay que poner en el json genre y artist (no genreName y artistName)
export const addAlbum = async (req: Request, res: Response) => {
    const { name, thumbnail, genre, artist, tracks } = req.body
    try {
        
        const newAlbum = await prisma.albums.create({
            data: {
                name,
                thumbnail,
                genre: { connect: { name: genre } },
                artist: { connect: { name: artist } },
                tracks: { create: tracks }
            },
            include: {
                genre: true,
                artist: true,
                tracks: true
            }
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
        res.status(400).send(error)
    }
}

export const getAlbum = async (req: Request, res: Response) => {
    const { albumId } = req.params

    try {
        const selectedAlbum = await prisma.albums.findUnique({
            where: {
                id: albumId
            },
            include: {
                tracks: true
            }
        });
        if (!selectedAlbum) {
            res.status(404).json({ message: "Album not found" });
        }

        res.status(200).send({
            msg: "Selected Album",
            data: selectedAlbum
          });

    } catch (error) {
        res.status(400).send(error)
    }
}

//Para hacer el patch hay que poner en el json genreName y artistName
export const updateAlbum = async (req: Request, res: Response) => {
    const { albumId } = req.params
    const { name, thumbnail, genre, artist, tracks } = req.body

    if(!albumId) {
        return res.status(400).send({
            msg: "The fiel albumId is required"
        })
    }

    try {
        const updatedAlbum = await prisma.$transaction(async (prisma) => {
            const updatedAlbum = await prisma.albums.update({
                where: {
                    id: albumId
                },
                data: {
                    name,
                    thumbnail,
                    genre,
                    artist
                }
            })
            if (tracks && tracks.length > 0) {
                await prisma.tracksOnAlbums.deleteMany({
                    where: {
                        albumId: albumId
                    }
                })

                const createTracks = tracks.map((trackId: number) => ({
                    albumId: albumId,
                    trackId: trackId
                }))
                await prisma.tracksOnAlbums.createMany({
                    data: createTracks
                })
            }
            return prisma.albums.findUnique({
                where: {
                    id: albumId
                },
                include: {
                    tracks: true
                }
            })
        })
        res.status(200).send({
            msg: "Album updated successfully",
            data: updatedAlbum,
            type: typeof updatedAlbum
        })
    } catch (error) {
        res.status(400).send(error)
    }
}


export const deleteAlbum = async (req: Request, res: Response) => {
    const { albumId } = req.params

    if(!albumId){
        return res.status(400).send({
            msg: "The field albumId is required"
        })
    }

    try {
        const album = await prisma.albums.findUnique({
            where: {
                id: albumId
            },
            include: {
                tracks: true
            }
        })

        if(!album){
            return res.status(400).send({
                msg: "Album not found"
            })
        }

        const deletedAlbum = await prisma.$transaction(async(prisma)=> {
            await prisma.tracksOnAlbums.deleteMany({
                where: {
                    albumId: albumId
                }
            })
            const deletedAlbum = await prisma.albums.delete({
                where: {
                    id: albumId
                }
            })
            return deletedAlbum
        })
        res.status(200).send({
            msg: "Album deleted successfully",
            data: deletedAlbum,
            type: typeof deletedAlbum
        })

    } catch (error) {
        res.status(400).send(error)
    }
}