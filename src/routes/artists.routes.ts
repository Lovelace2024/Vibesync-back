import { Router } from "express"
import { authMiddleware } from "../middlewares/auth-middleware.ts"
import { getArtists, getArtist, createArtist, updateArtist, deleteArtist } from "../controllers/artist.controller.ts"
import { getAllTracksByArtist } from "../controllers/tracks.controller.ts"

const artistsRoutes: Router = Router()

artistsRoutes.post("/artists", authMiddleware, createArtist)
artistsRoutes.get("/artists", authMiddleware, getArtists)
artistsRoutes.get("/artists/:artistId/tracks", authMiddleware, getAllTracksByArtist)
// artistsRoutes.get("/artists/:id", getArtist)
// artistsRoutes.patch("/artists/:artistId", updateArtist)
// artistsRoutes.delete("/artists/:id", deleteArtist)

export default artistsRoutes