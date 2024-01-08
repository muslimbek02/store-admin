import { useSelector, useDispatch } from "react-redux";
import { setStoreName, setStoreSize } from "../../redux/slices/storesSlices";
import DayWorkTime from "../DayWorkTime";

const AddStoreContent = () => {
  const { days, store, weekdays, openWeekTimes, closeWeekTimes, toggles } =
    useSelector((state) => state.storeState);

  const dispatch = useDispatch();

  const handleChangeSize = (evt) => {
    dispatch(setStoreSize(evt.target.value));
  };

  const handleChangeName = (evt) => {
    dispatch(setStoreName(evt.target.value));
  };

  return (
    <div className="flex text-[#6F6F6F] mt-[32px] pl-[32px] pr-[92px]">
      <div className="w-[196px]">
        <h4 className="text-[24px] font-gilroy font-normal">Основные</h4>
      </div>
      <div className="w-[calc(100%-196px)] pl-[32px]">
        <div className="flex gap-x-[32px]">
          <div className="w-[50%]">
            <h6>Наименование</h6>
            <input
              type="text"
              value={store.name}
              onChange={handleChangeName}
              className="bg-[#F9F9F9] block w-full h-[56px] rounded-[16px] pl-[16px] mt-[16px]"
            />
          </div>
          <div className="w-[50%]">
            <h6>Квадратура</h6>
            <div className="relative">
              <input
                type="text"
                value={store.size}
                onChange={handleChangeSize}
                className="bg-[#F9F9F9] block w-full h-[56px] rounded-[16px] pl-[16px] mt-[16px]"
              />
              <span className="text-[#BDBDBD] absolute right-0 top-0 w-[56px] flex items-center justify-center h-[56px]">
                м<sup>2</sup>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[32px]">
          <h6 className="mb-[16px]">Режим работы</h6>
          {days.map((day, index) => (
            <DayWorkTime
              key={day}
              day={day}
              engDay={weekdays[index]}
              openTime={Object.values(openWeekTimes)[index]}
              closeTime={Object.values(closeWeekTimes)[index]}
              toggle={Object.values(toggles)[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddStoreContent;
