import { MongoClient } from 'mongodb';

let cachedDb;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  const client = new MongoClient(process.env.MONGODB_URI);  
  cachedDb = client;
  return await client.connect();
}