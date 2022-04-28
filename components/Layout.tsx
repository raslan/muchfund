import { useTheme } from "next-themes";

const Layout = ({ ...props }) => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" ? "dark " : ""}min-h-screen w-full`}>
      {props.children}
    </div>
  );
};

export default Layout;
