import { Router } from "express";
import { addGenre } from "src/controllers/genre.controller";



const genreRoutes = Router()

genreRoutes.post("/genre", addGenre)

export default genreRoutes