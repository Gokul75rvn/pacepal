class HabitController {
    constructor(habitModel) {
        this.habitModel = habitModel;
    }

    async createHabit(req, res) {
        try {
            const habitData = req.body;
            const newHabit = await this.habitModel.create(habitData);
            res.status(201).json(newHabit);
        } catch (error) {
            res.status(500).json({ message: 'Error creating habit', error });
        }
    }

    async getHabits(req, res) {
        try {
            const habits = await this.habitModel.find();
            res.status(200).json(habits);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving habits', error });
        }
    }

    async updateHabit(req, res) {
        try {
            const { id } = req.params;
            const updatedHabit = await this.habitModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedHabit) {
                return res.status(404).json({ message: 'Habit not found' });
            }
            res.status(200).json(updatedHabit);
        } catch (error) {
            res.status(500).json({ message: 'Error updating habit', error });
        }
    }

    async deleteHabit(req, res) {
        try {
            const { id } = req.params;
            const deletedHabit = await this.habitModel.findByIdAndDelete(id);
            if (!deletedHabit) {
                return res.status(404).json({ message: 'Habit not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting habit', error });
        }
    }
}

export default HabitController;