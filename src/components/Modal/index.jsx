import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "../../redux/slices/storesSlices";

const Modal = () => {
  const { selectedStore, showModal } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const workTimesList = [];
  if (selectedStore?.workTimes) {
    for (const key in selectedStore?.workTimes) {
      workTimesList.push(
        <tr key={key}>
          <td>Режим работы:</td>
          <td>
            {key + ": " + selectedStore?.workTimes[key].open} -{" "}
            {selectedStore?.workTimes[key].close}
          </td>
        </tr>
      );
    }
  }
  return (
    <div
      className={`bg-[rgba(0,0,0,0.6)] ${
        showModal ? "flex" : "hidden"
      } items-center justify-center fixed inset-x-0 inset-y-0`}
    >
      <div className="p-[30px] text-black overflow-auto bg-white dark:text-[white] dark:bg-[#404040] rounded-2xl w-1/2 h-[calc(100vh-60px)]">
        {selectedStore && (
          <table className="store-table w-full">
            <tbody>
              <tr>
                <td>Наименование</td>
                <td>{selectedStore?.name}</td>
              </tr>
              <tr>
                <td>Квадратура</td>
                <td>{selectedStore?.size}</td>
              </tr>
              {workTimesList}
              {selectedStore?.phones &&
                selectedStore?.phones.map(({ id, phone }, index) => (
                  <tr key={id}>
                    <td>Телефон {index + 1}</td>
                    <td>{phone}</td>
                  </tr>
                ))}
              <tr>
                <td>Сайт</td>
                <td>{selectedStore?.site}</td>
              </tr>
              <tr>
                <td>Facebook</td>
                <td>{selectedStore?.facebook}</td>
              </tr>
              <tr>
                <td>Telegram</td>
                <td>{selectedStore?.telegram}</td>
              </tr>
              <tr>
                <td>Instagram</td>
                <td>{selectedStore?.instagram}</td>
              </tr>
              <tr>
                <td>Юридическое название компании</td>
                <td>{selectedStore?.legalCompany}</td>
              </tr>
              <tr>
                <td>Cтрана</td>
                <td>{selectedStore?.legalCountry}</td>
              </tr>
              <tr>
                <td>Юридический адрес</td>
                <td>{selectedStore.legalAddress}</td>
              </tr>
              <tr>
                <td>Почтовый индекс</td>
                <td>{selectedStore?.legalPostCode}</td>
              </tr>
              {selectedStore?.bankShots &&
                selectedStore.bankShots.map(({ shotNumber, id }, index) => (
                  <tr key={id}>
                    <td>Банковский счет {index + 1}</td>
                    <td>{shotNumber}</td>
                  </tr>
                ))}
              <tr>
                <td>Чек</td>
                <td>{selectedStore.checkType}</td>
              </tr>
            </tbody>
          </table>
        )}
        <button
          className="py-[10px] text-white px-[25px] bg-[#1F78FF] rounded-2xl mt-[16px]"
          onClick={() => dispatch(setShowModal(false))}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
