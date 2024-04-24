import { authMiddleware } from "../middlewares/auth-middleware.ts";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller.ts"
import { Router } from "express";

const userRoutes: Router = Router()

userRoutes.get("/account", getUsers)
userRoutes.post("/account", authMiddleware, createUser)
userRoutes.patch("/account/:userId", updateUser)
userRoutes.delete("/account/:userId", deleteUser)

export default userRoutes