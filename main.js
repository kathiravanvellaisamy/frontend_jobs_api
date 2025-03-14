import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ message: "Hello Develeopers" });
});

// Get all the jobs
app.get("/jobs", (req, res) => {});

// Post a single jobs
app.post("/jobs", (req, res) => {});

// Get a single Jobs
app.get("/jobs/:id", (res, req) => {});

// Update a jobs
app.put("/jobs/:id", (req, res) => {});

// Delete a jobs
app.delete("/jobs/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
