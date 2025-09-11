import express from 'express';
import Habit from '../models/Habit.js';
import HabitController from '../controllers/habitController.js';

const router = express.Router();
const habitController = new HabitController(Habit);

// Bind each method to the controller instance
router.post('/', habitController.createHabit.bind(habitController));
router.get('/', habitController.getHabits.bind(habitController));
router.put('/:id', habitController.updateHabit.bind(habitController));
router.delete('/:id', habitController.deleteHabit.bind(habitController));

export default router;