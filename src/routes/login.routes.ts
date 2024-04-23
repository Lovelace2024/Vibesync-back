import { Router } from "express";
import { loginUser } from "../controllers/login.controller.ts";

const router: Router = Router();

router.post("/login", loginUser);

export default router