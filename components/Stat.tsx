const Stat = ({ title, value, desc = '', transparent = false }: Props) => {
  return (
    <div
      className={`stat group p-3 gap-2 rounded-md border-2 shadow-sm border-primary shadow-accent lg:max-w-sm`}
    >
      <button className='lg:hidden stat-figure group-hover:grid h-full text-primary justify-center'>
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
            d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
          />
        </svg>
      </button>
      <div className='stat-title opacity-90'>{title}</div>
      <div className='stat-value text-3xl opacity-80'>{value}</div>
      <div className={`stat-desc text-base opacity-80`}>{desc}</div>
    </div>
  );
};

type Props = {
  title: string;
  value: string;
  desc?: string;
  negative?: boolean;
  transparent?: boolean;
};

export default Stat;
