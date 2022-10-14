import React from 'react';

const Details = ({ details, requirements, role }) => {
  const { postedAt, contract, position, location, apply, description } =
    details;
  return (
    <section className="m-4 my-4 mx-auto mt-[180px] max-w-[700px] rounded-md bg-white p-8 dark:bg-lightBlue sm:mt-24">
      <div className="mb-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex gap-2 text-shuttleGray dark:text-slate-300">
            <p>{postedAt}</p>
            <p className="my-[-15px] text-3xl">.</p>
            <p>{contract}</p>
          </div>
          <h2 className="my-2 text-2xl font-bold dark:text-white">
            {position}
          </h2>
          <p className="font-semibold text-indigo">{location}</p>
        </div>
        <div className="mt-8 sm:mt-0">
          <a href={apply} target="_blank">
            <button className="w-full rounded-md bg-indigo px-8 py-3 font-bold text-white hover:bg-indigo/90">
              Apply Now
            </button>
          </a>
        </div>
      </div>
      <p className="text-shuttleGray dark:text-slate-300">{description}</p>

      <section className="my-8">
        <h2 className="my-4 text-2xl font-bold dark:text-white">
          Requirements
        </h2>
        <p className="text-shuttleGray dark:text-slate-300">
          {requirements.content}
        </p>
        <ul className="my-8 list-disc pl-4">
          {requirements.items.map((item) => (
            <li key={'requirement' + item} className="my-2 pl-4 text-indigo">
              <span className="text-shuttleGray dark:text-slate-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="my-4 text-2xl font-bold capitalize dark:text-white">
          What you will do
        </h2>
        <p className="text-shuttleGray dark:text-slate-300">{role.content}</p>
        <ul className="my-8 list-decimal pl-4">
          {role.items.map((item) => (
            <li key={'role' + item} className="my-2 pl-4 font-bold text-indigo">
              <span className="font-normal text-shuttleGray dark:text-slate-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Details;
