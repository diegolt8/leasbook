import {Router} from 'express';
const router = Router();
import multer from '../libs/multer'

import {createBook, getBooks, getBook, deleteBook, updateBook} from '../controllers/bookctrl'

router.route('/publication')
    .post(multer.single('add_photo'), createBook)
    .get(getBooks)

router.route('/publication/:id')
    .get(getBook)
    .delete(deleteBook)
    .put(updateBook)

export default router;