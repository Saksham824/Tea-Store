import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/chai";

if (!MONGODB_URI) throw new Error("MONGODB_URI not defined");

let isConnected = false;

export const mongodb = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "chai",
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
