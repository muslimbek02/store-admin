import AddStoreHeader from "../AddStoreHeader"
import HrLine from "../HrLine"
import AddStoreContent from "../AddStoreContent";
import AddStoreContact from "../AddStoreContact";
import AddStoreRequisites from "../AddStoreRequisites";
import AddStoreCheck from "../AddStoreCheck";

const AddStoreMain = () => {

  return (
    <div className="w-[calc(100%-256px)] pt-[48px]">
      <AddStoreHeader />
      <HrLine />
      <AddStoreContent />
      <HrLine />
      <AddStoreContact />
      <HrLine />
      <AddStoreRequisites />
      <HrLine />
      <AddStoreCheck />
    </div>
  )
}

export default AddStoreMain;