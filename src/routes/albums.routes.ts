import { Router } from "express"
import { addAlbum, deleteAlbum, getAlbum, getAllAlbums, updateAlbum } from "../controllers/albums.controller.ts"

const router: Router = Router()

router.post("/albums", addAlbum)
router.get("/albums", getAllAlbums)
router.get("/albums/:albumId", getAlbum)
router.patch("/albums/:albumId", updateAlbum)
router.delete("/albums/:albumId", deleteAlbum)

export default router