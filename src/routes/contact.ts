import { changeLikeContact, findAll, findOne, saveContact } from '../controller';
import { Router } from 'express';
import { upload } from '../services/images/multer.service';

const router = Router();

router
    // create
    .post('/',upload,saveContact)
    // update

    // liked
    .patch('/:id',changeLikeContact)
    // getById
    .get('/:id',findOne)
    // getAll
    .get('/',findAll)
    // delete

export default router;