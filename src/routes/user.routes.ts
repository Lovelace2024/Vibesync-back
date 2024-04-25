import { authMiddleware } from "../middlewares/auth-middleware.ts";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.ts";
import { Router } from "express";

const userRoutes: Router = Router();

userRoutes.get("/users", getUsers);
userRoutes.post("/users", createUser);
userRoutes.patch("/users/:userId", updateUser);
userRoutes.delete("/users/:userId", deleteUser);

export default userRoutes;
