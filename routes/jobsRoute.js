import express from "express";

const router = express.Router();

// Get all the jobs
router.get("/", (req, res) => {
  res.json({ message: "Hi , all the jobs" });
});

// Post a single jobs
router.post("/", (req, res) => {});

// Get a single Jobs
router.get("/:id", (res, req) => {});

// Update a jobs
router.put("/:id", (req, res) => {});

// Delete a jobs
router.delete("/:id", (req, res) => {});

export default router;
