import { Request, Response } from "express";
import Job from "../models/jobModel";

// Create a new job
export const createJob = async (req: Request, res: Response): Promise<void> => {
  const { title, company, location, salary, description } = req.body;

  try {
    const newJob = await Job.create({ title, company, location, salary, description });
    res.status(201).json(newJob);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all jobs
export const getAllJobs = async (_req: Request, res: Response): Promise<void> => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get a job by ID
export const getJobById = async (req: Request, res: Response): Promise<void> => {
  try {
    const job = await Job.findByPk(req.params.id);

    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update a job by ID
export const updateJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const [updated] = await Job.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedJob = await Job.findByPk(req.params.id);
      res.status(200).json(updatedJob);
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a job by ID
export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await Job.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(200).json({ message: "Job deleted successfully" });
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};