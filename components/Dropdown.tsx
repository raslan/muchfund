import { Menu, Transition } from "@headlessui/react";
import ThemeSwitcher from "./ThemeSwitcher";

const Dropdown = () => (
  <Menu as='div' className='dropdown dropdown-end'>
    <Menu.Button
      as='label'
      tabIndex={0}
      className='btn btn-ghost btn-circle avatar'
    >
      <div className='w-10 rounded-full'>
        <img src={`https://avatars.dicebear.com/api/initials/AR.svg`} />
      </div>
    </Menu.Button>
    <Menu.Items className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-md w-52 border-2 border-gray-700'>
      <Transition
        as='div'
        enter='transition ease-out duration-500'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-500'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
        show
        appear
      >
        <Menu.Item>
          <li>
            <button className='justify-between btn btn-ghost'>Profile</button>
          </li>
        </Menu.Item>
        <Menu.Item>
          <li>
            <button className='justify-between btn btn-ghost'>Settings</button>
          </li>
        </Menu.Item>
        <Menu.Item>
          <li>
            <button className='justify-between btn btn-ghost'>Logout</button>
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

export default Dropdown;
