import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "../../redux/slices/storesSlices";

const Modal = () => {
  const { selectedStore, showModal } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-[#B8C3D0] ${
        showModal ? "flex" : "hidden"
      } items-center justify-center fixed inset-x-0 inset-y-0`}
    >
      <div className="p-[30px] text-black bg-white rounded-2xl w-1/2">
        {selectedStore && (
          <table className="store-table w-full border">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{selectedStore?.name}</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>{selectedStore?.size}</td>
              </tr>
              <tr>
                <td>site</td>
                <td>{selectedStore?.site}</td>
              </tr>
              <tr>
                <td>facebook</td>
                <td>{selectedStore?.facebook}</td>
              </tr>
              <tr>
                <td>telegram</td>
                <td>{selectedStore?.telegram}</td>
              </tr>
              <tr>
                <td>instagram</td>
                <td>{selectedStore?.instagram}</td>
              </tr>
              <tr>
                <td>legalCompany</td>
                <td>{selectedStore?.legalCompany}</td>
              </tr>
              <tr>
                <td>legalCountry</td>
                <td>{selectedStore?.legalCountry}</td>
              </tr>
              <tr>
                <td>legalAddress</td>
                <td>{selectedStore.legalAddress}</td>
              </tr>
              <tr>
                <td>legalPostVode</td>
                <td>{selectedStore?.legalPostCode}</td>
              </tr>
              <tr>
                <td>legalAddress</td>
                <td>{selectedStore?.legalAddress}</td>
              </tr>
              <tr>
                <td>legalAddress</td>
                <td>{selectedStore?.legalAddress}</td>
              </tr>
              <tr>
                <td>legalAddress</td>
                <td>{selectedStore?.legalAddress}</td>
              </tr>
            </tbody>
          </table>
        )}
        <button
          className="py-[15px] px-[25px] bg-[#ccc] rounded-2xl mt-[16px]"
          onClick={() => dispatch(setShowModal(false))}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
