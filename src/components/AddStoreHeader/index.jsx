import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import HeadingText from "../HeadingText";
import { addStoreItem } from "../../redux/slices/storesSlices";

const AddStoreHeader = () => {
  const disptach = useDispatch();

  const {
    store,
    toggles,
    openWeekTimes,
    closeWeekTimes,
    phoneNumbers,
    requisite,
    bankShots,
    checkType,
    legal,
    networks,
    instaTelegram,
  } = useSelector((state) => state.shop);

  const addStore = () => {
    disptach(addStoreItem());
  };
  let isData =
    store.name &&
    store.size &&
    requisite &&
    checkType &&
    networks.facebook &&
    networks.site &&
    instaTelegram.telegram &&
    instaTelegram.instagram;

  for (const legalItem in legal) {
    isData = isData && legal[legalItem];
  }
  function isToggles(arr) {
    for (const toggle in arr) {
      if (toggles[toggle]) {
        if (openWeekTimes[toggle] === "" && closeWeekTimes[toggle] !== "") {
          return false;
        } else {
          if (openWeekTimes[toggle] !== "" && closeWeekTimes[toggle] === "") {
            return false;
          } else {
            if (
              openWeekTimes[toggle].includes("_") ||
              closeWeekTimes[toggle].includes("_")
            ) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
  function isPhones(arr) {
    for (const item of arr) {
      if (item.phone === "") {
        return false;
      } else {
        if (item.phone.includes("_")) {
          return false;
        }
      }
    }
    return true;
  }

  function isShot(arr) {
    for (const item of arr) {
      if (item.title === "") {
        return false;
      } else {
        if (item.shotNumber === "") {
          return false;
        } else if (item.shotNumber.includes("_")) {
          return false;
        }
      }
    }
    return true;
  }
  const isT = isToggles(toggles);
  const isP = isPhones(phoneNumbers);
  const isBank = isShot(bankShots);
  const isSubmit = isT && isP && isBank && isData;

  return (
    <div className="px-[32px] mb-[32px] flex items-center justify-between">
      <div className="flex items-center">
        <Link
          to="/stores"
          className="w-[48px] h-[48px] dark:bg-[#3F3F3F] bg-[#F9F9F9] me-[16px] rounded-full dark:text-white text-[#4993DD] flex items-center justify-center"
        >
          <FaAngleLeft />
        </Link>
        <HeadingText>
          <span className="text-[#BDBDBD] dark:text-[#6F6F6F]">Магазин</span>{" "}
          Store Riviera
        </HeadingText>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="px-[16px] pt-[15px] pb-[14px] dark:bg-[#404040] bg-[#F9F9F9] text-[#BDBDBD] rounded-[12px]"
        >
          Сбросить
        </button>
        <button
          disabled={!isSubmit}
          type="submit"
          onClick={addStore}
          className={`px-[16px] pt-[15px] pb-[14px] rounded-[12px] ml-[16px] ${
            !isSubmit
              ? "dark:bg-[#404040] bg-[#F9F9F9] text-[#BDBDBD]"
              : "bg-[#1F78FF] text-white"
          }`}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default AddStoreHeader;
