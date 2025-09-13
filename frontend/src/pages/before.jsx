import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Before = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Build Better Habits with <span className="text-primary">Zintick</span>
        </h1>
        <p className="text-lg text-gray-600 mb-16">
          Your intelligent habit and routine management platform designed to help you build consistency,
          break bad habits, and achieve personal growth.
        </p>
      </div>
      <div className="bg-primary rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Habits?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of users who have already improved their lives with Zintick.
        </p>
        <Link to="/home">
          <Button variant="secondary" size="lg">
            Start Your Journey
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Before;
