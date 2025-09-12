import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fixPrivateKey = () => {
  try {
    // Read the service account JSON file
    const serviceAccountPath = join(__dirname, '..', 'serviceAccountKey.json');
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    
    // Extract the private key
    const privateKey = serviceAccount.private_key;
    
    // Format it for environment variable
    const formattedKey = privateKey.replace(/\n/g, '\\n');
    
    console.log('Formatted private key for .env file:');
    console.log(`FIREBASE_PRIVATE_KEY="${formattedKey}"`);
    
    // Write to a file
    fs.writeFileSync(join(__dirname, '..', 'private-key.txt'), `FIREBASE_PRIVATE_KEY="${formattedKey}"`);
    console.log('Private key saved to private-key.txt');
  } catch (error) {
    console.error('Error fixing private key:', error.message);
  }
};

fixPrivateKey();