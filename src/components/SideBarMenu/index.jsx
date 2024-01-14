import { FaAngleLeft } from "react-icons/fa6";
import SideBarMenuItem from "../SideBarMenuItem";
import SettingIcon from "../../assets/setting-icon.svg";

const pageLinks = [
  {
    title: "Профиль",
    href: 'profile'
  },
  {
    title: "Компания",
    href: 'company'
  },
  {
    title: "Магазины",
    href: 'stores'
  },
  {
    title: "Кассы",
    href: 'checkouts'
  },
  {
    title: "Чеки",
    href: 'checks'
  },
  {
    title: "Валюты и оплата",
    href: 'currency'
  },
  {
    title: "Товары",
    href: 'products'
  },
];

const SideBarMenu = () => {
  return (
    <ul className="mt-[48px]">
      <SideBarMenuItem href="setting">
        <FaAngleLeft className="dark:text-[#6F6F6F]" />
        <img src={SettingIcon} alt="setting icon" className="ml-[16px]" />
        <span className="ml-[16px]">Настройки</span>
      </SideBarMenuItem>
      {pageLinks.map(({title, href}) => (
        <SideBarMenuItem href={href} key={title}>{title}</SideBarMenuItem>
      ))}
    </ul>
  );
};

export default SideBarMenu;
