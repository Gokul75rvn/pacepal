import express from 'express';
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
  completeHabit,
  uncompleteHabit,
} from '../controllers/habitController.js';
import authenticate from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticate, getHabits);
router.post('/', authenticate, createHabit);
router.put('/:id', authenticate, updateHabit);
router.delete('/:id', authenticate, deleteHabit);
router.post('/:id/complete', authenticate, completeHabit);
router.post('/:id/uncomplete', authenticate, uncompleteHabit);

export default router;