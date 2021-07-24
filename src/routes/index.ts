//router index file
import { Router } from 'express';
import letterRouter from './letterRouter';

const router = Router();

router.use('/letter', letterRouter);

export default router;