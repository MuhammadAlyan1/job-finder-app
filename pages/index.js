import Head from 'next/head';
import Filter from '../components/filter/index';
import Header from '../components/Header';
import Jobs from '../components/jobs/index';
import axios from 'axios';

export default function Home({ initialJobs }) {
  return (
    <div>
      <Head>
        <title>Job Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Filter />
      </Header>
      <Jobs initialJobs={initialJobs} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const URL = 'http://localhost:3000/api/get-jobs/';
  const response = await axios.get(URL, {
    params: { startIndex: 0, endIndex: 6 },
  });

  return {
    props: {
      initialJobs: response.data,
    },
  };
};
