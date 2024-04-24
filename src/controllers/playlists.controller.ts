import { Request, Response } from "express"
import prisma  from "../db/client.ts"




export const createPlaylist = async (req: Request, res: Response) => {
    const { name, thumbnail } = req.body;
    const { userId } = req.params;
      
        // Check for required fields
    if (!name || !userId) {
          return res.status(400).send({ error: 'Name is required' });
        }
      
    try {
        const newPlaylist = await prisma.playlists.create({
            data: {
              name,
              thumbnail: thumbnail || '', // Provide a default if no thumbnail is provided
              userId, // Associate the playlist with the user
            },
          });
      
          res.status(201).send(newPlaylist);
        } catch (error) {
          console.error('Error creating playlist:', error);
          res.status(500).send({ error: 'Failed to create playlist' });
        }
      };

export const getAllPlaylists = async (req:Request, res:Response) => {
    try { const allPlaylists = await prisma.playlists.findMany()
        if (!allPlaylists) {
            res.status(404).json({message: "No playlist have been found"})
        }
        res.status(200).send(allPlaylists)
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

export const getPlaylist = async (req:Request, res:Response) => {
    const { playlistId } = req.params

    try {
        const selectedPlaylist = await prisma.playlists.findUnique({
            where: {
                id:playlistId
            }
        })
        if (!selectedPlaylist) {
            res.status(404).json({message: "No playlist have been found"})
        }
        res.status(201).send(selectedPlaylist)

    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
    
}

export const updatePlaylist = async (req:Request, res:Response) => {
    const { playlistId } = req.params
    const { name, thumbnail } = req.body;

    try {
        const updatedPlaylist = await prisma.playlists.update({
            where: {
                id:playlistId
            },
            data: {
                name,
                thumbnail
            }
        })
        res.status(201).send(updatedPlaylist)
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

export const deletePlaylist = async (req:Request, res:Response) => {
    const { playlistId } = req.params

    try {
        const deletedPlaylist = await prisma.playlists.delete({
            where: {
                id:playlistId
            }
        })
        if (!deletedPlaylist) {
            res.status(404).json({message: "No playlist have been found"})
        }
        res.status(201).send("Playlist successfully deleted")

    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
    
}

export const addSongToPL = (req:Request, res:Response) => {

}
export const removeSongfromPL = (req:Request, res:Response) => {
    
}