import { Router } from "express"
import { authMiddleware } from "../middlewares/auth-middleware.ts"
import { addAlbum, deleteAlbum, getAlbum, getAllAlbums, updateAlbum } from "../controllers/albums.controller.ts"

const router: Router = Router()

router.post("/albums", authMiddleware, addAlbum)
router.get("/albums", authMiddleware, getAllAlbums)
router.get("/albums/:albumId", authMiddleware, getAlbum)
router.patch("/albums/:albumId", authMiddleware, updateAlbum)
router.delete("/albums/:albumId", authMiddleware, deleteAlbum)

export default router