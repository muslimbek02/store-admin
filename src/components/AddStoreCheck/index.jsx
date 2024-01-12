import { useSelector, useDispatch } from "react-redux";
import { handleCheckTypeChange } from "../../redux/slices/storesSlices";
import ContentContainer from "../ContentContainer";
import ContentTitle from "../ContentTitle";
import CheckImg from "../../assets/check.svg"
const AddStoreCheck = () => {
  const { checkType } = useSelector((state) => state.shop);
  const dispatch = useDispatch();


  return (
    <ContentContainer>
      <div className="w-[196px]">
        <ContentTitle>Чек</ContentTitle>
      </div>
      <div className="w-[calc(100%-196px)] pl-[32px]">
        <div className="grid grid-cols-3 h-[8px] bg-[#EAEAEA] dark:bg-[#5E5E5E] rounded-[16px]">
          {["Стандартный", "Кастомный", "Кастомный2"].map((item) => (
            <div
              key={item}
              className={`w-full rounded-[16px] ${
                item === checkType && 'bg-[#1F78FF]'
              }`}
            ></div>
          ))}
        </div>
        <div className="grid mt-[32px] grid-cols-3 gap-x-[32px]">
          {["Стандартный", "Кастомный", "Кастомный2"].map((item) => (
            <div className="w-full flex justify-center" key={item}>
              <div className="relative">
                <input
                  className="absolute check-radio opacity-0 invisible"
                  type="radio"
                  value={checkType}
                  name="radio"
                  checked={checkType === item}
                  id={item}
                  onChange={() => dispatch(handleCheckTypeChange(item))}
                />
                <label className="help-check-radio" htmlFor={item}>
                  <span className="absolute top-[35px] left-[-35px]">{item}</span>
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="grid mt-[32px] grid-cols-3 gap-x-[32px]">
          {["Стандартный", "Кастомный", "Кастомный2"].map((item) => (
            <img src={CheckImg} key={item} alt={item + "check"} />
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default AddStoreCheck;
