import { UserProfile } from '@auth0/nextjs-auth0';
import { Menu, Transition } from '@headlessui/react';
import { isDev } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Dropdown = ({ user }: Props) => (
  <Menu as='div' className='dropdown dropdown-end'>
    <Menu.Button
      as='label'
      role='button'
      aria-label='Toggle dropdown'
      tabIndex={0}
      className='btn btn-ghost btn-circle avatar w-12 h-12'
    >
      <span>
        <Image
          className='rounded-full'
          layout='fill'
          alt='User Menu'
          aria-label='User Menu'
          src={
            user?.picture
              ? (user?.picture as string)
              : `https://avatars.dicebear.com/api/initials/${
                  user?.name || user?.nickname || 'MU'
                }.svg`
          }
        />
      </span>
    </Menu.Button>
    <Menu.Items className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-md w-52 border-2 border-gray-700'>
      <Transition
        as='ul'
        enter='transition ease-out duration-500'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-500'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
        show
        appear
      >
        {/* <Menu.Item>
          <li>
            <button className='justify-between btn btn-ghost'>Profile</button>
          </li>
        </Menu.Item> */}
        {/* <Menu.Item>
          <li>
            <button className='justify-between btn btn-ghost'>Settings</button>
          </li>
        </Menu.Item> */}
        {isDev() && (
          <Menu.Item>
            <li>
              <Link href='/dashboard' passHref>
                <a className='justify-between btn btn-ghost'>Dashboard</a>
              </Link>
            </li>
          </Menu.Item>
        )}
        <Menu.Item>
          <li>
            <Link href='/api/auth/logout' passHref>
              <a className='justify-between btn btn-ghost'>Logout</a>
            </Link>
          </li>
        </Menu.Item>
        <Menu.Item>
          <li>
            <ThemeSwitcher />
          </li>
        </Menu.Item>
      </Transition>
    </Menu.Items>
  </Menu>
);

type Props = {
  user: UserProfile | null;
};

export default Dropdown;
