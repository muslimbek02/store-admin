import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoSearchSharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { setFilteredStores } from "../../redux/slices/storesSlices";

const StoreSettings = () => {
  //const [storeName, setStoreName] = useState("");

  const dispatch = useDispatch();

  const handleStoreNameChange = (evt) => {
    dispatch(setFilteredStores(evt.target.value));
  };

  return (
    <div className="flex">
      <div className="h-[56px] grow relative dark:text-[#6F6F6F] text-[#BDBDBD]">
        <IoSearchSharp className="absolute text-[20px] left-[16px] font-black top-1/2 -translate-y-1/2" />
        <input
          type="text"
          className="w-full h-full pl-[48px] text-black dark:text-white dark:bg-[#404040] bg-[#F9F9F9] rounded-2xl"
          name="store-name"
          placeholder="Название магазина"
          onChange={handleStoreNameChange}
        />
      </div>
      <Link
        to="/stores/add-store"
        className="flex items-center ml-[16px] px-[16px] bg-mainBgColor rounded-2xl text-white"
      >
        <FiPlus className="font-black text-[20px]" />
        <span className="ml-[16px]">Новый магазин</span>
      </Link>
    </div>
  );
};

export default StoreSettings;
