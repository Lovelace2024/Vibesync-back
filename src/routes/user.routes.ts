import { authMiddleware } from "../middlewares/auth-middleware.ts";
import { changePassword, createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller.ts"
import { Router } from "express";

const userRoutes: Router = Router()

userRoutes.get("/users", authMiddleware, getUsers)
userRoutes.post("/users", createUser)
userRoutes.patch("/users", authMiddleware, updateUser)
userRoutes.delete("/users", authMiddleware, deleteUser)
userRoutes.patch("/changepassword", authMiddleware, changePassword)

export default userRoutes