import React, { useState } from 'react'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

const Community = () => {
	const [friendName, setFriendName] = useState('')
	const [friends, setFriends] = useState([
		{ id: 'f1', name: 'Alex' },
		{ id: 'f2', name: 'Jordan' },
	])

	const addFriend = () => {
		const name = friendName.trim()
		if (!name) return
		setFriends(prev => [...prev, { id: Date.now().toString(), name }])
		setFriendName('')
	}

	const removeFriend = (id) => setFriends(prev => prev.filter(f => f.id !== id))

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold text-dark mb-4">Community</h1>
			<p className="text-gray-600 mb-6">Add friends, join challenges, and keep each other accountable.</p>

			<div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
				<h2 className="text-lg font-semibold text-dark mb-3">Add a Friend</h2>
				<div className="flex space-x-2">
					<Input
						placeholder="Friend's name"
						value={friendName}
						onChange={(e) => setFriendName(e.target.value)}
						className="flex-grow"
					/>
					<Button variant="primary" onClick={addFriend}>Add</Button>
				</div>
			</div>

			<div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
				<h2 className="text-lg font-semibold text-dark mb-3">Your Friends</h2>
				{friends.length === 0 ? (
					<p className="text-gray-500">No friends yet. Add your first friend above.</p>
				) : (
					<ul>
						{friends.map(friend => (
							<li key={friend.id} className="flex items-center justify-between py-2 px-3 mb-2 bg-gray-50 rounded-md border border-gray-200">
								<span className="font-medium">{friend.name}</span>
								<Button variant="ghost" size="sm" onClick={() => removeFriend(friend.id)}>Remove</Button>
							</li>
						))}
					</ul>
				)}
			</div>

			<div className="mt-8">
				<a href="/login">
					<Button variant="outline">Login to Community</Button>
				</a>
			</div>
		</div>
	)
}

export default Community


