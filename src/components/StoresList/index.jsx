import { useSelector, useDispatch } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { deleteStoreItem } from "../../redux/slices/storesSlices";

const StoresList = () => {
  const { stores } = useSelector((state) => state.shop);

  const disptach = useDispatch();
  
  const handleDelete = (id) => {
    disptach(deleteStoreItem(id));
  };

  return (
    <div className="mt-[16px]">
      <ul className="pb-[12px] font-semibol border-b-2 border-[#EAEAEA]">
        <li className="flex justify-between items-center text-[#BDBDBD] border-y-2 border-[#EAEAEA] py-[12px] px-[16px]">
          <div className="w-[256px]">Магазин</div>
          <div className="w-[256px]">Кол-во касс</div>
          <div className="w-[128px] ">Действие</div>
        </li>
        {stores.length > 0 &&
          stores.map(({ id, name, size }) => (
            <li
              key={id}
              className="flex justify-between items-center mt-[12px] bg-[#FBFBFB] py-[8px] px-[16px] rounded-2xl"
            >
              <div className="w-[256px] text-[#4993DD]">{name}</div>
              <div className="w-[256px] text-[#6F6F6F]">{size}</div>
              <div className="w-[128px]">
                <button
                  onClick={() => handleDelete(id)}
                  className="w-[40px] flex items-center justify-center h-[40px] text-white bg-[#EB5757] rounded-xl"
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
