const express = require('express');
const router = express.Router();
const HabitController = require('../controllers/habitController');
const authMiddleware = require('../middleware/auth');

// Create a new habit
router.post('/', authMiddleware, HabitController.createHabit);

// Get all habits
router.get('/', authMiddleware, HabitController.getAllHabits);

// Get a habit by ID
router.get('/:id', authMiddleware, HabitController.getHabitById);

// Update a habit by ID
router.put('/:id', authMiddleware, HabitController.updateHabit);

// Delete a habit by ID
router.delete('/:id', authMiddleware, HabitController.deleteHabit);

module.exports = router;