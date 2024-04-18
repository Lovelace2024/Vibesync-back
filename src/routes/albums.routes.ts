import { Router } from "express"
import { addAlbum, deleteAlbum, getAlbum, getAllAlbums, updateAlbum } from "../controllers/albums.controller"

const albumsRoutes = Router()

albumsRoutes.post("/albums", addAlbum)
albumsRoutes.get("/albums", getAllAlbums)
albumsRoutes.get("/albums/:albumId", getAlbum)
albumsRoutes.patch("/albums/:albumId", updateAlbum)
albumsRoutes.delete("/albums/:albumId", deleteAlbum)

export default albumsRoutes