import { useUser } from '@auth0/nextjs-auth0';
import { isDev } from 'lib/utils';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Loading from './atomic/Loading';

const AuthWrapper = ({ children }: Props): React.ReactElement => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user && !isDev())
      router.push('/', undefined, { shallow: true });
  }, [isLoading, user, router]);

  if ((isLoading || !user) && !isDev()) return <Loading isFullScreen />;
  else return <>{children}</>;
};

type Props = {
  children: React.ReactNode;
};

export default AuthWrapper;
