import { Request, Response } from "express"
import prisma from "../db/client.ts"
// import { redisClient } from "../redisClient.ts";




export const createPlaylist = async (req: Request, res: Response) => {
    const { name, thumbnail } = req.body;
    const { userId } = req.params;

    if (!name) {
        return res.status(400).send({ error: 'Name is required' });
    }

    try {
        const newPlaylist = await prisma.playlists.create({
            data: {
                name,
                thumbnail: thumbnail || '',
                userId,
            },
        });

        res.status(201).send(newPlaylist);
    } catch (error) {
        console.error('Error creating playlist:', error);
        res.status(500).send({ error: 'Failed to create playlist' });
    }
};

export const getAllPlaylists = async (req: Request, res: Response) => {
    try {
        // const playlistsInRedis = await redisClient.get("playlists")
        // if (playlistsInRedis) {
        //     return res.status(200).send(JSON.parse(playlistsInRedis))
        // }
        const allPlaylists = await prisma.playlists.findMany(
            {
                include: {
                    tracksConnections: true
                }
            }
        )
        if (!allPlaylists) {
            res.status(404).json({ message: "Playlist not found" })
        }
        // try {
        //     await redisClient.set("playlists", JSON.stringify(allPlaylists))
        //     await redisClient.expire("playlists", 60 * 60 * 8)
        // } catch (error) {
        //     console.log(error)
        // }
        res.status(200).send(allPlaylists)
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}
export const getAllPlaylistsForUser = async (req: Request, res: Response) => {
    const { userId } = req.params

    try {
        const allPlaylistsForUser = await prisma.playlists.findMany({
            where: {
                userId: userId
            },
            include: {
                tracksConnections: true
            }
        })
        if (!allPlaylistsForUser) {
            res.status(404).json({ message: "Playlist not found" })
        }
        res.status(200).send(allPlaylistsForUser)
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getPlaylist = async (req: Request, res: Response) => {
    const { playlistId } = req.params

    try {
        const selectedPlaylist = await prisma.playlists.findUnique({
            where: {
                id: playlistId
            },
            include: {
                tracksConnections: true
            }
        })
        if (!selectedPlaylist) {
            res.status(404).json({ message: "Playlist not found" })
        }
        res.status(200).send(selectedPlaylist)

    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }

}

export const updatePlaylist = async (req: Request, res: Response) => {
    const { playlistId } = req.params
    const { name, thumbnail } = req.body;

    try {
        const updatedPlaylist = await prisma.playlists.update({
            where: {
                id: playlistId
            },
            data: {
                name,
                thumbnail
            }
        })
        res.status(201).send(updatedPlaylist)
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}

export const deletePlaylist = async (req: Request, res: Response) => {
    const { playlistId } = req.params

    try {
        const deletedPlaylist = await prisma.playlists.delete({
            where: {
                id: playlistId
            }
        })
        if (!deletedPlaylist) {
            res.status(404).json({ message: "Playlist not found" })
        }
        res.status(201).send("Playlist successfully deleted")

    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }

}

export const addTrackToPlaylist = async (req: Request, res: Response) => {
    const { trackId } = req.body
    const { playlistId } = req.params

    try {

        const playlist = await prisma.playlists.findUnique({
            where: { id: playlistId },
        })

        if (!playlist) {
            return res.status(404).json({ message: `Playlist not found` })
        }

        const track = await prisma.tracks.findUnique({
            where: { id: trackId },
        })

        if (!track) {
            return res.status(404).json({ message: `Track not found` })
        }

        const existingConnection = await prisma.playlistToTrack.findFirst({
            where: {
                playlistId,
                trackId,
            },
        })

        if (existingConnection) {
            return res.status(400).json({ message: 'Track is already in the playlist' });
        }


        const newPlaylistToTrack = await prisma.playlistToTrack.create({
            data: {
                playlistId,
                trackId,
            },
        })

        res.status(201).json({
            message: 'Track added to playlist successfully',
            data: newPlaylistToTrack,
        });

    } catch (error) {
        console.error('Error adding track to playlist:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export const removeTrackfromPlaylist = async (req: Request, res: Response) => {
    const { trackId } = req.body
    const { playlistId } = req.params

    try {

        const playlistToTrack = await prisma.playlistToTrack.findFirst({
            where: {
                playlistId,
                trackId,
            },
        })

        if (!playlistToTrack) {
            return res.status(404).json({ message: `Track not found in playlist` });
        }


        await prisma.playlistToTrack.delete({
            where: { id: playlistToTrack.id },
        })

        res.status(200).json({ message: 'Track removed from playlist successfully' })

    } catch (error) {
        console.error('Error removing track from playlist:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
