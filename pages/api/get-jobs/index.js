import { jobs } from '../../../data';

export default function handler(req, res) {
  const { startIndex, endIndex } = req.query;

  if (startIndex === undefined || endIndex === undefined) {
    return res.status(400).json(jobs);
  }

  res.status(202).json(jobs.slice(startIndex, endIndex));
}
