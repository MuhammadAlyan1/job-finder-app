import { jobs } from '../../../data';
export default async function (req, res) {
  const { search, location, isFullTimeOnly } = req.query;
  let filteredJobs = [...jobs];

  if (isFullTimeOnly === 'true') {
    filteredJobs = filteredJobs.filter(
      (job) => job.contract.toLowerCase() === 'full time'
    );
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (search) {
    filteredJobs = filteredJobs.filter((job) => {
      if (
        job.position.toLowerCase().includes(search) ||
        job.description.toLowerCase().includes(search)
      ) {
        return job;
      }
    });
  }

  res.status(200).json(filteredJobs);
}
