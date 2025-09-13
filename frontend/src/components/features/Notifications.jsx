import React, { useState } from 'react'
import Button from '../common/Button'

const initialNotifications = [
	{ id: 'n1', title: 'Streak Milestone', body: '7-day meditation streak. Great job!', read: false },
	{ id: 'n2', title: 'Habit Reminder', body: 'Don\'t forget to log your water intake.', read: false },
	{ id: 'n3', title: 'Friend Activity', body: 'Alex completed their Morning Routine.', read: true },
]

const Notifications = () => {
	const [items, setItems] = useState(initialNotifications)

	const markAllRead = () => setItems(prev => prev.map(n => ({ ...n, read: true })))
	const clearAll = () => setItems([])
	const toggleRead = (id) => setItems(prev => prev.map(n => n.id === id ? { ...n, read: !n.read } : n))

	return (
		<div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-lg font-semibold text-dark">Notifications</h3>
				<div className="space-x-2">
					<Button variant="outline" size="sm" onClick={markAllRead}>Mark all read</Button>
					<Button variant="ghost" size="sm" onClick={clearAll}>Clear</Button>
				</div>
			</div>

			{items.length === 0 ? (
				<p className="text-gray-500">You\'re all caught up.</p>
			) : (
				<ul>
					{items.map(n => (
						<li key={n.id} className={`py-3 px-3 mb-2 rounded-md border ${n.read ? 'bg-gray-50 border-gray-200' : 'bg-emerald-50 border-emerald-200'}`}>
							<div className="flex items-start justify-between">
								<div>
									<div className="font-medium text-dark">{n.title}</div>
									<div className="text-sm text-gray-600">{n.body}</div>
								</div>
								<Button variant="ghost" size="sm" onClick={() => toggleRead(n.id)}>
									{n.read ? 'Unread' : 'Read'}
								</Button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Notifications


