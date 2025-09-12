
import { FaUsers, FaTrophy, FaComments, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

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

const Community = () => {
  const navigate = useNavigate();
  const [groupCreated, setGroupCreated] = useState(false);

  // Handler to simulate group creation
  const handleCreateGroup = () => {
    setGroupCreated(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-dark mb-4">Community</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Welcome to the Pacepal Community! Join challenges, share your progress, and connect with others on your habit journey.
      </p>
      {!groupCreated ? (
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Create Group Card */}
           <div
             className="bg-white rounded-lg shadow-md p-6 border border-dashed border-2 border-primary text-center cursor-pointer flex flex-col justify-center items-center transition-transform hover:scale-105"
             onClick={() => navigate('/community/groups')}
             tabIndex={0}
             role="button"
             onKeyPress={e => { if (e.key === 'Enter') navigate('/community/groups'); }}
             style={{ minWidth: 320 }}
           >
             <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="text-3xl text-primary font-bold">+</span>
             </div>
             <h3 className="text-xl font-semibold text-primary mb-2">Create Group</h3>
             <p className="text-gray-600">Start a new group and invite friends!</p>
           </div>
          {/* Join Group Card */}
          <div
            className="bg-white rounded-lg shadow-md p-6 border border-dashed border-2 border-green-500 text-center cursor-pointer flex flex-col justify-center items-center transition-transform hover:scale-105"
            onClick={() => navigate('/community/join')}
            tabIndex={0}
            role="button"
            onKeyPress={e => { if (e.key === 'Enter') navigate('/community/join'); }}
            style={{ minWidth: 320 }}
          >
            <div className="w-16 h-16 bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl text-green-500 font-bold">&#8594;</span>
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Join Group</h3>
            <p className="text-gray-600">Join an existing group with a code or invite!</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {communityFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center cursor-pointer transition-transform hover:scale-105"
                onClick={() => navigate(feature.path)}
                tabIndex={0}
                role="button"
                onKeyPress={e => { if (e.key === 'Enter') navigate(feature.path); }}
              >
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary rounded-xl p-8 text-white text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Community Features Coming Soon</h2>
            <p className="text-lg">Stay tuned for exciting updates and ways to connect with others!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
