import DaisyDemo from "components/DaisyDemo";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>muchfund</title>
        <meta name='description' content='A budgeting app for individuals' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-full w-full p-12 flex flex-col items-center justify-center'>
        <DaisyDemo />
      </main>
    </div>
  );
};

export default Home;
