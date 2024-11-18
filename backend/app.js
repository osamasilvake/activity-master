// backend/app.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import activityRoutes from "./routes/activityRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

// Enable CORS for all origins (or specify allowed origins if needed)
app.use(cors());

// Middleware
app.use(express.json());

// API Routes
app.use("/", activityRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

export default app;
