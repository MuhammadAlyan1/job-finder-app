import React, { useEffect } from 'react';
import Job from './Job';
import { setJobs, fetchMoreJobs } from '../../jobSlice';
import { useDispatch, useSelector } from 'react-redux';

const Jobs = ({ initialJobs }) => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((store) => store.job);

  useEffect(() => {
    dispatch(setJobs(initialJobs));
  }, []);

  return (
    <section>
      <section className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 p-4 sm:grid-cols-2 lg:mx-auto lg:max-w-[1000px] lg:grid-cols-3">
        {jobs.map((job, index) => (
          <Job job={job} key={'job' + index} index={index} />
        ))}
      </section>
      <button
        className="mx-auto mt-4 block w-fit rounded-md bg-indigo px-8 py-2 font-bold text-white hover:bg-indigo/80"
        onClick={() => dispatch(fetchMoreJobs())}
      >
        Load More
      </button>
    </section>
  );
};

export default Jobs;
