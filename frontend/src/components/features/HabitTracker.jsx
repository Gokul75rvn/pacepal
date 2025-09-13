import React, { useMemo, useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

const defaultHabits = [
	{ id: 'h1', name: 'Drink Water', completed: false, streak: 3 },
	{ id: 'h2', name: 'Meditate 10 min', completed: true, streak: 7 },
	{ id: 'h3', name: 'Walk 5,000 steps', completed: false, streak: 2 },
]

const HabitTracker = () => {
	const [habits, setHabits] = useState(defaultHabits)
	const [newHabit, setNewHabit] = useState('')

	const completionRate = useMemo(() => {
		if (habits.length === 0) return 0
		const done = habits.filter(h => h.completed).length
		return Math.round((done / habits.length) * 100)
	}, [habits])

	const toggleHabit = (id) => {
		setHabits(prev => prev.map(h => h.id === id ? { ...h, completed: !h.completed, streak: h.completed ? h.streak : h.streak + 1 } : h))
	}

	const addHabit = () => {
		const name = newHabit.trim()
		if (!name) return
		setHabits(prev => [...prev, { id: Date.now().toString(), name, completed: false, streak: 0 }])
		setNewHabit('')
	}

	const removeHabit = (id) => setHabits(prev => prev.filter(h => h.id !== id))

	return (
		<div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-lg font-semibold text-dark">Today’s Habits</h3>
				<div className="text-sm text-gray-600">Completed: <span className="font-medium">{completionRate}%</span></div>
			</div>

			<div className="mb-4 flex items-center space-x-2">
				<Input placeholder="New habit" value={newHabit} onChange={(e) => setNewHabit(e.target.value)} className="flex-grow" />
				<Button variant="primary" onClick={addHabit}>Add</Button>
			</div>

			<ul>
				{habits.map(habit => (
					<li key={habit.id} className="flex items-center justify-between py-2 px-3 mb-2 bg-gray-50 rounded-md border border-gray-200">
						<div className="flex items-center">
							<input
								type="checkbox"
								checked={habit.completed}
								onChange={() => toggleHabit(habit.id)}
								className="mr-3 h-4 w-4 text-primary"
							/>
							<div>
								<div className="font-medium">{habit.name}</div>
								<div className="text-xs text-gray-500">Streak: {habit.streak} days</div>
							</div>
						</div>
						<Button variant="ghost" size="sm" onClick={() => removeHabit(habit.id)}>Remove</Button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default HabitTracker

