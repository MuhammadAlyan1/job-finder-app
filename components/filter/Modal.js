import React from 'react';
import { MdLocationPin } from 'react-icons/md';

const Modal = ({
  location,
  setLocation,
  isFullTimeOnly,
  setIsFullTimeOnly,
  handleSubmit,
}) => {
  return (
    <div
      className="w-[300px] rounded-md bg-white p-4 dark:bg-lightBlue"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center gap-3 border-b border-slate-300 pb-4">
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
          id="fullTimeMobile"
          value={isFullTimeOnly}
          onChange={() => setIsFullTimeOnly((prev) => !prev)}
          type="checkbox"
          className="h-[20px] w-[20px] cursor-pointer accent-indigo"
        />
        <label htmlFor="fullTimeMobile" className="dark:text-white">
          Full Time Only
        </label>
      </div>
      <button
        className="mt-4 w-full rounded-md bg-indigo px-8 py-2 font-bold text-white"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default Modal;
