import Stat from "components/Stat";
import { useTheme } from "next-themes";

const DashboardStats = () => {
  const { resolvedTheme: theme } = useTheme();
  return (
    <>
      <label
        htmlFor='my-drawer-2'
        className='btn btn-primary drawer-button hidden'
      >
        Open drawer
      </label>
      <div className='grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:px-3 xl:grid-cols-3'>
        <Stat
          transparent={theme === "dark"}
          title='Total'
          value='$1,000,000'
          negative
          desc='37% lower than last month'
        />
        <Stat
          transparent={theme === "dark"}
          title='Spent'
          value='$1,000'
          desc='10% lower than last month'
        />
        <Stat
          transparent={theme === "dark"}
          title='Left'
          value='$999,000'
          desc='15% higher than last month'
        />
      </div>
    </>
  );
};

export default DashboardStats;
