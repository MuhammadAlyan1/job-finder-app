import { jobs } from '../../../data';

export default function handler(req, res) {
  const { id } = req.query;
  const job = jobs[Number(id)];
  if (!job) {
    return res.status(404).json('Please provide valid id');
  }

  res.status(200).json(job);
}
