import express from "express"; // Need to add {"type": "module"} in package.json
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./api/routes/auth.js";
import usersRoute from "./api/routes/users.js";
import roomsRoute from "./api/routes/rooms.js";
import hotelsRoute from "./api/routes/hotels.js";
import { ErrorMiddleware } from "./api/utils/error.js";

// Initialize the .env file
dotenv.config();

// Initialize the express app
const app = express();

// Start the DB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Successfully connected to MongoDB ✅");
  } catch (error) {
    throw error;
  }
};

// In case of deconnection with the DB
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection is now closed ⚠️");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connection is now open 📖");
});

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
// Error middleware
app.use(ErrorMiddleware);

// Start the backend server
const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT} 🏃‍♀️`);
});
