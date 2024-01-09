import { FaAngleLeft } from "react-icons/fa6";
import SideBarMenuItem from "../SideBarMenuItem";
import SettingIcon from "../../assets/setting-icon.svg";

const pageLinks = [
  "Профиль",
  "Компания",
  "Магазины",
  "Кассы",
  "Чеки",
  "Валюты и оплата",
  "Товары",
];

const SideBarMenu = () => {
  return (
    <ul className="mt-[48px]">
      <SideBarMenuItem>
        <FaAngleLeft className="dark:text-[#6F6F6F]" />
        <img src={SettingIcon} alt="setting icon" className="ml-[16px]" />
        <span className="ml-[16px]">Настройки</span>
      </SideBarMenuItem>
      {pageLinks.map((item) => (
        <SideBarMenuItem key={item}>{item}</SideBarMenuItem>
      ))}
    </ul>
  );
};

export default SideBarMenu;
