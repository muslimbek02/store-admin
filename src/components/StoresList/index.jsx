import { useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";

const StoresList = () => {
  const { stores } = useSelector((state) => state.storeState);

  return (
    <div className="mt-[16px]">
      <ul className="pb-[12px] font-semibol border-b-2 border-[#EAEAEA]">
        <li className="flex justify-between items-center text-[#BDBDBD] border-y-2 border-[#EAEAEA] py-[12px] px-[16px]">
          <div className="w-[256px]">Магазин</div>
          <div className="w-[256px]">Кол-во касс</div>
          <div className="w-[128px] ">Действие</div>
        </li>
        {stores.length > 0 &&
          stores.map((item) => (
            <li
              key={item.name}
              className="flex justify-between items-center mt-[12px] bg-[#FBFBFB] py-[8px] px-[16px] rounded-2xl"
            >
              <div className="w-[256px] text-[#4993DD]">{item.name}</div>
              <div className="w-[256px] text-[#6F6F6F]">{item.size}</div>
              <div className="w-[128px]">
                <button className="w-[40px] flex items-center justify-center h-[40px] text-white bg-[#EB5757] rounded-xl">
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
