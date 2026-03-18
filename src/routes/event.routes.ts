import { Router } from 'express';
import {
  getAllEventsController,
  createEventController,
  updateEventController,
  deleteEventController
} from '../controllers/event.controller';

const router = Router();

router.get('/', getAllEventsController);
router.post('/', createEventController);
router.put('/:id', updateEventController);
router.delete('/:id', deleteEventController);

export default router;