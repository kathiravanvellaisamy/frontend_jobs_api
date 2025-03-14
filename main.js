import express from "express";
import jobRoutes from "./routes/jobsRoute.js";
import connectDB from "./libs/db.js";
import { configDotenv } from "dotenv";

const app = express();
const PORT = 6969;
configDotenv();

//connect Db
connectDB();

// app.get("/", (req, res) => {
//   res.json({ message: "Hello Develeopers" });
// });

// routes
app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
