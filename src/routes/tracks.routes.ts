import { Router } from "express"
import { authMiddleware } from "../middlewares/auth-middleware.ts"
import { createTracks, deleteTracks, getAllTracks, getAllTracksByArtist, getTrack, updateTracks } from "../controllers/tracks.controller.ts"

const router: Router = Router()

router.get("/tracks", authMiddleware, getAllTracks)
router.post("/tracks", authMiddleware, createTracks)
//router.get("/tracks/:artistId", getAllTracksByArtist)
router.get("/tracks/:trackId", authMiddleware, getTrack)
router.patch("/tracks/:trackId", authMiddleware, updateTracks)
router.delete("/tracks/:trackId", authMiddleware, deleteTracks)

export default router;
