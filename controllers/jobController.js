import Job from "../models/jobModel.js";

export const getAlljobs = (req, res) => {};

export const getSingleJob = (req, res) => {
  res.json({ message: "Single Job" });
};

export const postJob = async (req, res) => {
  // Validatedata
  const newJob = new Job({
    title: req.body.title,
    jobType: req.body.jobType,
    description: req.body.description,
    salary: req.body.salary,
    location: req.body.location,
    companyName: req.body.companyName,
    companyDescription: req.body.companyDescription,
    contactEmail: req.body.contactEmail,
    contactNumber: req.body.contactNumber,
  });

  const createdJob = await newJob.save();

  return res.json(createdJob).status(201);
};

export const updateJob = (req, res) => {
  res.json({ message: "Update a new job" });
};

export const deleteJob = () => {
  res.json({ message: "Delete a new job" });
};
