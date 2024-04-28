import { Router } from "express";
import { postFile } from '../controllers/upload.controller.ts';



const router: Router = Router();

router.post('/upload', postFile);

export default router;