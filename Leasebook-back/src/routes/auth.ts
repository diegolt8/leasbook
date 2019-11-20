import { Router } from 'express';
const router: Router = Router();
import { signup, signin } from '../controllers/authctrl'

router.route('/signup').post(signup)
router.post('/signin', signin);

export default router;