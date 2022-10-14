import React from 'react';
import axios from 'axios';
import JobHeader from '../../components/jobDetails/JobHeader';
import Details from '../../components/jobDetails/Details';
import Footer from '../../components/jobDetails/Footer';
import Head from 'next/head';
import Header from '../../components/Header';

const jobDetails = ({ job }) => {
  const {
    company,
    logo,
    logoWidth,
    logoHeight,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
    website,
    apply,
    description,
    requirements,
    role,
  } = job;

  const headerData = {
    company,
    logo,
    logoWidth,
    logoHeight,
    logoBackground,
    website,
  };
  const details = {
    postedAt,
    contract,
    position,
    location,
    apply,
    description,
    requirements,
    role,
  };

  return (
    <>
      <Head>
        <title>{company} details</title>
      </Head>
      <Header>
        <JobHeader {...headerData} />
      </Header>

      <div className="p-4">
        <Details details={details} role={role} requirements={requirements} />
        <Footer position={position} company={company} apply={apply} />
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  if (id === undefined) return;

  const URL = `http://localhost:3000/api/get-jobs/${id}`;
  const response = await axios.get(URL);
  return {
    props: {
      job: response.data,
    },
  };
};

export default jobDetails;
