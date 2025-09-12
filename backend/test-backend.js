import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('=== Backend Configuration Test ===');

// Test environment variables
const requiredEnvVars = ['PORT', 'MONGO_URI', 'FIREBASE_PROJECT_ID'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('❌ Missing environment variables:', missingEnvVars.join(', '));
  process.exit(1);
}

console.log('✅ All required environment variables are set');

// Test MongoDB connection
const testMongoDB = async () => {
  try {
    const { default: connectDB } = await import('./config/db.js');
    const connected = await connectDB();
    if (connected) {
      console.log('✅ MongoDB connection test passed');
    } else {
      console.error('❌ MongoDB connection test failed');
    }
  } catch (error) {
    console.error('❌ MongoDB connection test error:', error.message);
  }
};

// Test Firebase initialization
const testFirebase = async () => {
  try {
    await import('./config/firebase.js');
    console.log('✅ Firebase initialization test passed');
  } catch (error) {
    console.error('❌ Firebase initialization test error:', error.message);
  }
};

// Run tests
console.log('Running tests...');
testMongoDB().then(() => {
  testFirebase();
});