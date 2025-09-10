class Habit {
    constructor(id, name, frequency) {
        this.id = id;
        this.name = name;
        this.frequency = frequency;
    }

    getHabitDetails() {
        return {
            id: this.id,
            name: this.name,
            frequency: this.frequency
        };
    }

    updateHabit(name, frequency) {
        this.name = name;
        this.frequency = frequency;
    }
}

module.exports = Habit;