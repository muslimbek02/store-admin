import { useSelector, useDispatch } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { deleteStoreItem, setSelectedStore, setShowModal } from "../../redux/slices/storesSlices";

const StoresList = () => {
  const { stores } = useSelector((state) => state.shop);

  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    dispatch(deleteStoreItem(id));
  };
  const openStore = (id) => {
    dispatch(setSelectedStore(id));
    dispatch(setShowModal(true));
  }

  return (
    <div className="mt-[16px]">
      <ul className="pb-[12px] font-semibol border-b-2 border-[#EAEAEA] dark:border-[#5E5E5E]">
        <li className="flex justify-between items-center dark:text-[#6F6F6F] text-[#BDBDBD] border-y-2 dark:border-[#5E5E5E] border-[#EAEAEA] py-[12px] px-[16px]">
          <div className="w-[256px]">Магазин</div>
          <div className="w-[256px]">Кол-во касс</div>
          <div className="w-[128px] ">Действие</div>
        </li>
        {stores.length > 0 &&
          stores.map(({ id, name, size }) => (
            <li
              key={id}
              className="flex justify-between items-center mt-[12px] dark:bg-[#313131] bg-[#FBFBFB] py-[8px] px-[16px] rounded-2xl"
            >
              <div role="button" onClick={() => openStore(id)} className="cursor-pointer w-[256px] text-[#4993DD] dark:text-[#60A5FA]">{name}</div>
              <div className="w-[256px] dark:text-white text-[#6F6F6F]">{size}</div>
              <div className="w-[128px]">
                <button
                  onClick={() => handleDelete(id)}
                  className="w-[40px] flex items-center justify-center h-[40px] text-white dark:bg-[#FC153D] bg-[#EB5757] rounded-xl"
                >
                  <TiDelete className="text-[20px]" />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StoresList;
