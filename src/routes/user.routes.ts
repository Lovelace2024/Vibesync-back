import { authMiddleware } from "src/middlewares/auth-middleware.ts";
import { createAccount, createUser, getAccounts } from "../controllers/user.controller.ts"
import { Router } from "express";

const userRoutes: Router = Router()

userRoutes.get("/account", getAccounts)
userRoutes.post("/account", authMiddleware, createAccount)

export default userRoutes