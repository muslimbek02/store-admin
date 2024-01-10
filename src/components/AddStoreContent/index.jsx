import { useSelector, useDispatch } from "react-redux";
import { setStoreName, setStoreSize } from "../../redux/slices/storesSlices";
import ContentContainer from "../ContentContainer";
import ContentTitle from "../ContentTitle";
import DayWorkTime from "../DayWorkTime";

const AddStoreContent = () => {
  const { days, store, weekdays, openWeekTimes, closeWeekTimes, toggles } =
    useSelector((state) => state.shop);

  const dispatch = useDispatch();

  const handleChangeSize = (evt) => {
    dispatch(setStoreSize(evt.target.value));
  };

  const handleChangeName = (evt) => {
    dispatch(setStoreName(evt.target.value));
  };

  return (
    <ContentContainer>
      <div className="w-[196px]">
        <ContentTitle>Основные</ContentTitle>
      </div>
      <div className="w-[calc(100%-196px)] pl-[32px]">
        <div className="flex gap-x-[32px]">
          <div className="w-[50%]">
            <label>Наименование</label>
            <input
              type="text"
              value={store.name}
              onChange={handleChangeName}
              className="placeholder:text-[#BDBDBD] bg-[#F9F9F9] dark:bg-[#404040] block w-full h-[56px] rounded-[16px] pl-[16px] mt-[16px]"
            />
          </div>
          <div className="w-[50%]">
            <label>Квадратура</label>
            <div className="relative">
              <input
                type="text"
                value={store.size}
                placeholder="Введите квадратуру"
                onChange={handleChangeSize}
                className="placeholder:dark:text-[#6F6F6F] placeholder:text-[#BDBDBD] dark:bg-[#404040] bg-[#F9F9F9] block w-full h-[56px] rounded-[16px] pl-[16px] mt-[16px]"
              />
              <span className="dark:text-[#6F6F6F] text-[#BDBDBD] absolute right-0 top-0 w-[56px] flex items-center justify-center h-[56px]">
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
    </ContentContainer>
  );
};

export default AddStoreContent;
