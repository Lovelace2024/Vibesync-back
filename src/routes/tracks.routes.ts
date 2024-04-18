import { Router } from "express"
import { createTracks } from "src/controllers/tracks.controller.ts"

const tracksRoutes = Router()

tracksRoutes.post("/api/tracks", createTracks)

export default tracksRoutes