import AddStoreForm from "../AddStoreForm";
import HeadingText from "../HeadingText";
import HrLine from "../HrLine";
import StoresTable from "../StoresTable";

const MainContent = () => {
  return (
    <div className="w-[calc(100%-256px)] pt-[48px]">
      <div className="px-[32px] mb-[32px]">
        <HeadingText />
      </div>
      <HrLine />
      <div className="mt-[32px] px-[32px]">
        <AddStoreForm />
        <StoresTable />
      </div>
    </div>
  );
};

export default MainContent;
