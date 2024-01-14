import { NavLink } from "react-router-dom";

const SideBarMenuItem = ({ children, href }) => {
  return (
    <li>
      <NavLink
        to={'/' + href}
        className="link dark:text-white dark:hover:text-[#60A5FA] dark:hover:bg-[#5E5E5E] flex items-center px-[32px] py-[12px] font-gilroy font-normal text-[#6F6F6F] hover:text-textActiveColor hover:bg-[#E0E7EE]"
      >
        {children}
      </NavLink>
    </li>
  );
};

export default SideBarMenuItem;
