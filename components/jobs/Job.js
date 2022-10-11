import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

const Job = ({ job, index }) => {
  const {
    postedAt,
    logo,
    logoHeight,
    logoWidth,
    logoBackground,
    position,
    company,
    location,
    contract,
  } = job;
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/job-details/${index}`);
  };
  console.log(logo);
  return (
    <article
      className="relative cursor-pointer rounded-md bg-white p-8 shadow-md transition-transform duration-150 ease-in hover:scale-[1.03] dark:bg-lightBlue"
      onClick={handleRedirect}
    >
      <div
        className={`absolute -top-6 flex h-12 w-12 items-center justify-center rounded-xl ${logoBackground}`}
      >
        {/* <Image width={logo.width} height={logo.height} src={logo} /> */}
        <Image width={logoWidth} height={logoHeight} src={logo} />
      </div>
      <div className="pt-4">
        <div className="mb-2 flex gap-2 text-shuttleGray">
          <p>{postedAt}</p>
          <p className="my-[-15px] text-3xl">.</p>
          <p>{contract}</p>
        </div>
        <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
          {position}
        </h2>
        <p className="text-shuttleGray">{company}</p>
        <p className="mt-8 text-majorelleBlue">{location}</p>
      </div>
    </article>
  );
};

export default Job;
