import Routine from '../models/User.js';
import Habit from '../models/Habit.js';

const getRoutines = async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.user.uid });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const routines = await Routine.find({ userId: user._id, isActive: true })
      .populate({
        path: 'habits.habitId',
        model: 'Habit',
        select: 'name description'
      });

    res.status(200).json(routines);
  } catch (error) {
    console.error('Get routines error:', error);
    res.status(500).json({ message: error.message });
  }
};

const createRoutine = async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.user.uid });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { name, description, habits, estimatedDuration, schedule } = req.body;

    // Calculate estimated duration from habits if not provided
    let duration = estimatedDuration;
    if (!duration && habits && habits.length > 0) {
      duration = habits.reduce((total, habit) => total + habit.duration, 0);
    }

    const routine = new Routine({
      userId: user._id,
      name,
      description,
      habits,
      estimatedDuration: duration,
      schedule,
    });

    const createdRoutine = await routine.save();
    res.status(201).json(createdRoutine);
  } catch (error) {
    console.error('Create routine error:', error);
    res.status(500).json({ message: error.message });
  }
};

const updateRoutine = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, habits, estimatedDuration, schedule, isActive } = req.body;

    // Calculate estimated duration from habits if not provided
    let duration = estimatedDuration;
    if (!duration && habits && habits.length > 0) {
      duration = habits.reduce((total, habit) => total + habit.duration, 0);
    }

    const routine = await Routine.findByIdAndUpdate(
      id,
      { name, description, habits, estimatedDuration: duration, schedule, isActive },
      { new: true }
    );

    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    res.status(200).json(routine);
  } catch (error) {
    console.error('Update routine error:', error);
    res.status(500).json({ message: error.message });
  }
};

const deleteRoutine = async (req, res) => {
  try {
    const { id } = req.params;
    
    const routine = await Routine.findByIdAndDelete(id);

    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    res.status(200).json({ message: 'Routine deleted successfully' });
  } catch (error) {
    console.error('Delete routine error:', error);
    res.status(500).json({ message: error.message });
  }
};

const startRoutine = async (req, res) => {
  try {
    const { id } = req.params;
    
    const routine = await Routine.findById(id);

    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    // Mark routine as started (you can add more logic here as needed)
    res.status(200).json({ 
      message: 'Routine started successfully', 
      routine,
      estimatedDuration: routine.estimatedDuration
    });
  } catch (error) {
    console.error('Start routine error:', error);
    res.status(500).json({ message: error.message });
  }
};

export {
  getRoutines,
  createRoutine,
  updateRoutine,
  deleteRoutine,
  startRoutine,
};