import express from "express";
import jobRoutes from "./routes/jobsRoute.js";

const app = express();
const PORT = 6969;

// app.get("/", (req, res) => {
//   res.json({ message: "Hello Develeopers" });
// });

// routes
app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
