import { Router } from "express";
import { addGenre, deleteGenre, getAllGenres, updateGenre } from "../controllers/genre.controller.ts";



const router: Router = Router()

router.post("/genre", addGenre)
router.get("/genre", getAllGenres)
router.patch("/genre/:genreId", updateGenre)
router.delete("/genre/:genreId", deleteGenre)

export default router