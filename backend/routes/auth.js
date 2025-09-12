import express from 'express';
import { login, getUserProfile, updateUserProfile } from '../controllers/authController.js';
import authenticate from '../middleware/auth.js';

const router = express.Router();

router.post('/login', login);
router.get('/profile', authenticate, getUserProfile);
router.put('/profile', authenticate, updateUserProfile);

export default router;