export const getAlljobs = (req, res) => {
  res.json({ message: "Hi , all the jobs" });
};

export const getSingleJob = (req, res) => {
  res.json({ message: "Single Job" });
};

export const postJob = (req, res) => {
  res.json({ message: "Post a new job" });
};

export const updateJob = (req, res) => {
  res.json({ message: "Update a new job" });
};

export const deleteJob = () => {
  res.json({ message: "Delete a new job" });
};
