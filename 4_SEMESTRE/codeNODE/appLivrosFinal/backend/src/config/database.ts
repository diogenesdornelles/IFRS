import mongoose from 'mongoose';

/**
 * Connects to the MongoDB database.
 * @param uri - MongoDB connection string.
 * @returns A Promise resolved when the connection is successful.
 */
export const connectDB = async (uri: string): Promise<void> => {
  const defaultUri = 'mongodb://127.0.0.1:27017'; // Default URI for local connection

  try {
    if (!uri) {
      throw new Error('MongoDB connection string is not provided.');
    }
    // Attempt to connect using the provided URI
    await mongoose.connect(uri, { dbName: 'library' });
    console.log('Successfully connected to MongoDB using the custom URI.');
  } catch (error) {
    console.error('Failed to connect to MongoDB using the custom URI:', error);

    try {
      // Fallback to the default URI
      await mongoose.connect(defaultUri, { dbName: 'library' });
      console.log('Successfully connected to MongoDB using the default URI.');
    } catch (defaultError) {
      console.error('Failed to connect to MongoDB using the default URI:', defaultError);
      process.exit(1); // Exit the process on critical failure
    }
  }
};
