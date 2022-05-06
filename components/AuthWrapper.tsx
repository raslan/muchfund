import { useUser } from '@auth0/nextjs-auth0';
import { isDev } from 'lib/utils';
import { useRouter } from 'next/router';
import React from 'react';
import Loading from './atomic/Loading';

const AuthWrapper = ({ children }: Props): React.ReactElement => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  if (isLoading) return <Loading isFullScreen />;
  if (!user && !isDev()) {
    return <>{router.push('/api/auth/login', undefined, { shallow: true })}</>;
  }
  return <>{children}</>;
};

type Props = {
  children: React.ReactNode;
};

export default AuthWrapper;
