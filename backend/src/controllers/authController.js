const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

class AuthController {
    async register(req, res) {
        try {
            const { username, email, password } = req.body;
            if (!username || !email || !password) {
                return res.status(400).json({ message: 'username, email and password are required' });
            }

            const existing = await User.findOne({ $or: [{ email }, { username }] });
            if (existing) {
                return res.status(409).json({ message: 'User already exists' });
            }

            const user = new User({ username, email, password });
            await user.save();

            const token = jwt.sign(
                { id: user._id, username: user.username, email: user.email },
                process.env.JWT_SECRET || 'dev_jwt_secret',
                { expiresIn: '7d' }
            );

            return res.status(201).json({
                user: { id: user._id, username: user.username, email: user.email },
                token,
            });
        } catch (err) {
            return res.status(500).json({ message: 'Registration failed', error: err.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'email and password are required' });
            }

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign(
                { id: user._id, username: user.username, email: user.email },
                process.env.JWT_SECRET || 'dev_jwt_secret',
                { expiresIn: '7d' }
            );

            return res.json({
                user: { id: user._id, username: user.username, email: user.email },
                token,
            });
        } catch (err) {
            return res.status(500).json({ message: 'Login failed', error: err.message });
        }
    }

    async getUser(req, res) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const user = await User.findById(userId).select('_id username email');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json({ user });
        } catch (err) {
            return res.status(500).json({ message: 'Failed to fetch user', error: err.message });
        }
    }
}

module.exports = new AuthController();