import { Router } from "express"
import { createPlaylist, deletePlaylist, getAllPlaylists, getPlaylist, updatePlaylist } from "../controllers/playlists.controller.ts"

const playlistsRoutes = Router()

playlistsRoutes.post("user/:userId/playlists", createPlaylist)
playlistsRoutes.get("/playlists", getAllPlaylists)
playlistsRoutes.get("/playlist/:PlaylistId", getPlaylist)
playlistsRoutes.patch("/playlist/:PlaylistId", updatePlaylist)
playlistsRoutes.delete("/playlist/:PlaylistId", deletePlaylist)



export default playlistsRoutes