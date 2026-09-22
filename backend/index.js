import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

const port = Number(process.env.PORT) || 4001;

const clientUrl =
  process.env.CLIENT_URL ||
  "http://localhost:5173";


// =========================
// SECURITY
// =========================

app.disable("x-powered-by");


// =========================
// MIDDLEWARE
// =========================

app.use(
  cors({
    origin: clientUrl,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(cookieParser());


// =========================
// HEALTH CHECK
// =========================

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "BlogVerse API",
  });
});


// =========================
// USER ROUTES
// =========================

app.use("/user", userRoutes);


// =========================
// 404
// =========================

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});


// =========================
// ERROR HANDLER
// =========================

app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    message: "Internal server error",
  });
});


// =========================
// START SERVER
// =========================

const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error(
        "MONGO_URI is missing in .env"
      );
    }

    if (!process.env.JWT_SECRET) {
      throw new Error(
        "JWT_SECRET is missing in .env"
      );
    }

    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(
        `Server running on http://localhost:${port}`
      );
    });
  } catch (error) {
    console.error(
      "Server failed to start:",
      error.message
    );

    process.exit(1);
  }
};

startServer();