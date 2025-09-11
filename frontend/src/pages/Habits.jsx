import { useState } from "react";

export default function Habits() {
  const [habits, setHabits] = useState(["Exercise", "Read"]);
  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, newHabit]);
      setNewHabit("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Habits</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          className="p-2 border rounded flex-1"
          placeholder="Enter new habit"
        />
        <button
          onClick={addHabit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {habits.map((habit, i) => (
          <li key={i} className="bg-white p-2 shadow rounded mb-2">{habit}</li>
        ))}
      </ul>
    </div>
  );
}