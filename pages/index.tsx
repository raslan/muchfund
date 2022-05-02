import DashboardStats from 'components/dashboard/DashboardStats';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
      <div className='h-full w-full flex flex-col justify-center'>
        <>
          <Navbar />
          <Sidebar>
            <h1 className='text-6xl mb-10 font-semibold'>Summary</h1>
            <DashboardStats />
          </Sidebar>
        </>
      </div>
    </div>
  );
};

export default Home;
