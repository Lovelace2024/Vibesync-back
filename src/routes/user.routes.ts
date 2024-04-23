import { authMiddleware } from "../middlewares/auth-middleware.ts";
import { createUser, getUsers } from "../controllers/user.controller.ts"
import { Router } from "express";

const userRoutes: Router = Router()

userRoutes.get("/account", getUsers)
userRoutes.post("/account", authMiddleware, createUser)

export default userRoutes