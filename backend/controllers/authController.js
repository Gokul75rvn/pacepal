import { auth } from '../config/firebase.js';
import User from '../models/User.js';

const login = async (req, res) => {
  try {
    const { idToken } = req.body;
    
    if (!idToken) {
      return res.status(400).json({ message: 'ID token is required' });
    }

    // Verify the ID token
    const decodedToken = await auth.verifyIdToken(idToken);
    const { uid, email, name, picture } = decodedToken;

    // Check if user exists in our database
    let user = await User.findOne({ uid });

    if (!user) {
      // Create new user
      user = new User({
        uid,
        email,
        name,
        avatar: picture || '',
      });
      await user.save();
      console.log('New user created:', email);
    } else {
      // Update existing user with latest info
      user.name = name;
      user.avatar = picture || '';
      await user.save();
      console.log('Existing user updated:', email);
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        uid: user.uid,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.user.uid });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      id: user._id,
      uid: user.uid,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      memberSince: user.memberSince,
      preferences: user.preferences,
      stats: user.stats,
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { name, preferences } = req.body;
    
    const user = await User.findOneAndUpdate(
      { uid: req.user.uid },
      { name, preferences },
      { new: true }
    );
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      id: user._id,
      uid: user.uid,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      memberSince: user.memberSince,
      preferences: user.preferences,
      stats: user.stats,
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: error.message });
  }
};

export {
  login,
  getUserProfile,
  updateUserProfile,
};