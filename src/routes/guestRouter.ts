import { Router } from "express";
import guestController from "../controllers/guestController";

const router = Router();

router.post('/', guestController.addGuest);
router.get('/', guestController.getGuest);

export default router;