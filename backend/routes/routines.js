import express from 'express';
import {
  getRoutines,
  createRoutine,
  updateRoutine,
  deleteRoutine,
  startRoutine,
} from '../controllers/routineController.js';
import authenticate from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticate, getRoutines);
router.post('/', authenticate, createRoutine);
router.put('/:id', authenticate, updateRoutine);
router.delete('/:id', authenticate, deleteRoutine);
router.post('/:id/start', authenticate, startRoutine);

export default router;