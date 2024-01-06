import { IoSearchSharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

const AddStoreForm = () => {
  return (
    <form className="flex">
      <div className="h-[56px] grow relative text-[#BDBDBD]">
        <IoSearchSharp className="absolute text-[20px] left-[16px] font-black top-1/2 -translate-y-1/2" />
        <input
          type="text"
          className="w-full h-full pl-[48px] bg-[#F9F9F9] rounded-2xl"
          name="store-name"
          placeholder="Название магазина"
        />
      </div>
      <button className="flex items-center ml-[16px] px-[16px] bg-mainBgColor rounded-2xl text-white">
        <FiPlus className="font-black text-[20px]" />
        <span className="ml-[16px]">Новый магазин</span>
      </button>
    </form>
  );
};

export default AddStoreForm;
