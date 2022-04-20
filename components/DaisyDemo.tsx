const DaisyDemo = () => {
  return (
    <div className='text-base-content bg-indigo-300 bg-opacity-70 xl:rounded-box grid max-w-screen-xl gap-4 xl:pb-0'>
      <div className='px-2 pt-2'>
        <div className='navbar text-primary-content rounded-box space-x-1'>
          <div className='hidden flex-none md:flex'>
            <div className='dropdown'>
              <div tabIndex={0}>
                <button
                  aria-label='drawer component'
                  className='btn btn-ghost mask mask-squircle btn-square focus:bg-base-content border-none focus:bg-opacity-50'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block h-6 w-6 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      drawer component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Drawer component is useful for opening a sidebar menu
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/drawer'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='mx-2 flex-1 justify-center px-2 md:flex md:justify-start'>
            <span className='text-2xl font-bold'>Components Preview</span>
          </div>{" "}
          <div className='hidden flex-1 md:flex md:flex-none'>
            <div className='form-control'>
              <div className='dropdown'>
                <div tabIndex={0}>
                  <input
                    placeholder='Text Input'
                    className='input input-bordered placeholder-white rounded-full text-white'
                  />
                </div>{" "}
                <div tabIndex={0} className='dropdown-content py-2'>
                  <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                    <div className='card-body'>
                      <h2 className='card-title font-extrabold capitalize'>
                        text input component
                      </h2>{" "}
                      <p className='text-neutral-content text-sm text-opacity-80'>
                        Text input comes in various sizes and styles
                      </p>{" "}
                      <div className='mt-4 flex justify-end'>
                        <a
                          href='https://daisyui.com/components/input'
                          className='btn btn-primary btn-sm xl:btn-md'
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='dropdown dropdown-left'>
            <div tabIndex={0}>
              <button
                aria-label='button component'
                className='btn btn-ghost mask mask-squircle btn-square focus:bg-base-content hidden border-none focus:bg-opacity-50 md:flex'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block h-6 w-6 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
            </div>{" "}
            <div tabIndex={0} className='dropdown-content py-2'>
              <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title font-extrabold capitalize'>
                    navbar component
                  </h2>{" "}
                  <p className='text-neutral-content text-sm text-opacity-80'>
                    You&apos;ll need a navbar on top of your page
                  </p>{" "}
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='https://daisyui.com/components/navbar'
                      className='btn btn-primary btn-sm xl:btn-md'
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='dropdown dropdown-left'>
            <div tabIndex={0}>
              <button
                aria-label='button component'
                className='btn btn-ghost mask mask-squircle btn-square focus:bg-base-content hidden border-none focus:bg-opacity-50 md:flex'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block h-6 w-6 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>
            </div>{" "}
            <div tabIndex={0} className='dropdown-content py-2'>
              <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title font-extrabold capitalize'>
                    navbar component
                  </h2>{" "}
                  <p className='text-neutral-content text-sm text-opacity-80'>
                    You&apos;ll need a navbar on top of your page
                  </p>{" "}
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='https://daisyui.com/components/navbar'
                      className='btn btn-primary btn-sm xl:btn-md'
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='dropdown dropdown-left'>
            <div tabIndex={0}>
              <button
                aria-label='navbar component'
                className='btn btn-ghost mask mask-squircle btn-square focus:bg-base-content hidden border-none focus:bg-opacity-50 md:flex'
              >
                <div className='avatar'>
                  <div className='mask mask-squircle h-10 w-10'>
                    <img
                      src='https://api.lorem.space/image?w=150&h=180'
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
              </button>
            </div>{" "}
            <div tabIndex={0} className='dropdown-content py-2'>
              <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title font-extrabold capitalize'>
                    avatar component
                  </h2>{" "}
                  <p className='text-neutral-content text-sm text-opacity-80'>
                    Use avatar component with any size
                  </p>{" "}
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='https://daisyui.com/components/avatar'
                      className='btn btn-primary btn-sm xl:btn-md'
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        id='component-demo'
        className='flex w-full grid-flow-row grid-cols-12 items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-1 pb-10 xl:grid xl:overflow-x-auto xl:px-4 svelte-1n6ue57'
      >
        <div className='bg-base-100 rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full svelte-1n6ue57'>
          <div className='dropdown'>
            <div tabIndex={0}>
              <div className='online avatar'>
                <div className='mask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px'>
                  <img
                    src='https://api.lorem.space/image?w=150&h=180'
                    width={94}
                    height={94}
                    alt='Avatar Tailwind CSS Component'
                    className='mask mask-squircle'
                  />
                </div>
              </div>
            </div>{" "}
            <div tabIndex={0} className='dropdown-content py-2'>
              <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title font-extrabold capitalize'>
                    avatar component
                  </h2>{" "}
                  <p className='text-neutral-content text-sm text-opacity-80'>
                    Use avatar component with any size
                  </p>{" "}
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='https://daisyui.com/components/avatar'
                      className='btn btn-primary btn-sm xl:btn-md'
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className='dropdown w-full'>
              <div tabIndex={0}>
                <div className='text-center'>
                  <div className='text-lg font-extrabold'>Betsy Braddock</div>{" "}
                  <div className='text-base-content/70 my-3 text-sm'>
                    Strategic Art Manager
                    <br />
                    Global Illustration Observer
                    <br />
                    Business Alignment Developer
                  </div>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      card component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Card component is used to show products, features and
                      more.
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/card'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className='dropdown w-full'>
              <div tabIndex={0}>
                <div className='mt-2 text-center'>
                  <div className='badge badge-ghost'>Design</div>{" "}
                  <div className='badge badge-ghost'>Art</div>{" "}
                  <div className='badge badge-ghost'>Illustration</div>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      badge component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Use badge component to highlight small inline items
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/badge'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='dropdown dropdown-top'>
            <div tabIndex={0}>
              <div className='btn-group'>
                <button className='btn btn-accent btn-sm'>Follow</button>{" "}
                <button
                  aria-label='button component'
                  className='btn btn-accent btn-square btn-sm'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='h-6 w-6 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                    />
                  </svg>
                </button>
              </div>
            </div>{" "}
            <div tabIndex={0} className='dropdown-content py-2'>
              <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title font-extrabold capitalize'>
                    button group component
                  </h2>{" "}
                  <p className='text-neutral-content text-sm text-opacity-80'>
                    Use it to group multiple buttons together
                  </p>{" "}
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='https://daisyui.com/components/button-group'
                      className='btn btn-primary btn-sm xl:btn-md'
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='bg-base-100 rounded-box col-span-3 row-span-3 mx-2 flex w-72 flex-shrink-0 flex-col justify-center gap-4 p-4 shadow-xl xl:mx-0 xl:w-full svelte-1n6ue57'>
          <div className='px-6 pt-6'>
            <div className='text-xl font-extrabold'>Superpower settings</div>{" "}
            <div className='text-base-content/70 my-4 text-xs'>
              Enable your favorite superpowers. Terms and conditions apply
            </div>{" "}
            <div className='dropdown w-full flex-1'>
              <div tabIndex={0}>
                <div className='form-control'>
                  <label className='label cursor-pointer'>
                    <span className='label-text'>Enable teleportation</span>{" "}
                    <input type='checkbox' className='toggle toggle-primary' />
                  </label>
                </div>{" "}
                <div className='form-control'>
                  <label className='label cursor-pointer'>
                    <span className='label-text'>Enable time travel</span>{" "}
                    <input
                      type='checkbox'
                      className='toggle toggle-secondary'
                    />
                  </label>
                </div>{" "}
                <div className='form-control'>
                  <label className='label cursor-pointer'>
                    <span className='label-text'>Enable laser eyes</span>{" "}
                    <input type='checkbox' className='toggle toggle-accent' />
                  </label>
                </div>{" "}
                <div className='form-control'>
                  <label className='label cursor-pointer'>
                    <span className='label-text'>Enable immortality</span>{" "}
                    <input type='checkbox' className='toggle' />
                  </label>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      toggle component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Use toggle to switch between two states
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/toggle'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='form-control'>
            <div className='dropdown dropdown-top dropdown-end'>
              <div tabIndex={0}>
                <button className='btn btn-secondary btn-block space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='h-6 w-6 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>{" "}
                  <span>Apply settings</span>
                </button>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      button component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Buttons come in various shapes, colors and sizes
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/button'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='card card-compact xl:card-normal bg-base-100 col-span-3 row-span-4 mx-2 w-72 flex-shrink-0 overflow-visible shadow-xl xl:mx-0 xl:w-auto svelte-1n6ue57'>
          <div className='dropdown'>
            <div tabIndex={0}>
              <figure>
                <img
                  src='https://api.lorem.space/image?w=150&h=180'
                  width={300}
                  height={187}
                  alt='Card Tailwind CSS Component'
                  className='rounded-t-box'
                />
              </figure>
            </div>{" "}
            <div tabIndex={0} className='dropdown-content py-2'>
              <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title font-extrabold capitalize'>
                    card component
                  </h2>{" "}
                  <p className='text-neutral-content text-sm text-opacity-80'>
                    Card component is used to show products, features and more.
                  </p>{" "}
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='https://daisyui.com/components/card'
                      className='btn btn-primary btn-sm xl:btn-md'
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='card-body'>
            <div className='card-title flex items-center font-extrabold'>
              Card Component
              <div className='dropdown dropdown-top dropdown-end'>
                <div tabIndex={0}>
                  <div
                    tabIndex={0}
                    className='btn btn-ghost text-info btn-xs btn-circle mx-1 inline-block'
                  >
                    <svg
                      width={20}
                      height={20}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='inline h-5 w-5 stroke-current'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                </div>{" "}
                <div tabIndex={0} className='dropdown-content py-2'>
                  <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                    <div className='card-body'>
                      <h2 className='card-title font-extrabold capitalize'>
                        dropdown component
                      </h2>{" "}
                      <p className='text-neutral-content text-sm text-opacity-80'>
                        helper dropdown can show an element when focused.
                      </p>{" "}
                      <div className='mt-4 flex justify-end'>
                        <a
                          href='https://daisyui.com/components/dropdown'
                          className='btn btn-primary btn-sm xl:btn-md'
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className='dropdown w-full'>
              <div tabIndex={0}>
                <div className='mb-2'>
                  <div className='badge badge-ghost'>May 14th</div>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      badge component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Use badge component to highlight small inline items
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/badge'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <p className='text-base-content text-sm text-opacity-80'>
              Use card component to easily show blog posts, products, features,
              items and more.
            </p>{" "}
            <div className='card-actions justify-end'>
              <div className='dropdown dropdown-top dropdown-end'>
                <div tabIndex={0}>
                  <button className='btn btn-primary'>Get Started</button>
                </div>{" "}
                <div tabIndex={0} className='dropdown-content py-2'>
                  <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                    <div className='card-body'>
                      <h2 className='card-title font-extrabold capitalize'>
                        button component
                      </h2>{" "}
                      <p className='text-neutral-content text-sm text-opacity-80'>
                        Buttons come in various shapes, colors and sizes
                      </p>{" "}
                      <div className='mt-4 flex justify-end'>
                        <a
                          href='https://daisyui.com/components/button'
                          className='btn btn-primary btn-sm xl:btn-md'
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='col-span-3 row-span-3 mx-2 flex w-72 flex-shrink-0 flex-col xl:mx-0 xl:w-full svelte-1n6ue57'>
          <div className='dropdown'>
            <div tabIndex={0} className='bg-opacity-100'>
              <div className='tabs w-full flex-grow-0'>
                <button className='tab tab-lifted tab-active tab-border-none tab-lg flex-1'>
                  Stats
                </button>{" "}
                <button className='tab tab-lifted tab-border-none tab-lg flex-1'>
                  Info
                </button>{" "}
                <button className='tab tab-lifted tab-border-none tab-lg flex-1'>
                  Options
                </button>
              </div>
            </div>{" "}
            <div tabIndex={0} className='dropdown-content py-2'>
              <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title font-extrabold capitalize'>
                    tab component
                  </h2>{" "}
                  <p className='text-neutral-content text-sm text-opacity-80'>
                    Beautiful tabs to switch between sections
                  </p>{" "}
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='https://daisyui.com/components/tab'
                      className='btn btn-primary btn-sm xl:btn-md'
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='bg-base-100 grid w-full flex-grow gap-3 rounded-xl rounded-tl-none p-6 shadow-xl'>
            <div className='flex items-center space-x-2'>
              <div className='dropdown'>
                <div tabIndex={0}>
                  <div className='online avatar'>
                    <div className='mask mask-hexagon bg-base-content h-16 w-16 bg-opacity-10 p-px'>
                      <img
                        src='https://api.lorem.space/image?w=150&h=180'
                        alt='Avatar Tailwind CSS Component'
                        className='mask mask-hexagon'
                      />
                    </div>
                  </div>
                </div>{" "}
                <div tabIndex={0} className='dropdown-content py-2'>
                  <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                    <div className='card-body'>
                      <h2 className='card-title font-extrabold capitalize'>
                        avatar component
                      </h2>{" "}
                      <p className='text-neutral-content text-sm text-opacity-80'>
                        Use avatar component with any size
                      </p>{" "}
                      <div className='mt-4 flex justify-end'>
                        <a
                          href='https://daisyui.com/components/avatar'
                          className='btn btn-primary btn-sm xl:btn-md'
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div>
                <div className='text-lg font-extrabold'>Beatrice Thurman</div>{" "}
                <div className='text-base-content/70 text-sm'>
                  220 Followers
                </div>
              </div>
            </div>{" "}
            <div className='dropdown'>
              <div tabIndex={0}>
                <div className='divider text-base-content/60 m-0'>Reports</div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      divider component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      User divider component to visually separate items
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/divider'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className='text-lg font-extrabold'>Audience Report</div>{" "}
            <div className='grid gap-3'>
              <div className='dropdown dropdown-top'>
                <div tabIndex={0}>
                  <div className='flex items-center p-1'>
                    <span className='text-base-content/70 w-48 text-xs'>
                      Search Engines
                    </span>{" "}
                    <progress
                      max={100}
                      value={50}
                      className='progress progress-success'
                    />
                  </div>{" "}
                  <div className='flex items-center p-1'>
                    <span className='text-base-content/70 w-48 text-xs'>
                      Direct
                    </span>{" "}
                    <progress
                      max={100}
                      value={30}
                      className='progress progress-primary'
                    />
                  </div>{" "}
                  <div className='flex items-center p-1'>
                    <span className='text-base-content/70 w-48 text-xs'>
                      Social Media
                    </span>{" "}
                    <progress
                      max={100}
                      value={70}
                      className='progress progress-secondary'
                    />
                  </div>{" "}
                  <div className='flex items-center p-1'>
                    <span className='text-base-content/70 w-48 text-xs'>
                      Emails
                    </span>{" "}
                    <progress
                      max={100}
                      value={90}
                      className='progress progress-accent'
                    />
                  </div>{" "}
                  <div className='flex items-center p-1'>
                    <span className='text-base-content/70 w-48 text-xs'>
                      Ad campaigns
                    </span>{" "}
                    <progress
                      max={100}
                      value={65}
                      className='progress progress-warning'
                    />
                  </div>
                </div>{" "}
                <div tabIndex={0} className='dropdown-content py-2'>
                  <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                    <div className='card-body'>
                      <h2 className='card-title font-extrabold capitalize'>
                        progress component
                      </h2>{" "}
                      <p className='text-neutral-content text-sm text-opacity-80'>
                        Show progressbar, loadings or simple bar charts using
                        progress component
                      </p>{" "}
                      <div className='mt-4 flex justify-end'>
                        <a
                          href='https://daisyui.com/components/progress'
                          className='btn btn-primary btn-sm xl:btn-md'
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='col-span-3 row-span-1 mx-2 flex w-72 flex-shrink-0 flex-col justify-center xl:mx-0 xl:w-auto svelte-1n6ue57'>
          <div className='dropdown dropdown-end w-full'>
            <div tabIndex={0}>
              <div className='flex items-center justify-between'>
                <div className='online avatar'>
                  <div className='mask mask-squircle bg-base-100 h-16 w-16 p-1'>
                    <img
                      src='https://api.lorem.space/image?w=150&h=180'
                      alt='Avatar Tailwind CSS Component'
                      className='mask mask-squircle'
                    />
                  </div>
                </div>{" "}
                <div className='online avatar'>
                  <div className='mask mask-squircle bg-base-100 h-16 w-16 p-1'>
                    <img
                      src='https://api.lorem.space/image?w=150&h=180'
                      alt='Avatar Tailwind CSS Component'
                      className='mask mask-squircle'
                    />
                  </div>
                </div>{" "}
                <div className='avatar offline'>
                  <div className='mask mask-squircle bg-base-100 h-16 w-16 p-1'>
                    <img
                      src='https://api.lorem.space/image?w=150&h=180'
                      alt='Avatar Tailwind CSS Component'
                      className='mask mask-squircle'
                    />
                  </div>
                </div>{" "}
                <div className='avatar'>
                  <div className='mask mask-squircle bg-base-100 h-16 w-16 p-1'>
                    <img
                      src='https://api.lorem.space/image?w=150&h=180'
                      alt='Avatar Tailwind CSS Component'
                      className='mask mask-squircle'
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div tabIndex={0} className='dropdown-content py-2'>
              <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title font-extrabold capitalize'>
                    avatar component
                  </h2>{" "}
                  <p className='text-neutral-content text-sm text-opacity-80'>
                    Use avatar component with any size
                  </p>{" "}
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='https://daisyui.com/components/avatar'
                      className='btn btn-primary btn-sm xl:btn-md'
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='bg-base-100 text-base-content rounded-box col-span-3 row-span-4 mx-2 grid w-72 flex-shrink-0 shadow-xl xl:mx-0 xl:w-auto xl:place-self-stretch svelte-1n6ue57'>
          <div className='grid w-full grid-cols-1 gap-4 p-4'>
            <div className='dropdown'>
              <div tabIndex={0}>
                <div className='grid w-full grid-cols-2 gap-4'>
                  <button className='btn btn-block'>Neutral</button>{" "}
                  <button className='btn btn-primary btn-block'>primary</button>{" "}
                  <button className='btn btn-secondary btn-block'>
                    secondary
                  </button>{" "}
                  <button className='btn btn-accent btn-block'>accent</button>{" "}
                  <button className='btn btn-info btn-block'>info</button>{" "}
                  <button className='btn btn-success btn-block'>success</button>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      button component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Buttons come in various shapes, colors and sizes
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/button'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className='dropdown dropdown-top'>
              <div tabIndex={0}>
                <div className='grid w-full grid-cols-2 gap-4'>
                  <button className='btn btn-warning btn-block'>warning</button>{" "}
                  <button className='btn btn-error btn-block'>error</button>{" "}
                  <button className='btn btn-outline btn-block'>outline</button>{" "}
                  <button className='btn btn-outline btn-primary btn-block'>
                    primary
                  </button>{" "}
                  <button className='btn btn-outline btn-secondary btn-block'>
                    secondary
                  </button>{" "}
                  <button className='btn btn-outline btn-accent btn-block'>
                    accent
                  </button>{" "}
                  <button className='btn btn-ghost btn-block'>ghost</button>{" "}
                  <button className='btn btn-link btn-block'>link</button>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      button component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Buttons come in various shapes, colors and sizes
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/button'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='col-span-3 row-span-2 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto svelte-1n6ue57'>
          <div className='dropdown dropdown-end dropdown-top'>
            <div tabIndex={0}>
              <div className='grid gap-4'>
                <div className='btn-group flex'>
                  <button className='btn flex-1'>1</button>{" "}
                  <button className='btn btn-active flex-1'>2</button>{" "}
                  <button className='btn flex-1'>3</button>{" "}
                  <button className='btn flex-1'>4</button>{" "}
                  <button className='btn flex-1'>5</button>
                </div>{" "}
                <div className='btn-group flex'>
                  <button className='btn btn-outline flex-1'>1</button>{" "}
                  <button className='btn btn-outline flex-1'>2</button>{" "}
                  <button className='btn btn-outline flex-1'>3</button>{" "}
                  <button className='btn btn-outline flex-1'>4</button>{" "}
                  <button className='btn btn-outline flex-1'>5</button>
                </div>
              </div>
            </div>{" "}
            <div tabIndex={0} className='dropdown-content py-2'>
              <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title font-extrabold capitalize'>
                    pagination component
                  </h2>{" "}
                  <p className='text-neutral-content text-sm text-opacity-80'>
                    Pagination buttons in many colors and sizes!
                  </p>{" "}
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='https://daisyui.com/components/pagination'
                      className='btn btn-primary btn-sm xl:btn-md'
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='dropdown dropdown-end dropdown-top'>
            <div tabIndex={0}>
              <div className='tabs tabs-boxed items-center'>
                <button className='tab flex-1'>Tab 1</button>{" "}
                <button className='tab tab-active flex-1'>Tab 2</button>{" "}
                <button className='tab flex-1'>Tab 3</button>
              </div>
            </div>{" "}
            <div tabIndex={0} className='dropdown-content py-2'>
              <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title font-extrabold capitalize'>
                    tab component
                  </h2>{" "}
                  <p className='text-neutral-content text-sm text-opacity-80'>
                    Tab component with several sizes and styles
                  </p>{" "}
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='https://daisyui.com/components/tab'
                      className='btn btn-primary btn-sm xl:btn-md'
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='bg-base-100 text-base-content rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 items-stretch shadow-xl xl:mx-0 xl:w-auto xl:place-self-stretch svelte-1n6ue57'>
          <div className='grid place-content-center gap-4 p-4'>
            <div className='dropdown dropdown-end'>
              <div tabIndex={0}>
                <div className='alert flex-col space-y-2'>
                  <div className='flex-1'>
                    <span className='mx-3 text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adip!
                    </span>
                  </div>{" "}
                  <div className='flex-none'>
                    <button className='btn btn-primary btn-outline btn-sm mr-2'>
                      Cancel
                    </button>{" "}
                    <button className='btn btn-primary btn-sm'>Apply</button>
                  </div>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      alert component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Show alerts, warnings, notification or other info
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/alert'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className='dropdown dropdown-end dropdown-top'>
              <div tabIndex={0}>
                <div className='alert alert-info'>
                  <div className='flex-1'>
                    <svg
                      width={20}
                      height={20}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='mx-2 h-6 w-6 stroke-current'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>{" "}
                    <span className='text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adip!
                    </span>
                  </div>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      alert component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Show alerts, warnings, notification or other info
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/alert'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className='dropdown dropdown-end dropdown-top'>
              <div tabIndex={0}>
                <div className='alert alert-success'>
                  <div className='flex-1'>
                    <svg
                      width={20}
                      height={20}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='mx-2 h-6 w-6 stroke-current'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                      />
                    </svg>{" "}
                    <span className='text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adip!
                    </span>
                  </div>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      alert component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Show alerts, warnings, notification or other info
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/alert'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='col-span-3 row-span-2 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto xl:place-self-stretch svelte-1n6ue57'>
          <div className='bg-base-100 text-base-content rounded-box shadow-xl'>
            <div className='dropdown dropdown-end w-full'>
              <div tabIndex={0}>
                <ul className='menu overflow-visible p-3'>
                  <li className='menu-title'>
                    <span>Menu Title</span>
                  </li>{" "}
                  <li>
                    <button>
                      <svg
                        width={20}
                        height={20}
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='mr-2 inline-block h-5 w-5 stroke-current'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                        />
                      </svg>
                      Menu Item 1
                    </button>
                  </li>{" "}
                  <li>
                    <button>
                      <svg
                        width={20}
                        height={20}
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='mr-2 inline-block h-5 w-5 stroke-current'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 10V3L4 14h7v7l9-11h-7z'
                        />
                      </svg>
                      Menu Item 2
                    </button>
                  </li>{" "}
                  <li>
                    <button>
                      <svg
                        width={20}
                        height={20}
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='mr-2 inline-block h-5 w-5 stroke-current'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                        />
                      </svg>
                      Menu Item 3<div className='badge badge-success'>new</div>
                    </button>
                  </li>
                </ul>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      menu component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Use it for sidebar or any other list of items
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/menu'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='col-span-3 row-span-1 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto svelte-1n6ue57'>
          <div className='bg-base-100 text-base-content rounded-box shadow-xl'>
            <div className='dropdown dropdown-end dropdown-top w-full'>
              <div tabIndex={0}>
                <div className='flex justify-center gap-8 p-4'>
                  <label aria-label='checkbox CSS component'>
                    <input type='checkbox' className='checkbox' />
                  </label>{" "}
                  <label aria-label='checkbox CSS component'>
                    <input
                      type='checkbox'
                      className='checkbox checkbox-primary'
                    />
                  </label>{" "}
                  <label aria-label='checkbox CSS component'>
                    <input
                      type='checkbox'
                      className='checkbox checkbox-secondary'
                    />
                  </label>{" "}
                  <label aria-label='checkbox CSS component'>
                    <input
                      type='checkbox'
                      className='checkbox checkbox-accent'
                    />
                  </label>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      checkbox component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Colorful, animated and accessible
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/checkbox'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className='dropdown dropdown-end w-full'>
              <div tabIndex={0}>
                <div className='rating rating-lg rating-half w-full justify-center px-4 pb-4'>
                  <input
                    type='radio'
                    aria-label='Rating reset'
                    name='rating-10'
                    className='rating-hidden'
                  />{" "}
                  <input
                    type='radio'
                    aria-label='Rating half star'
                    name='rating-10'
                    className='mask mask-star-2 mask-half-1 bg-green-500'
                  />{" "}
                  <input
                    type='radio'
                    aria-label='Rating 1 star'
                    name='rating-10'
                    className='mask mask-star-2 mask-half-2 bg-green-500'
                  />{" "}
                  <div className='w-1' />{" "}
                  <input
                    type='radio'
                    aria-label='Rating 1 and half star'
                    name='rating-10'
                    className='mask mask-star-2 mask-half-1 bg-green-500'
                  />{" "}
                  <input
                    type='radio'
                    aria-label='Rating 2 star'
                    name='rating-10'
                    className='mask mask-star-2 mask-half-2 bg-green-500'
                  />{" "}
                  <div className='w-1' />{" "}
                  <input
                    type='radio'
                    aria-label='Rating 2 and half star'
                    name='rating-10'
                    className='mask mask-star-2 mask-half-1 bg-green-500'
                  />{" "}
                  <input
                    type='radio'
                    aria-label='Rating 3 star'
                    name='rating-10'
                    className='mask mask-star-2 mask-half-2 bg-green-500'
                  />{" "}
                  <div className='w-1' />{" "}
                  <input
                    type='radio'
                    aria-label='Rating 3 and half star'
                    name='rating-10'
                    className='mask mask-star-2 mask-half-1 bg-green-500'
                  />{" "}
                  <input
                    type='radio'
                    aria-label='Rating 4 star'
                    name='rating-10'
                    className='mask mask-star-2 mask-half-2 bg-green-500'
                  />{" "}
                  <div className='w-1' />{" "}
                  <input
                    type='radio'
                    aria-label='Rating 4 and half star'
                    name='rating-10'
                    className='mask mask-star-2 mask-half-1 bg-green-500'
                  />{" "}
                  <input
                    type='radio'
                    aria-label='Rating 5 star'
                    name='rating-10'
                    className='mask mask-star-2 mask-half-2 bg-green-500'
                  />
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      Rating component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Styled radio buttons
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/rating'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='col-span-3 row-span-1 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto svelte-1n6ue57'>
          <div className='bg-neutral text-neutral-content rounded-box flex items-center shadow-xl'>
            <div className='dropdown dropdown-top'>
              <div tabIndex={0}>
                <div className='breadcrumbs px-4 text-sm'>
                  <ul>
                    <li>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          className='mr-2 h-4 w-4 stroke-current'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                          />
                        </svg>
                        Documents
                      </span>
                    </li>{" "}
                    <li>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          className='mr-2 h-4 w-4 stroke-current'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                          />
                        </svg>
                        Add Document
                      </span>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              <div tabIndex={0} className='dropdown-content py-2'>
                <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title font-extrabold capitalize'>
                      breadcrumbs component
                    </h2>{" "}
                    <p className='text-neutral-content text-sm text-opacity-80'>
                      Make a better navigation with breadcrumbs!
                    </p>{" "}
                    <div className='mt-4 flex justify-end'>
                      <a
                        href='https://daisyui.com/components/breadcrumbs'
                        className='btn btn-primary btn-sm xl:btn-md'
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='bg-accent text-accent-content rounded-box flex items-center p-4 shadow-xl'>
            <div className='flex-1 px-2'>
              <h2 className='text-3xl font-extrabold'>4,600</h2>{" "}
              <p className='text-sm text-opacity-80'>Page views</p>
            </div>{" "}
            <div className='flex-0'>
              <div className='dropdown dropdown-top dropdown-end'>
                <div tabIndex={0}>
                  <div className='flex space-x-1'>
                    <button
                      aria-label='button component'
                      className='btn btn-ghost btn-square'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='inline-block h-6 w-6 stroke-current'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    </button>{" "}
                    <button
                      aria-label='button component'
                      className='btn btn-ghost btn-square'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='inline-block h-6 w-6 stroke-current'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>{" "}
                <div tabIndex={0} className='dropdown-content py-2'>
                  <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                    <div className='card-body'>
                      <h2 className='card-title font-extrabold capitalize'>
                        button component
                      </h2>{" "}
                      <p className='text-neutral-content text-sm text-opacity-80'>
                        Buttons come in various shapes, colors and sizes
                      </p>{" "}
                      <div className='mt-4 flex justify-end'>
                        <a
                          href='https://daisyui.com/components/button'
                          className='btn btn-primary btn-sm xl:btn-md'
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className='card bg-base-100 col-span-3 row-span-1 mx-2 w-72 flex-shrink-0 overflow-visible shadow-lg xl:mx-0 xl:w-auto xl:place-self-stretch svelte-1n6ue57'>
          <div className='card-body flex-row items-center space-x-4 px-4'>
            <div className='flex-1'>
              <h2 className='card-title mb-0 flex'>
                <div className='dropdown dropdown-top'>
                  <div tabIndex={0}>
                    <button
                      aria-label='loading button'
                      className='btn btn-ghost loading btn-sm btn-circle'
                    />
                  </div>{" "}
                  <div tabIndex={0} className='dropdown-content py-2'>
                    <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                      <div className='card-body'>
                        <h2 className='card-title font-extrabold capitalize'>
                          loading button component
                        </h2>{" "}
                        <p className='text-neutral-content text-sm text-opacity-80'>
                          Buttons can get loadings state using a simple class
                        </p>{" "}
                        <div className='mt-4 flex justify-end'>
                          <a
                            href='https://daisyui.com/components/button'
                            className='btn btn-primary btn-sm xl:btn-md'
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                Downloading...
              </h2>{" "}
              <div className='dropdown dropdown-top w-full'>
                <div tabIndex={0}>
                  <progress
                    value={70}
                    max={100}
                    className='progress progress-secondary'
                  />
                </div>{" "}
                <div tabIndex={0} className='dropdown-content py-2'>
                  <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                    <div className='card-body'>
                      <h2 className='card-title font-extrabold capitalize'>
                        progress component
                      </h2>{" "}
                      <p className='text-neutral-content text-sm text-opacity-80'>
                        Show progressbar, loadings or simple bar charts using
                        progress component
                      </p>{" "}
                      <div className='mt-4 flex justify-end'>
                        <a
                          href='https://daisyui.com/components/progress'
                          className='btn btn-primary btn-sm xl:btn-md'
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className='flex-0'>
              <div className='dropdown dropdown-top dropdown-end'>
                <div tabIndex={0}>
                  <button
                    aria-label='circle button component'
                    className='btn btn-circle'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='inline-block h-6 w-6 stroke-current'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>{" "}
                <div tabIndex={0} className='dropdown-content py-2'>
                  <div className='card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl'>
                    <div className='card-body'>
                      <h2 className='card-title font-extrabold capitalize'>
                        button component
                      </h2>{" "}
                      <p className='text-neutral-content text-sm text-opacity-80'>
                        Buttons come in various shapes, colors and sizes
                      </p>{" "}
                      <div className='mt-4 flex justify-end'>
                        <a
                          href='https://daisyui.com/components/button'
                          className='btn btn-primary btn-sm xl:btn-md'
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaisyDemo;
