import { Router } from "express";
import { userMe } from "../controllers/userController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();
router.get("/me",authMiddleware,userMe);

export default router;