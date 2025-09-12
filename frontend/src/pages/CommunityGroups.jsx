import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaTrophy, FaComments, FaChartLine } from 'react-icons/fa';
import { useHabits } from '../hooks/useHabits';

function EditableHabitItem({ habit }) {
  const [editing, setEditing] = React.useState(false);
  const [name, setName] = React.useState(habit.name);
  const [description, setDescription] = React.useState(habit.description);
  const [added, setAdded] = React.useState(false);

  const handleSave = () => {
    setEditing(false);
    // Optionally, update the habit in backend or context here
  };

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <li className="bg-gray-100 rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex-1">
        {editing ? (
          <>
            <input
              className="font-semibold text-dark text-lg mb-1 w-full border border-gray-300 rounded px-2 py-1 mb-2"
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
            />
            <input
              className="text-gray-500 text-sm w-full border border-gray-300 rounded px-2 py-1"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </>
        ) : (
          <>
            <div className="font-semibold text-dark text-lg mb-1">{name}</div>
            <div className="text-gray-500 text-sm">{description}</div>
          </>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-end md:items-center">
        {editing ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-gray-300 text-dark px-4 py-2 rounded hover:bg-gray-400 transition"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className={`bg-primary text-white px-4 py-2 rounded transition ${added ? 'ring-2 ring-primary' : ''}`}
          onClick={handleAdd}
          disabled={added}
        >
          {added ? 'Added!' : 'Add to Group'}
        </button>
      </div>
    </li>
  );
}

const CommunityGroups = () => {
  const [groupName, setGroupName] = useState('');
  const [invites, setInvites] = useState([{ name: '', email: '' }]);
  const [created, setCreated] = useState(false);
  const [showHabits, setShowHabits] = useState(false);
  const navigate = useNavigate();
  const { habits } = useHabits();

  const handleInviteChange = (idx, field, value) => {
    const updated = invites.map((invite, i) =>
      i === idx ? { ...invite, [field]: value } : invite
    );
    setInvites(updated);
  };

  const addInvite = () => setInvites([...invites, { name: '', email: '' }]);
  const removeInvite = idx => setInvites(invites.filter((_, i) => i !== idx));

  const handleSubmit = e => {
    e.preventDefault();
    setCreated(true);
    setTimeout(() => setShowHabits(true), 500); // Show habits after confirmation
  };

  const communityFeatures = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: 'Find Friends',
      description: 'Connect with other users and grow together.',
      path: '/community/friends'
    },
    {
      icon: <FaTrophy className="text-2xl" />,
      title: 'Challenges',
      description: 'Join and compete in habit challenges.',
      path: '/community/challenges'
    },
    {
      icon: <FaComments className="text-2xl" />,
      title: 'Discussions',
      description: 'Share tips, ask questions, and support each other.',
      path: '/community/discussions'
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: 'Progress Sharing',
      description: 'Showcase your achievements and inspire others.',
      path: '/community/progress'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-xl">
      <h1 className="text-3xl font-bold mb-4 text-primary text-center">Create a Group</h1>
  {!created ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <label className="block text-left text-gray-700 font-semibold mb-2">Group Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={groupName}
              onChange={e => setGroupName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-gray-700 font-semibold mb-2">Invite Friends</label>
            {invites.map((invite, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 border border-gray-300 rounded px-3 py-2"
                  value={invite.name}
                  onChange={e => handleInviteChange(idx, 'name', e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 border border-gray-300 rounded px-3 py-2"
                  value={invite.email}
                  onChange={e => handleInviteChange(idx, 'email', e.target.value)}
                  required
                />
                {invites.length > 1 && (
                  <button type="button" onClick={() => removeInvite(idx)} className="text-red-500 font-bold px-2">&times;</button>
                )}
              </div>
            ))}
            <button type="button" onClick={addInvite} className="mt-2 text-primary font-semibold">+ Add Another</button>
          </div>
          <div className="flex gap-4 mt-4">
            <button type="button" className="flex-1 bg-gray-200 text-primary py-2 rounded font-semibold hover:bg-gray-300 transition">Join</button>
            <button type="submit" className="flex-1 bg-primary text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Create</button>
          </div>
        </form>
      ) : showHabits ? (
        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-primary text-center">Designate Habits for Group</h2>
          {habits && habits.length > 0 ? (
            <ul className="space-y-4">
              {habits.map((habit, idx) => (
                <EditableHabitItem key={habit._id || idx} habit={habit} />
              ))}
            </ul>
          ) : (
            <div className="text-gray-500 text-center">No habits found.</div>
          )}
        </div>
      ) : (
        <div>
          <div className="bg-green-100 text-green-800 rounded p-6 text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Group Created!</h2>
            <p className="mb-2">Group: <span className="font-bold">{groupName}</span></p>
            <p>Invitations sent to:</p>
            <ul className="mt-2">
              {invites.map((invite, idx) => (
                <li key={idx}>{invite.name} ({invite.email})</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityGroups;
