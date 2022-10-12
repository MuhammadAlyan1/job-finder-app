import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleIsFullTimeOnly,
  changeLocation,
  changeSearch,
  fetchFilteredJobs,
  showModal,
  hideModal,
} from '../../jobSlice';
import Modal from './Modal';

const MobileSearchbar = () => {
  const dispatch = useDispatch();
  const isModalShowing = useSelector((store) => store.job.isModalShowing);

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);

  const handleSubmit = () => {
    closeModal();

    dispatch(changeSearch(search));
    dispatch(changeLocation(location));
    dispatch(toggleIsFullTimeOnly(isFullTimeOnly));
    dispatch(fetchFilteredJobs());
  };

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    dispatch(showModal());
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    dispatch(hideModal());
  };

  return (
    <>
      <section className="my-12 mx-4 flex items-center gap-8 rounded-md bg-white p-4 dark:bg-lightBlue md:hidden">
        <div className="grow">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full outline-none ring-indigo focus:outline-indigo dark:bg-lightBlue dark:text-white"
          />
        </div>
        <div className="flex items-center gap-8">
          <div
            className="cursor-pointer px-2 text-xl text-slate-500 dark:text-white"
            onClick={openModal}
          >
            <FaFilter />
          </div>
          <div>
            <button
              className="rounded-md bg-indigo p-4 text-white"
              onClick={handleSubmit}
            >
              <BsSearch />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <section
        className={`${
          isModalShowing ? 'block' : 'hidden'
        } absolute inset-0 z-10 flex items-center  justify-center overflow-y-hidden bg-black/50`}
        onClick={closeModal}
      >
        <Modal
          search={search}
          location={location}
          setLocation={setLocation}
          isFullTimeOnly={isFullTimeOnly}
          setIsFullTimeOnly={setIsFullTimeOnly}
          handleSubmit={handleSubmit}
        />
      </section>
    </>
  );
};

export default MobileSearchbar;
