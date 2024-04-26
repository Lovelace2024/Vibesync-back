import { Router } from "express";
import { loginUser, handleRefreshToken, validLogin } from "../controllers/login.controller.ts";

const router: Router = Router();

router.post("/login", loginUser);
router.post("/login/valid", validLogin);
router.get("/refresh", handleRefreshToken);

export default router