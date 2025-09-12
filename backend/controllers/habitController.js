import Habit from '../models/Habit.js';
import User from '../models/User.js';

const getHabits = async (req, res) => {
  try {
    const userId = req.user?.id || req.query.userId; // adapt as needed
    const habits = await Habit.find(userId ? { userId } : {});
    res.json(habits);
  } catch (e) {
    res.status(500).json({ message: 'Error fetching habits' });
  }
};

const createHabit = async (req, res) => {
  try {
    const userId = req.user?.id || req.body.userId;
    const habit = await Habit.create({ ...req.body, userId });
    res.status(201).json(habit);
  } catch (e) {
    res.status(400).json({ message: 'Error creating habit' });
  }
};

const updateHabit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, frequency, category, goal, isActive } = req.body;

    const habit = await Habit.findByIdAndUpdate(
      id,
      { name, description, frequency, category, goal, isActive },
      { new: true }
    );

    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    res.status(200).json(habit);
  } catch (error) {
    console.error('Update habit error:', error);
    res.status(500).json({ message: error.message });
  }
};

const deleteHabit = async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (e) {
    res.status(404).json({ message: 'Habit not found' });
  }
};

const completeHabit = async (req, res) => {
  try {
    const { id } = req.params;
    const { notes } = req.body;
    
    const habit = await Habit.findById(id);

    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if already completed today
    const alreadyCompleted = habit.completedDates.some(
      completion => new Date(completion.date).toDateString() === today.toDateString()
    );

    if (alreadyCompleted) {
      return res.status(400).json({ message: 'Habit already completed today' });
    }

    // Add completion
    habit.completedDates.push({
      date: today,
      notes: notes || '',
    });

    // Update streak
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const completedYesterday = habit.completedDates.some(
      completion => new Date(completion.date).toDateString() === yesterday.toDateString()
    );

    if (completedYesterday) {
      habit.streak += 1;
    } else {
      habit.streak = 1;
    }

    await habit.save();

    // Update user stats
    const user = await User.findOne({ uid: req.user.uid });
    if (user) {
      if (habit.streak > user.stats.bestStreak) {
        user.stats.bestStreak = habit.streak;
      }
      
      // Calculate current streak across all habits
      const userHabits = await Habit.find({ userId: user._id, isActive: true });
      const totalCompletedToday = userHabits.filter(h => 
        h.completedDates.some(c => 
          new Date(c.date).toDateString() === today.toDateString()
        )
      ).length;
      
      user.stats.currentStreak = Math.max(user.stats.currentStreak, habit.streak);
      user.stats.completionRate = Math.round(
        (totalCompletedToday / userHabits.length) * 100
      );
      
      await user.save();
    }

    res.status(200).json({ message: 'Habit marked as completed', habit });
  } catch (error) {
    console.error('Complete habit error:', error);
    res.status(500).json({ message: error.message });
  }
};

const uncompleteHabit = async (req, res) => {
  try {
    const { id } = req.params;
    
    const habit = await Habit.findById(id);

    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Remove today's completion
    habit.completedDates = habit.completedDates.filter(
      completion => new Date(completion.date).toDateString() !== today.toDateString()
    );

    // Update streak
    habit.streak = Math.max(0, habit.streak - 1);

    await habit.save();

    // Update user stats
    const user = await User.findOne({ uid: req.user.uid });
    if (user) {
      user.stats.currentStreak = Math.max(0, user.stats.currentStreak - 1);
      
      // Recalculate completion rate
      const userHabits = await Habit.find({ userId: user._id, isActive: true });
      const totalCompletedToday = userHabits.filter(h => 
        h.completedDates.some(c => 
          new Date(c.date).toDateString() === today.toDateString()
        )
      ).length;
      
      user.stats.completionRate = Math.round(
        (totalCompletedToday / userHabits.length) * 100
      );
      
      await user.save();
    }

    res.status(200).json({ message: 'Habit marked as incomplete', habit });
  } catch (error) {
    console.error('Uncomplete habit error:', error);
    res.status(500).json({ message: error.message });
  }
};

export {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
  completeHabit,
  uncompleteHabit,
};