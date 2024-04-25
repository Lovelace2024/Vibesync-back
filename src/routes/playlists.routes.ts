import { Router } from "express"
import {  addTrackToPlaylist, createPlaylist, deletePlaylist, getAllPlaylists, getPlaylist, removeTrackfromPlaylist, updatePlaylist } from "../controllers/playlists.controller.ts"

const playlistsRoutes = Router()

playlistsRoutes.post("/user/:userId/playlists", createPlaylist)
playlistsRoutes.get("/user/:userId/playlists", getAllPlaylists)
playlistsRoutes.get("/user/:userId/playlists/:playlistId", getPlaylist)
playlistsRoutes.patch("/user/:userId/playlists/:playlistId", updatePlaylist)
playlistsRoutes.delete("/user/:userId/playlists/:playlistId", deletePlaylist)
playlistsRoutes.post("/user/:userId/playlists/:playlistId/addTrack", addTrackToPlaylist)
playlistsRoutes.delete("/user/:userId/playlists/:playlistId/removeTrack", removeTrackfromPlaylist)



export default playlistsRoutes