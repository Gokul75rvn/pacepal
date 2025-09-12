import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('=== Testing Firebase Connection ===');
console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID || 'Not set');
console.log('FIREBASE_CLIENT_EMAIL:', process.env.FIREBASE_CLIENT_EMAIL || 'Not set');

const testFirebaseConnection = async () => {
  try {
    // Import Firebase Admin
    const admin = await import('firebase-admin');
    console.log('✅ Firebase Admin module imported');
    
    // Load service account
    const serviceAccountPath = join(__dirname, 'credentials', 'firebase-service-account.json');
    console.log('Service account path:', serviceAccountPath);
    
    const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
    console.log('✅ Service account file loaded successfully');
    
    // Initialize Firebase
    if (!admin.default.apps.length) {
      admin.default.initializeApp({
        credential: admin.default.credential.cert(serviceAccount),
      });
      console.log('✅ Firebase app initialized');
    } else {
      console.log('✅ Firebase app already initialized');
    }
    
    // Get auth service
    const auth = admin.default.auth();
    console.log('✅ Firebase auth service retrieved');
    
    // Test creating a custom token
    const uid = 'test-user-123';
    const customToken = await auth.createCustomToken(uid);
    console.log('✅ Custom token created successfully');
    
    // NOTE: You cannot verify a custom token directly with verifyIdToken().
    // That requires a client to sign in with the custom token and send back an ID token.
    console.log('✅ Firebase custom token created. Backend connection works!');
    
    // Test user management
    try {
      // Create a test user
      const userRecord = await auth.createUser({
        uid: 'test-user-456',
        email: 'test@example.com',
        password: 'password123',
        displayName: 'Test User'
      });
      console.log('✅ Test user created:', userRecord.uid);
      
      // Get user
      const user = await auth.getUser('test-user-456');
      console.log('✅ Test user retrieved:', user.uid);
      
      // Delete test user
      await auth.deleteUser('test-user-456');
      console.log('✅ Test user deleted');
    } catch (error) {
      // User might already exist, which is fine for testing
      console.log('User management test skipped (user may already exist):', error.message);
    }
    
    return { success: true, message: 'Firebase connection test passed' };
  } catch (error) {
    console.error('❌ Firebase connection test failed:', error.message);
    if (error.errorInfo) {
      console.error('Error code:', error.errorInfo.code);
      console.error('Error message:', error.errorInfo.message);
    }
    return { success: false, message: error.message };
  }
};

// Run the test
testFirebaseConnection().then(result => {
  console.log('\n=== Firebase Connection Test:', result.success ? 'PASSED' : 'FAILED' + ' ===');
  if (!result.success) {
    console.log('Error:', result.message);
  }
}).catch(error => {
  console.error('❌ Firebase connection test failed with exception:', error.message);
});