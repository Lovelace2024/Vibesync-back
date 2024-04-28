import { Router } from "express"
import { authMiddleware } from "../middlewares/auth-middleware.ts"
import { search } from "../controllers/search.controller.ts"

const router: Router = Router()

router.get("/search/:term", search)

export default router
