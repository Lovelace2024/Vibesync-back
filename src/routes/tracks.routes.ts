import { Router } from "express"
import {
  createTracks,
  deleteTracks,
  getAllTracks,
  getAllTracksByArtist,
  getTrack,
  updateTracks,
} from "../controllers/tracks.controller.ts"

const router: Router = Router()

router.get("/tracks", getAllTracks)
router.post("/tracks", createTracks)
router.get("/tracks/:artistId", getAllTracksByArtist)
router.get("/tracks/track/:trackId", getTrack)
router.patch("/tracks/:trackId", updateTracks)
router.delete("/tracks/:trackId", deleteTracks)

export default router;
