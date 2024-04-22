import { Router } from "express"
import { createTracks, deleteTracks, getAllTracks, getTrack, updateTracks } from "../controllers/tracks.controller.ts"

const tracksRoutes: Router = Router()

tracksRoutes.post("/tracks", createTracks)
tracksRoutes.get("/tracks", getAllTracks)
tracksRoutes.get("/tracks/:trackId", getTrack)
tracksRoutes.patch("/tracks/:trackId", updateTracks)
tracksRoutes.delete("/tracks/:trackId", deleteTracks)

export default tracksRoutes