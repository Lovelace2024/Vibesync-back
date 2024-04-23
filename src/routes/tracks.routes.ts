import { Router } from "express"
import { createTracks, deleteTracks, getAllTracks, getTrack, updateTracks } from "../controllers/tracks.controller.ts"
import { validateCreateTrackRequest } from "../middlewares/controllers.middlewares/validation.controller.middleware.ts"

const router: Router = Router()

router.get("/tracks", getAllTracks)
router.post("/tracks", validateCreateTrackRequest, createTracks)
// router.get("/tracks/:trackId", getTrack)
// router.patch("/tracks/:trackId", updateTracks)
// router.delete("/tracks/:trackId", deleteTracks)

export default router