import { useUser } from '@auth0/nextjs-auth0';
import Loading from 'components/atomic/Loading';
import FeaturesSection from 'components/home/Features';
import HeroSection from 'components/home/Hero';
import Navbar from 'components/Navbar';
import { isDev } from 'lib/utils';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && user && !isDev())
      router.push('/dashboard', undefined, { shallow: true });
  }, [isLoading, user, router]);

  if ((isLoading || user) && !isDev()) return <Loading isFullScreen />;
  else
    return (
      <div>
        <div className='h-full w-full max-w-screen-2xl m-auto flex flex-col justify-center bg-pattern'>
          <>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
          </>
        </div>
      </div>
    );
};

export default Home;
