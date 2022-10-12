import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {
  toggleIsFullTimeOnly,
  changeLocation,
  changeSearch,
  fetchFilteredJobs,
} from '../../jobSlice';

const DesktopSearchbar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);

  const handleSubmit = () => {
    dispatch(changeSearch(search));
    dispatch(changeLocation(location));
    dispatch(toggleIsFullTimeOnly(isFullTimeOnly));
    dispatch(fetchFilteredJobs());
  };

  return (
    <section className="mx-4 my-12 hidden max-w-[970px] rounded-md bg-white px-4 dark:bg-lightBlue md:flex lg:mx-auto">
      <div className="flex flex-grow items-center gap-3 border-r border-slate-300 px-2 py-4">
        <div className="text-xl text-indigo">
          <BsSearch />
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full outline-none ring-indigo focus:outline-indigo dark:bg-lightBlue dark:text-white"
        />
      </div>
      <div className="flex flex-grow items-center gap-3 border-r border-slate-300 px-2 py-4">
        <div className="text-2xl text-indigo">
          <MdLocationPin />
        </div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Filter by location"
          className="w-full outline-none ring-indigo focus:outline-indigo dark:bg-lightBlue dark:text-white"
        />
      </div>
      <div className="flex flex-grow items-center gap-3 px-2 py-4">
        <input
          id="fullTimeOnly"
          value={isFullTimeOnly}
          onChange={() => setIsFullTimeOnly((prev) => !prev)}
          type="checkbox"
          className="h-[20px] w-[20px] cursor-pointer accent-indigo "
        />
        <label htmlFor="fullTimeOnly" className="font-bold dark:text-white">
          Full Time Only
        </label>
        <button
          className="ml-auto rounded-md bg-indigo px-8 py-2 font-bold text-white"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default DesktopSearchbar;
