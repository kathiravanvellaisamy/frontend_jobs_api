import Job from "../models/jobModel.js";

export const getAlljobs = async (req, res) => {
  try {
    const jobs = await Job.find({});

    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSingleJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    return res.status(200).json(job);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
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

  try {
    const createdJob = await newJob.save();

    return res.json(createdJob).status(201);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateJob = (req, res) => {
  res.json({ message: "Update a new job" });
};

export const deleteJob = () => {
  res.json({ message: "Delete a new job" });
};
