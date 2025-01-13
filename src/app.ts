import express, { Application } from "express";
import sequelize from "./config/database";
import userRoutes from "./routes/jobRoutes";

// Create Express app
const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/jobs", userRoutes);

// Sync database
sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err: any) => {
    console.error("Failed to sync database:", err.message);
  });

export default app;
