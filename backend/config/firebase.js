import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let auth;
let adminApp;

const initializeFirebase = () => {
  try {
    if (!admin.apps.length) {
      // Read the service account file
      const serviceAccountPath = join(__dirname, 'serviceAccountKey.json');
      const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
      
      adminApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      
      console.log('✅ Firebase initialized successfully');
    }
    
    auth = admin.auth();
    return { auth, admin: adminApp };
  } catch (error) {
    console.error('❌ Firebase initialization error:', error.message);
    // Don't throw the error, just return null
    return { auth: null, admin: null };
  }
};

// Initialize Firebase
const firebase = initializeFirebase();
auth = firebase.auth;

export { auth, adminApp as admin };