import React, { useEffect, useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { MdOutlineNightlightRound } from 'react-icons/md';
import { useRouter } from 'next/router';

const Header = ({ children }) => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <section className="mb-20 h-[150px] bg-indigo bg-headerPattern bg-cover bg-no-repeat md:mb-0 lg:rounded-bl-full">
      <div className="mx-auto flex max-w-[1000px] items-center justify-between p-4">
        <p
          className="cursor-pointer text-3xl font-bold text-white"
          onClick={() => router.push('/')}
        >
          DevJobs
        </p>
        <div className="flex items-center gap-4">
          <div className="text-2xl text-white">
            <FiSun />
          </div>
          <label
            htmlFor="default-toggle"
            className="relative inline-flex cursor-pointer items-center"
          >
            <input
              type="checkbox"
              value={isDarkMode}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              id="default-toggle"
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-indigo after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
          </label>
          <div className="text-2xl text-white">
            <MdOutlineNightlightRound />
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Header;
