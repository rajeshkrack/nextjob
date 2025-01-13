import { Router } from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/JobController";

const router: Router = Router();

// Define routes
router.post("/", createJob); // Create a new job
router.get("/", getAllJobs); // Get all jobs
router.get("/:id", getJobById); // Get a single job by ID
router.put("/:id", updateJob); // Update a job by ID
router.delete("/:id", deleteJob); // Delete a job by ID

export default router;