import InputMask from "react-input-mask";

const MyInput = (props) => {
  return <InputMask {...props} className="pl-[16px] w-full h-[56px] placeholder:dark:text-[#6F6F6F] placeholder:text-[#BDBDBD] dark:bg-[#404040] bg-[#F9F9F9] dark:text-white text-[#6F6F6F] rounded-[16px]" />;
};

export default MyInput;
