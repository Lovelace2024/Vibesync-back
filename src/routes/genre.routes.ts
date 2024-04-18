import { Router } from "express";
import { addGenre, deleteGenre, getAllGenres, updateGenre } from "../controllers/genre.controller.ts";



const genreRoutes = Router()

genreRoutes.post("/genre", addGenre)
genreRoutes.get("/genre", getAllGenres)
genreRoutes.patch("/genre/:genreId", updateGenre)
genreRoutes.delete("/genre/:genreId", deleteGenre )

export default genreRoutes