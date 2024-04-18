import { Request, Response } from "express"
import prisma from "../db/client"

export const addArtist = async (req:Request, res:Response) =>{
    const { name, thumbnail, genreId } = req.body

    try { 
        const newArtist = await prisma.artists.create({ 
            include:{
                tracks:true
            },
        data:{ name, thumbnail, genreId}})
        res.status(201).send(newArtist)
        
    } catch (error) {
        res.status(404).send(error)
    }
}

export const getArtist = async (req:Request, res:Response) =>{
    const { artistId } = req.params

    try {const selectedArtist = await prisma.artists.findUnique({
            where: {
                id:artistId 
            },
        });
        if (!selectedArtist) {
            res.status(404).json({ message: "Artist not found" });
            }

        res.status(200).send(selectedArtist);
        
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

export const getAllArtists = async (req:Request, res:Response) =>{
    try { const allArtists = await prisma.artists.findMany({
        include:{
            tracks:true
        }
    })
        if (!allArtists) {
            res.status(404).json({message: "No artists have been found"})
        }
        res.status(200).send(allArtists)
        
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

export const updateArtist = async (req:Request, res:Response) =>{
    const { name, thumbnail, genreId } = req.body
    const { artistId } = req.params

    console.log(req.params)

    try {
        const updatedArtist = await prisma.artists.update({
            where: {
                id:artistId 
            }, data: {
                name,
                thumbnail,
                genreId
        }})
        res.status(201).send(updatedArtist)
    } catch (error) {
        res.status(500).json({message:"Internal server error " + error})
    }
}

export const deleteArtist = async (req:Request, res:Response) =>{
    const { artistId } = req.params
    try { const deletedArtist = await prisma.artists.delete({
        where: {
            id:artistId
        }
    })
        res.status(201).json({message: "Artist deleted successfully"})
        
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}