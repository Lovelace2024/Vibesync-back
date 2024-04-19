import { authMiddleware } from "../middlewares/auth-middleware.ts"
import { createUser } from "../controllers/user.controller.ts"
import { Router } from "express";

const router: Router = Router();

router.post("/users", authMiddleware, createUser);

export default router