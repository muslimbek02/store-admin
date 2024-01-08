import Logo from "../Logo";
import SideBarMenu from "../SideBarMenu";
import SideBarUserInfo from "../SideBarUserInfo";


const SideBar = () => {
  return (
    <div className="flex flex-col min-h-[720px] w-[256px] py-[48px] bg-darkGrayBg overflow-auto">
      <Logo />
      <SideBarMenu />
      <SideBarUserInfo />
    </div>
  );
};

export default SideBar;
