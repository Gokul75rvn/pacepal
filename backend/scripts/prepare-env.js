import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prepareEnv = () => {
  try {
    // Read the service account JSON file
    const serviceAccountPath = join(__dirname, '..', 'serviceAccountKey.json');
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    
    // Read the current .env file
    const envPath = join(__dirname, '..', '.env');
    let envContent = '';
    
    try {
      envContent = fs.readFileSync(envPath, 'utf8');
    } catch (error) {
      // If .env doesn't exist, create basic content
      envContent = `# Server Configuration\nPORT=5000\nNODE_ENV=development\n\n`;
    }
    
    // Extract the private key and format it properly
    const privateKey = serviceAccount.private_key;
    
    // Remove any existing FIREBASE_PRIVATE_KEY line
    envContent = envContent.replace(/^FIREBASE_PRIVATE_KEY=.*$/m, '');
    
    // Add the properly formatted private key
    envContent += `\n# Firebase Configuration\nFIREBASE_PROJECT_ID=${serviceAccount.project_id}\nFIREBASE_CLIENT_EMAIL=${serviceAccount.client_email}\nFIREBASE_PRIVATE_KEY="${private_key.replace(/\n/g, '\\n')}"\n`;
    
    // Write back to .env
    fs.writeFileSync(envPath, envContent);
    
    console.log('✅ .env file updated with properly formatted Firebase private key');
  } catch (error) {
    console.error('Error preparing .env file:', error.message);
  }
};

prepareEnv();