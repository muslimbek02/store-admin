import { Link } from "react-router-dom";

const SideBarMenuItem = ({ children }) => {
  return (
    <li>
      <Link
        to="/"
        className="dark:text-white dark:hover:text-[#60A5FA] dark:bg- dark:hover:bg-[#5E5E5E] flex items-center px-[32px] py-[12px] font-gilroy font-normal text-[#6F6F6F] hover:text-textActiveColor hover:bg-[#E0E7EE]"
      >
        {children}
      </Link>
    </li>
  );
};

export default SideBarMenuItem;
