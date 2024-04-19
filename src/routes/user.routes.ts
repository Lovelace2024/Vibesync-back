import { authMiddleware } from "src/middlewares/auth-middleware.ts";
import { createUser } from "../controllers/user.controller.ts"
import { Router } from "express";

const router: Router = Router();

router.post("/users", createUser);

export default router