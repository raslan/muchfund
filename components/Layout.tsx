import { useTheme } from 'next-themes';
import Head from 'next/head';
import { useIsClient } from 'usehooks-ts';
import Loading from './atomic/Loading';

const Layout = ({ ...props }) => {
  const { theme } = useTheme();
  const isClient = useIsClient();
  return (
    <>
      <Head>
        <title>muchfund</title>
        <meta name='description' content='A budgeting app for individuals' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='min-h-screen w-full'>
        {!isClient ? (
          <Loading isFullScreen />
        ) : (
          <div className={`${theme === 'dark' ? 'dark' : ''} h-full w-full`}>
            {props.children}
          </div>
        )}
      </main>
    </>
  );
};

export default Layout;
