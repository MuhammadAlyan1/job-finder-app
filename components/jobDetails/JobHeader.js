import Image from 'next/image';
import React from 'react';

const JobHeader = ({
  company,
  logo,
  logoWidth,
  logoHeight,
  logoBackground,
  website,
}) => {
  return (
    <div className="p-4">
      <section className="relative mx-auto mt-6 max-w-[700px] rounded-md bg-white dark:bg-lightBlue sm:static sm:flex">
        <div
          className={`${logoBackground} absolute -top-5 left-1/2 w-[50px] -translate-x-1/2 overflow-hidden rounded-md p-3 sm:static sm:flex sm:h-[120px] sm:w-[150px] sm:translate-x-0 sm:items-center sm:justify-center sm:rounded-r-none sm:p-4 `}
        >
          <Image
            src={logo}
            layout="intrinsic"
            width={logoWidth * 3}
            height={logoHeight * 3}
            className="aspect-square"
          />
        </div>
        <div className="flex w-full flex-col items-center p-4 py-8 sm:flex-row sm:justify-between sm:py-0">
          <div>
            <h1 className="my-2 text-center text-2xl font-bold dark:text-white sm:text-left">
              {company}
            </h1>
            <p className="text-center text-slate-400 sm:text-left">
              {company}.com
            </p>
          </div>
          <div>
            <a href={website} target="_blank">
              <button className="mt-6 rounded-md bg-indigo/20 px-5 py-3 font-bold text-majorelleBlue hover:bg-indigo/40 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-500 sm:mt-0">
                Company Site
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobHeader;
