import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import Sidebar from 'components/Sidebar';
import DashboardStats from 'components/dashboard/DashboardStats';
import Navbar from 'components/Navbar';
import { useIsClient } from 'usehooks-ts';
import Loading from 'components/atomic/Loading';

const Home: NextPage = () => {
  const isClient = useIsClient();
  return (
    <div>
      <div className='h-full w-full flex flex-col justify-center'>
        {!isClient && <Loading isFullScreen />}
        {isClient && (
          <>
            <Navbar />
            <Sidebar>
              <h1 className='text-6xl mb-10 font-semibold'>Summary</h1>
              <DashboardStats />
            </Sidebar>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
