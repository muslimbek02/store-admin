import StoreSettings from "../StoreSettings";
import HeadingText from "../HeadingText";
import HrLine from "../HrLine";
import StoresList from "../StoresList";

const MainContent = () => {
  return (
    <div className="w-[calc(100%-256px)] pt-[48px]">
      <div className="px-[32px] mb-[32px]">
        <HeadingText>Настройки магазинов</HeadingText>
      </div>
      <HrLine />
      <div className="mt-[32px] px-[32px]">
        <StoreSettings />
        <StoresList />
      </div>
    </div>
  );
};

export default MainContent;
