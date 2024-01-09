import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import HeadingText from "../HeadingText";
import { addStoreItem } from "../../redux/slices/storesSlices";

const AddStoreHeader = () => {

  const disptach = useDispatch();

  const addStore = () => {
    disptach(addStoreItem());
  }

  return (
    <div className="px-[32px] mb-[32px] flex items-center justify-between">
      <div className="flex items-center">
        <Link
          to="/"
          className="w-[48px] h-[48px] dark:bg-[#3F3F3F] bg-[#F9F9F9] me-[16px] rounded-full dark:text-white text-[#4993DD] flex items-center justify-center"
        >
          <FaAngleLeft />
        </Link>
        <HeadingText>
          <span className="text-[#BDBDBD] dark:text-[#6F6F6F]">Магазин</span> Store Riviera
        </HeadingText>
      </div>
      <div className="flex items-center">
        <button className="px-[16px] pt-[15px] pb-[14px] dark:bg-[#404040] bg-[#F9F9F9] text-[#BDBDBD] rounded-[12px]">
          Сбросить
        </button>
        <button onClick={addStore} className="px-[16px] pt-[15px] pb-[14px] bg-[#1F78FF] text-white rounded-[12px] ml-[16px]">
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default AddStoreHeader;
