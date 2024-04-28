import { Router } from "express"
import { authMiddleware } from "../middlewares/auth-middleware.ts"
import { search } from "../controllers/serach.controller.ts"

const router: Router = Router()

router.get("/search/:term", authMiddleware, search)

export default router
