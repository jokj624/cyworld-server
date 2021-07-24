//router index file
import { Router } from 'express';
import letterRouter from './letterRouter';
import guestRouter from './guestRouter';

const router = Router();

router.use('/letter', letterRouter);
router.use('/guest', guestRouter);

export default router;