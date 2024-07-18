import { Router } from "express";
import ContactsRoute from './contact';

const router = Router()
router
    .use('/contacts',ContactsRoute)

export default router;