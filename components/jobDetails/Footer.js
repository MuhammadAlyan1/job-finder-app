import React from 'react';

const Footer = ({ position, company, apply }) => {
  return (
    <footer className="-m-4 mt-8 bg-white p-8 dark:bg-lightBlue">
      <section className="mx-auto max-w-[700px] sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="my-2 text-2xl font-bold dark:text-white">
            {position}
          </h2>
          <p className="font-semibold text-indigo">{company}.com</p>
        </div>
        <div className="mt-8 sm:mt-0">
          <a href={apply} target="_blank">
            <button className="w-full rounded-md bg-indigo px-8 py-3 font-bold text-white hover:bg-indigo/90">
              Apply Now
            </button>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
