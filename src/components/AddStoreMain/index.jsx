import AddStoreHeader from "../AddStoreHeader"
import HrLine from "../HrLine"
import AddStoreContent from "../AddStoreContent";
import AddStoreContact from "../AddStoreContact";

const AddStoreMain = () => {

  return (
    <div className="w-[calc(100%-256px)] pt-[48px]">
      <AddStoreHeader />
      <HrLine />
      <AddStoreContent />
      <HrLine />
      <AddStoreContact />
    </div>
  )
}

export default AddStoreMain;