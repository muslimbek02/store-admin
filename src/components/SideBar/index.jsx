import Logo from "../Logo";
import SideBarMenu from "../SideBarMenu";
import SideBarUserInfo from "../SideBarUserInfo";

const SideBar = () => {
  return (
    <div className="sticky top-0 flex flex-col h-[720px] w-[256px] py-[48px] bg-darkGrayBg dark:bg-[#404040] overflow-auto">
      <Logo />
      <SideBarMenu />
      <SideBarUserInfo />
    </div>
  );
};

export default SideBar;
