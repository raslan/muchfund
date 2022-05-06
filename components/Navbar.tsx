import { useUser } from '@auth0/nextjs-auth0';
import Dropdown from 'components/Dropdown';
import Link from 'next/link';
import Loading from 'components/atomic/Loading';
import { isDev } from 'lib/utils';

const Navbar = () => {
  const { user, isLoading } = useUser();
  return (
    <div className='navbar pt-8 pl-3 pr-8 pb-6 max-w-screen'>
      <div className='w-full'>
        <Link href='/' passHref>
          <a className='btn btn-ghost normal-case text-3xl'>
            much<span className='text-accent-'>fund</span>
          </a>
        </Link>
      </div>
      {isDev() && <Dropdown user={null} />}
      {!isLoading ? (
        <>
          <div className='flex justify-end items-center gap-2 w-full'>
            {user ? (
              <Dropdown user={user} />
            ) : (
              <Link href='/api/auth/login' passHref>
                <a className='btn btn-primary'>Login</a>
              </Link>
            )}
          </div>
        </>
      ) : (
        <Loading className='w-12 h-12' />
      )}
    </div>
  );
};

export default Navbar;
