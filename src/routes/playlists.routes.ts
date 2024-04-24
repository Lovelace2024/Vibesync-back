import { Router } from "express"
import { createPlaylist, deletePlaylist, getAllPlaylists, getPlaylist, updatePlaylist } from "../controllers/playlists.controller.ts"

const playlistsRoutes = Router()

playlistsRoutes.post("user/:userId/playlists", createPlaylist)
playlistsRoutes.get("/playlists", getAllPlaylists)
playlistsRoutes.get("/playlist/:playlistId", getPlaylist)
playlistsRoutes.patch("/playlist/:playlistId", updatePlaylist)
playlistsRoutes.delete("/playlist/:playlistId", deletePlaylist)



export default playlistsRoutes