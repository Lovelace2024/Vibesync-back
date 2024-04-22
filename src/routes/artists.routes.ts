import { Router } from "express"
import { getArtists, getArtist, createArtist, updateArtist, deleteArtist } from "../controllers/artist.controller.ts"

const artistsRoutes: Router = Router()

artistsRoutes.post("/artists", createArtist)
artistsRoutes.get("/artists", getArtists)
artistsRoutes.get("/artists/:id", getArtist)
artistsRoutes.patch("/artists/:artistId", updateArtist)
artistsRoutes.delete("/artists/:id", deleteArtist)

export default artistsRoutes