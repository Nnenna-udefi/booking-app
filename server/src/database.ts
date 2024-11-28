import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI not set in .env file");
}
const client = new MongoClient(uri);

let db: Db;

export const connectToDatabase = async (): Promise<Db> => {
  if (!db) {
    await client.connect();
    db = client.db("bookingApp");
  }
  return db;
};

export const getDatabase = (): Db => {
  if (!db) {
    throw new Error("Database connection not established");
  }
  return db;
};
