import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Sidebar from "components/Sidebar";
import DashboardStats from "components/Dashboard/DashboardStats";
import Navbar from "components/Navbar";
import { useIsClient } from "usehooks-ts";

const Home: NextPage = () => {
  const isClient = useIsClient();

  return (
    <div>
      <Head>
        <title>muchfund</title>
        <meta name='description' content='A budgeting app for individuals' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-full w-full flex flex-col justify-center px-3'>
        {!isClient && (
          <div className='flex flex-col items-center justify-center h-screen p-0 m-0'>
            <svg
              className='animate-spin w-16 h-16'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.2'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                fill='currentColor'
              />
              <path
                d='M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z'
                fill='currentColor'
              />
            </svg>
          </div>
        )}
        {isClient && (
          <>
            <Navbar />
            <Sidebar>
              <DashboardStats />
            </Sidebar>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
