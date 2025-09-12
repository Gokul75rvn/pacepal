const express = require('express');
const router = express.Router();
const controller = require('../controllers/habitController');

// GET /api/habits
router.get('/', controller.listHabits);
// POST /api/habits
router.post('/', controller.createHabit);
// DELETE /api/habits/:id
router.delete('/:id', controller.deleteHabit);

module.exports = router;
