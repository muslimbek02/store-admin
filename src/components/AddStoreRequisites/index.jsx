import ContentContainer from "../ContentContainer";
import ContentTitle from "../ContentTitle";

const AddStoreRequisites = () => {
  return (
    <ContentContainer>
      <div className="w-[196px]">
        <ContentTitle>Реквизиты</ContentTitle>
      </div>
      <div className="w-[calc(100%-196px)] pl-[32px]">
        <div className="grid grid-cols-2 gap-x-[32px]">
          <div>
            <h6>Магазин имеет уникальные реквизиты</h6>
            <div className="flex gap-x-[8px] mt-[16px] bg-[#F9F9F9] rounded-[16px]">
              <label htmlFor="no-requisite" className="relative w-1/2 h-[56px] flex items-center justify-center">
                <input type="radio" name="requisite" id="no-requisite" className="absolute left-0 top-0 invisible opacity-0" />
                <span className="">Да</span>
              </label>
              <label htmlFor="yes-requisite" className="relative w-1/2 h-[56px] flex items-center justify-center">
                <input type="radio" name="requisite" id="yes-requisite" className="absolute left-0 top-0 invisible opacity-0" />
                <span className="">Нет</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default AddStoreRequisites;
