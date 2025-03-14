import express from "express";
import {
  deleteJob,
  getAlljobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/jobController.js";

const router = express.Router();

// Get all the jobs
router.get("/", getAlljobs);

// Post a single jobs
router.post("/", postJob);

// Get a single Jobs
router.get("/:id", getSingleJob);

// Update a jobs
router.put("/:id", updateJob);

// Delete a jobs
router.delete("/:id", deleteJob);

export default router;
