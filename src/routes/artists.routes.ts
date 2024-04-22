import { Router } from "express"
import { addArtist, deleteArtist, getAllArtists, getArtist, updateArtist } from "../controllers/artists.controller"

const artistsRoutes: Router = Router()

artistsRoutes.post("/artists", addArtist)
artistsRoutes.get("/artists", getAllArtists)
artistsRoutes.get("/artists/:id", getArtist)
artistsRoutes.patch("/artists/:artistId", updateArtist)
artistsRoutes.delete("/artists/:id", deleteArtist)

export default artistsRoutes