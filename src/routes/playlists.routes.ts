import { Router } from "express"
import { authMiddleware } from "../middlewares/auth-middleware.ts"
import { addTrackToPlaylist, createPlaylist, deletePlaylist, getAllPlaylists, getAllPlaylistsForUser, getPlaylist, removeTrackfromPlaylist, updatePlaylist } from "../controllers/playlists.controller.ts"

const playlistsRoutes: Router = Router()

playlistsRoutes.post("/user/:userId/playlists", authMiddleware, createPlaylist)
playlistsRoutes.get("/user/:userId/playlists", authMiddleware, getAllPlaylistsForUser)
playlistsRoutes.get("/playlists", authMiddleware, getAllPlaylists)
playlistsRoutes.get("/user/:userId/playlists/:playlistId", authMiddleware, getPlaylist)
playlistsRoutes.patch("/user/:userId/playlists/:playlistId", authMiddleware, updatePlaylist)
playlistsRoutes.delete("/user/:userId/playlists/:playlistId", authMiddleware, deletePlaylist)
playlistsRoutes.post("/user/:userId/playlists/:playlistId/addtrack", authMiddleware, addTrackToPlaylist)
playlistsRoutes.delete("/user/:userId/playlists/:playlistId/removetrack", authMiddleware, removeTrackfromPlaylist)

export default playlistsRoutes