const features = [
  {
    title: 'Budgeting',
    description:
      'Create your budget and see your spending in real time. See your future budget without doing the math.',
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7'
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
  {
    title: 'Expenses',
    description:
      'Log your expenses and see your spending in real time. See what you spend the most on and where you can save.',
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Goals',
    description:
      'Track your goals and see your progress in real time. Learn what you can change to meet your goals.',
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'
        />
      </svg>
    ),
  },
  {
    title: 'Subscriptions',
    description:
      'Track your subscriptions to online or offline services. See what you spend the most on and where you can save.',
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
        />
      </svg>
    ),
  },

  {
    title: 'Reports',
    description:
      'See graphs of your expenses, budget, and goals. Gain insight into your spending.',
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        />
      </svg>
    ),
  },
  {
    title: 'Multi-Currency Support',
    description:
      'Use any currency, or all of them at once. Support for over 160 currencies.',
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
];

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <>
    <div className='space-y-3 text-center'>
      <span className='inline-block p-3 bg-primary text-white rounded-full dark:bg-primary-focus'>
        {icon}
      </span>
      <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
        {title}
      </h1>
      <p className='text-gray-500 dark:text-gray-300'>{description}</p>
    </div>
  </>
);

const FeaturesSection = () => (
  <>
    <section>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-center text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white'>
          Take control of your{' '}
          <span className='underline decoration-primary-focus'>Wallet</span>
        </h1>
        <p className='text-center mt-4 text-gray-500 xl:mt-6 dark:text-gray-300'>
          With a simple interface, you can easily track your expenses, budget,
          and goals.
        </p>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3'>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon()}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FeaturesSection;
