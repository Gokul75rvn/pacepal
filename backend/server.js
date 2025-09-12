import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Pacepal API is running!' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Test route is working!', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

// Initialize the app with dynamic imports
const initializeApp = async () => {
  try {
    // Connect to database if MongoDB URI is available
    if (process.env.MONGO_URI) {
      console.log('Initializing database connection...');
      const dbConnected = await import('./config/db.js').then(module => module.default()).catch(error => {
        console.error('Database connection failed:', error.message);
        return false;
      });
      
      if (dbConnected) {
        console.log('✅ Database initialized');
        
        // Set up routes after database is connected
        if (process.env.FIREBASE_PROJECT_ID) {
          console.log('Initializing routes...');
          try {
            // Initialize Firebase
            await import('./config/firebase.js');
            console.log('✅ Firebase initialized');
            
            // Load routes
            app.use('/api/auth', (await import('./routes/auth.js')).default);
            app.use('/api/habits', (await import('./routes/habits.js')).default);
            console.log('✅ Routes initialized');
          } catch (routeError) {
            console.error('Failed to initialize routes:', routeError);
          }
        } else {
          console.warn('Firebase project ID not provided. Running without Firebase authentication.');
        }
      } else {
        console.warn('Database not connected. Running without database functionality.');
      }
    } else {
      console.warn('MongoDB URI not provided. Database not connected.');
    }
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
};

// Initialize the app and start the server
initializeApp().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}).catch(error => {
  console.error('Failed to start server:', error);
});