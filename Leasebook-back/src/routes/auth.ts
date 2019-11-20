import { Router } from 'express';
const router = Router();

import { signup, signin } from '../controllers/authctrl'
//import { TokenValidation } from '../libs/verifyToken'

router.post('/signup', signup);
router.post('/signin', signin);
//router.get('/profile', TokenValidation, profile)

export default router;