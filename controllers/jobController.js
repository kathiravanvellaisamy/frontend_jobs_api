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

    if (job == null) {
      return res.status(404).json({ message: "Can not find job" });
    } else {
      res.status(200).json(job);
    }
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

export const updateJob = async (req, res) => {
  try {
    const updateJob = await Job.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        jobType: req.body.jobType,
        description: req.body.description,
        salary: req.body.salary,
        location: req.body.location,
        companyName: req.body.companyName,
        companyDescription: req.body.companyDescription,
        contactEmail: req.body.contactEmail,
        contactNumber: req.body.contactNumber,
      },
      {
        new: true,
      }
    );

    return res.json(updateJob).status(200);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    await Job.findOneAndDelete(req.params.id);

    return res.status(200).json({ message: "Job has been deleted..." });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
