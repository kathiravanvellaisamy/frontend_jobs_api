import express from "express";
import jobRoutes from "./routes/jobsRoute.js";
import connectDB from "./libs/db.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const PORT = 6969;
dotenv.config();

//Data understanding middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use CORS middleware
const corsOptions = {
  origin: "http://localhost:5173/", //(https://your-client-app.com)
  optionsSuccessStatus: 200,
};
app.use(cors());

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
