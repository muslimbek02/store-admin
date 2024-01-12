import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import {
  handleRequisiteChange,
  handleBankShotsChange,
  handleBankNamesChange,
  addNewBankShot,
  deleteBankShot,
  setLegal,
} from "../../redux/slices/storesSlices";
import ContentContainer from "../ContentContainer";
import ContentTitle from "../ContentTitle";
import MyInput from "../MyInput";

const AddStoreRequisites = () => {
  const { requisite, bankShots, legal } = useSelector(
    (state) => state.shop
  );
  const dispatch = useDispatch();

  const handleChangeBankShots = (index, shotNumber) => {
    dispatch(handleBankShotsChange({ index, shotNumber }));
  };
  const handleChangeBankNames = (index, title) => {
    dispatch(handleBankNamesChange({ index, title }));
  };

  const areObjectValuesEmpty = (arr) => {
    for (const obj of arr) {
      for (const key in obj) {
        if (!obj[key]) {
          return false; // If any key has a non-empty value, return false
        }
      }
    }
    return true; // All keys have empty values
  };

  const isAddBankShots = areObjectValuesEmpty(bankShots);

  const handleChangeLegal = (evt) => {
    const newLegal = {[evt.target.name]: evt.target.value};
    dispatch(setLegal(newLegal));
  }

  return (
    <ContentContainer>
      <div className="w-[196px]">
        <ContentTitle>Реквизиты</ContentTitle>
      </div>
      <div className="w-[calc(100%-196px)] pl-[32px]">
        <div className="grid grid-cols-2 gap-x-[32px]">
          <div>
            <h6>Магазин имеет уникальные реквизиты</h6>
            <div className="dark:bg-[#404040] flex p-[4px] h-[56px] items-center gap-x-[8px] mt-[16px] bg-[#F9F9F9] rounded-[16px]">
              <label
                htmlFor="no-requisite"
                className={`h-[48px] rounded-[12px] cursor-pointer relative w-1/2 flex items-center justify-center ${
                  requisite === "yes" &&
                  "bg-white dark:bg-[#262626] dark:shadow-[0px_0px_16px_0px_rgba(255,255,255,0.08)] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]"
                }`}
              >
                <input
                  type="radio"
                  value="yes"
                  checked={requisite === "yes"}
                  name="requisite"
                  id="no-requisite"
                  onChange={(evt) =>
                    dispatch(handleRequisiteChange(evt.target.value))
                  }
                  className="absolute left-0 top-0 invisible opacity-0"
                />
                <span className="">Да</span>
              </label>
              <label
                htmlFor="yes-requisite"
                className={`h-[48px] rounded-[12px] cursor-pointer relative w-1/2 flex items-center justify-center ${
                  requisite === "no" &&
                  "bg-white dark:bg-[#262626] dark:shadow-[0px_0px_16px_0px_rgba(255,255,255,0.08)] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]"
                }`}
              >
                <input
                  type="radio"
                  value="no"
                  checked={requisite === "no"}
                  name="requisite"
                  id="yes-requisite"
                  onChange={(evt) =>
                    dispatch(handleRequisiteChange(evt.target.value))
                  }
                  className="absolute left-0 top-0 invisible opacity-0"
                />
                <span className="">Нет</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-[16px]">
              Юридическое название компании
            </label>
            <MyInput
              name="legalCompany"
              value={legal.legalCompany}
              onChange={handleChangeLegal}
              type="text"
              placeholder="Введите название"
            />
          </div>
        </div>
        <div className="mt-[32px]">
          <label className="block mb-[16px]">Юридический адрес</label>
          <MyInput
            name="legalAddress"
            value={legal.legalAddress}
            onChange={handleChangeLegal}
            type="text"
            placeholder="Город, район, улица, дом"
          />
        </div>
        <div className="flex mt-[16px] top-[50%] gap-x-[32px]">
          <div className="w-1/2 relative">
            <label
              htmlFor="countries"
              className="absolute flex items-center text-[20px] inset-y-0 right-[16px]"
            >
              <IoIosArrowDown />
            </label>
            <select
              name="legalCountry"
              id="countries"
              value={legal.legalCountry}
              onChange={handleChangeLegal}
              className="block pl-[16px] h-[56px] rounded-[16px] dark:bg-[#404040] bg-[#F9F9F9] appearance-none w-full"
            >
              <option value="uzbekistan">Узбекистан</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="w-1/2">
            <MyInput
              type="text"
              name="legalPostCode"
              value={legal.legalPostCode}
              onChange={handleChangeLegal}
              placeholder="Введите почтовый индекс"
            />
          </div>
        </div>
        <div className="mt-[32px]">
          <h6 className="mb-[16px]">Банковский счет</h6>
          <div className="">
            <MyInput
              type="text"
              style={{ borderRadius: "16px 16px 0 0" }}
              placeholder="Введите банковский счет"
              value={bankShots[0].shotNumber}
              onChange={(evt) => handleChangeBankShots(0, evt.target.value)}
            />
            <div className="w-full h-[2px] bg-[#EAEAEA] dark:bg-[#5E5E5E]"></div>
            <MyInput
              type="text"
              style={{ borderRadius: "0 0 16px 16px" }}
              placeholder="Название банка и филиал"
              value={bankShots[0].title}
              onChange={(evt) => handleChangeBankNames(0, evt.target.value)}
            />
          </div>
          {bankShots.slice(1).map(({ id, title, shotNumber }, index) => (
            <div className="mt-[8px]" key={id}>
              <div className="relative">
                <MyInput
                  type="text"
                  style={{ borderRadius: "16px 16px 0 0" }}
                  placeholder="Введите банковский счет"
                  value={shotNumber}
                  onChange={(evt) =>
                    handleChangeBankShots(index + 1, evt.target.value)
                  }
                />
                <span
                  onClick={() => dispatch(deleteBankShot(id))}
                  className="text-[#EB5757] absolute top-0 w-[56px] h-[56px] flex items-center justify-center cursor-pointer right-0 text-[22px]"
                >
                  <TiDelete />
                </span>
              </div>
              <div className="w-full h-[2px] bg-[#EAEAEA] dark:bg-[#5E5E5E]"></div>
              <div className="relative">
                <MyInput
                  type="text"
                  style={{ borderRadius: "0 0 16px 16px" }}
                  placeholder="Название банка и филиал"
                  value={title}
                  onChange={(evt) =>
                    handleChangeBankNames(index + 1, evt.target.value)
                  }
                />
                <span
                  onClick={() => dispatch(deleteBankShot(id))}
                  className="text-[#EB5757] absolute top-0 w-[56px] h-[56px] flex items-center justify-center cursor-pointer right-0 text-[22px]"
                >
                  <TiDelete />
                </span>
              </div>
            </div>
          ))}
          <button
            onClick={() => dispatch(addNewBankShot())}
            className={`mt-[16px] w-full flex items-center justify-center py-[18px] rounded-[16px] ${
              !isAddBankShots
                ? "text-[#BDBDBD] bg-[#F9F9F9] dark:text-[#6F6F6F] dark:bg-[#404040]"
                : "text-white bg-[#1F78FF]"
            }`}
            type="button"
            disabled={!isAddBankShots}
          >
            <FaPlus className="mr-[10px]" />
            Добавить еще один банковский счет
          </button>
        </div>
      </div>
    </ContentContainer>
  );
};

export default AddStoreRequisites;
