import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import ContentContainer from "../ContentContainer";
import ContentTitle from "../ContentTitle";
import MyInput from "../MyInput";
import {
  addNewPhone,
  deleteNewPhone,
  handlePhoneNumChange,
} from "../../redux/slices/formDataSlice";

const AddStoreContact = () => {
  const { phoneNumbers } = useSelector((state) => state.formdata);
  const dispatch = useDispatch();

  const handlePhoneChange = (index, value) => {
    dispatch(handlePhoneNumChange({ index, value }));
  };

  return (
    <ContentContainer>
      <div className="w-[196px]">
        <ContentTitle>Контакты</ContentTitle>
      </div>
      <div className="w-[calc(100%-196px)] pl-[32px]">
        <label>Телефоны</label>
        <div className="grid grid-cols-2 gap-x-[32px] gap-y-[16px] mt-[16px]">
          <div className="w-full relative">
            <MyInput
              placeholder="+998 XX XXX XX XX"
              mask="+\9\98 99 999 99 99"
              value={phoneNumbers[0].phone}
              onChange={(evt) => handlePhoneChange(0, evt.target.value)}
            />
            <span className="absolute top-0 left-[16px] h-full flex items-center">
              +998
            </span>
          </div>
          {phoneNumbers.slice(1).map(({ phone, id }, index) => (
            <div className="w-full relative" key={id}>
              <MyInput
                placeholder="+998 XX XXX XX XX"
                mask="+\9\98 99 999 99 99"
                value={phone}
                onChange={(evt) =>
                  handlePhoneChange(index + 1, evt.target.value)
                }
              />
              <span className="absolute top-0 left-[16px] h-full flex items-center">
                +998
              </span>
              <button
                onClick={() => dispatch(deleteNewPhone(id))}
                className="absolute w-[56px] h-[56px] top-0 right-0 h-full flex items-center justify-center"
              >
                <TiDelete className="text-[25px] text-[#EB5757]" />
              </button>
            </div>
          ))}
          <div className="w-full">
            <button
              onClick={() => dispatch(addNewPhone())}
              className="dark:bg-[#404040] dark:text-white font-inter block w-full flex items-center justify-center rounded-[16px] h-[56px] bg-[#F9F9F9] text-[#4993DD]"
            >
              <FaPlus className="text-[] mr-[15px]" />
              Добавить телефон
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[32px] mt-[32px]">
          <div className="w-full">
            <label className=" block mb-[16px]">Facebook</label>
            <MyInput type="text" placeholder="Название страницы" />
          </div>
          <div className="w-full">
            <label className=" block mb-[16px]">Instagram</label>
            <MyInput type="text" placeholder="@ Юзернейм" />
          </div>
          <div className="w-full">
            <label className=" block mb-[16px]">Telegram</label>
            <MyInput type="text" placeholder="@ Юзернейм" />
          </div>
          <div className="w-full">
            <label className=" block mb-[16px]">Сайт</label>
            <MyInput type="text" placeholder="Ссылка на сайт" />
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default AddStoreContact;
