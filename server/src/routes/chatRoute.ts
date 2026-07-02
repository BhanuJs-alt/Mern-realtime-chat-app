import { Router } from "express";

const router = Router();
router.post("/chat",authMiddleware,);

export default router;