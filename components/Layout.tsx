import { useTheme } from 'next-themes';
import Head from 'next/head';

const Layout = ({ ...props }) => {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>muchfund</title>
        <meta name='description' content='A budgeting app for individuals' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${theme === 'dark' ? 'dark' : ''} min-h-screen w-full`}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
