import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    index: 0,
    link: "/",
    title: "Dashboard",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 m-0 p-0'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        />
      </svg>
    ),
  },
  // {
  //   index: 1,
  //   title: "Transactions",
  //   icon: (
  //     <svg
  //       xmlns='http://www.w3.org/2000/svg'
  //       className='h-6 w-6'
  //       fill='none'
  //       viewBox='0 0 24 24'
  //       stroke='currentColor'
  //       strokeWidth={2}
  //     >
  //       <path
  //         strokeLinecap='round'
  //         strokeLinejoin='round'
  //         d='M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  //       />
  //     </svg>
  //   ),
  // },
  {
    index: 2,
    title: "Budget",
    link: "/budget",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        />
      </svg>
    ),
  },
];

const Sidebar = ({ children }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='max-w-screen h-0 min-h-screen'>
      <div className='drawer drawer-mobile'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col p-6'>{children}</div>
        <div className='drawer-side w-60'>
          <label htmlFor='my-drawer-2' className='drawer-overlay' />
          <ul className='menu overflow-y-auto p-4 text-base-content'>
            {tabs.map((tab) => (
              <li key={tab.index} className={`py-2`}>
                <Link href={tab.link}>
                  <button
                    className={`${
                      activeTab === tab.index
                        ? "bg-primary-focus text-primary-content"
                        : ""
                    } flex justify-start btn btn-ghost text-left text-base-content`}
                    onClick={() => setActiveTab(tab.index)}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.title}</span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

type Props = { children: React.ReactNode };

export default Sidebar;
