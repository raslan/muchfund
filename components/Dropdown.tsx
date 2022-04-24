import { Popover, Transition } from "@headlessui/react";
import ThemeSwitcher from "./ThemeSwitcher";

const Dropdown = () => (
  <Popover className='dropdown dropdown-end'>
    <Popover.Button tabIndex={0} className='btn btn-ghost btn-circle avatar'>
      <div className='w-10 rounded-full'>
        <img src='https://api.lorem.space/image/face?hash=33791' />
      </div>
    </Popover.Button>
    <Popover.Panel className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-md w-52 border-2 border-gray-700'>
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
        <Transition.Child>
          <li>
            <button className='justify-between btn btn-ghost'>Profile</button>
          </li>
        </Transition.Child>
        <Transition.Child>
          <li>
            <button className='justify-between btn btn-ghost'>Settings</button>
          </li>
        </Transition.Child>
        <Transition.Child>
          <li>
            <button className='justify-between btn btn-ghost'>Logout</button>
          </li>
        </Transition.Child>
        <Transition.Child>
          <li>
            <ThemeSwitcher />
          </li>
        </Transition.Child>
      </Transition>
    </Popover.Panel>
  </Popover>
);

export default Dropdown;
