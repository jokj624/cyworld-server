import { Router } from "express";
import letterController from "../controllers/letterController";

const router = Router();

router.post('/', letterController.addLetter);
router.get('/', letterController.getLetter);

export default router;