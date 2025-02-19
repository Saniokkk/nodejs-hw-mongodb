import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllContactsController,
  getStudentByIdController,
  createStudentController,
} from '../controllers/contacts.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getStudentByIdController));
router.post('/contacts', ctrlWrapper(createStudentController));

export default router;
