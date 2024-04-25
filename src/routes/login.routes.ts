import { Router } from "express";
import { loginUser, handleRefreshToken } from "../controllers/login.controller.ts";

const router: Router = Router();

router.post("/login", loginUser);
router.post("/refresh", handleRefreshToken);

export default router