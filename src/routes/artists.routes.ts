import { Router } from "express";
import {
  getArtists,
  getArtist,
  createArtist,
  updateArtist,
  deleteArtist,
} from "../controllers/artist.controller.ts";
import { getAllTracksByArtist } from "../controllers/tracks.controller.ts";

const artistsRoutes: Router = Router();

artistsRoutes.post("/artists", createArtist);
artistsRoutes.get("/artists", getArtists);
artistsRoutes.get("/artists/:artistId/tracks", getAllTracksByArtist);
artistsRoutes.get("/artists/:artistId", getArtist);
artistsRoutes.patch("/artists/:artistId", updateArtist);
artistsRoutes.delete("/artists/:artistId", deleteArtist);

export default artistsRoutes;
