import Dropdown from "components/Dropdown";

const Navbar = () => {
  return (
    <div className='navbar pt-8 pl-3 pr-8 pb-6'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-3xl'>
          much<span className='text-blue-600'>fund</span>
        </a>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
