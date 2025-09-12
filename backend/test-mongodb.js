import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

console.log('=== Testing MongoDB Connection ===');
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Set' : 'Not set');

const testMongoDBConnection = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MongoDB connection string is missing');
    }

    console.log('Connecting to MongoDB...');
    
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connection successful');
    console.log(`Connected to: ${conn.connection.host}`);
    console.log(`Database name: ${conn.connection.name}`);
    
    // Close the connection
    await mongoose.connection.close();
    console.log('✅ MongoDB connection closed');
    
    return { success: true, message: 'MongoDB connection test passed' };
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    return { success: false, message: error.message };
  }
};

// Run the test
testMongoDBConnection().then(result => {
  console.log('\n=== MongoDB Connection Test:', result.success ? 'PASSED' : 'FAILED' + ' ===');
  if (!result.success) {
    console.log('Error:', result.message);
  }
}).catch(error => {
  console.error('❌ MongoDB connection test failed with exception:', error.message);
});