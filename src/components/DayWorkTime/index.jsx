import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import {
  setCloseWeekTimes,
  setOpenWeekTimes,
  setToggles,
} from "../../redux/slices/storesSlices";

const DayWorkTime = ({ day, toggle, openTime, closeTime, engDay }) => {
  const dispatch = useDispatch();

  const handleChangeOpenTime = (evt) => {
    dispatch(setOpenWeekTimes({ engDay, openWeekTime: evt.target.value }));
  };

  const handleChangeCloseTime = (evt) => {
    dispatch(setCloseWeekTimes({ engDay, closeWeekTime: evt.target.value }));
  };

  const handleToggle = () => {
    dispatch(setToggles({ engDay, toggle: !toggle }));
  };

  return (
    <div
      className={`dark:bg-[#404040] bg-[#F9F9F9] flex items-center mb-[8px] px-[16px] w-full h-[56px] rounded-[16px] ${
        toggle ? "dark:border-[#1F78FF] border-[3px] border-[#4993DD]" : ""
      }`}
    >
      <h6 className="w-[128px] h-full border-[#EAEAEA] dark:border-[#6F6F6F] flex items-center border-r-2">
        {day}
      </h6>
      <div className="flex ml-[32px] items-center">
        <span className="text-[#BDBDBD] dark:text-[#6F6F6F] w-[96px]">
          Открытие:
        </span>
        <InputMask
          mask="99:99"
          value={openTime}
          onChange={handleChangeOpenTime}
          type="text"
          disabled={!toggle}
          placeholder="XX:XX"
          className={`bg-[#F9F9F9] dark:bg-[#404040] ml-[8px] outline-0 block h-[56px] w-[64px] ${
            toggle ? "dark:border-[#1F78FF] border-y-[3px] border-[#4993DD]" : ""
          }`}
        />
      </div>
      <div className="flex items-center ml-[32px]">
        <span className="text-[#BDBDBD] dark:text-[#6F6F6F] w-[96px]">Закрытие:</span>
        <InputMask
          value={closeTime}
          mask="99:99"
          onChange={handleChangeCloseTime}
          placeholder="XX:XX"
          disabled={!toggle}
          className={`bg-[#F9F9F9] dark:bg-[#404040] ml-[8px] outline-0 block h-[56px] w-[64px] ${
            toggle ? "dark:border-[#1F78FF] border-y-[3px] border-[#4993DD]" : ""
          }`}
        />
      </div>
      <div className="ml-auto">
        <label className="switch">
          <input
            type="checkbox"
            checked={toggle}
            onChange={handleToggle}
            className="toggle"
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default DayWorkTime;
