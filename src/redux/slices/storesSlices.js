import { createSlice } from "@reduxjs/toolkit";

const days = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const stores = localStorage.getItem("stores")
  ? JSON.parse(localStorage.getItem("stores"))
  : [];

const store = {
  name: "",
  size: "",
};
const openWeekTimes = {
  Monday: "",
  Tuesday: "",
  Wednesday: "",
  Thursday: "",
  Friday: "",
  Saturday: "",
  Sunday: "",
};
const closeWeekTimes = {
  Monday: "",
  Tuesday: "",
  Wednesday: "",
  Thursday: "",
  Friday: "",
  Saturday: "",
  Sunday: "",
};
const toggles = {
  Monday: false,
  Tuesday: false,
  Wednesday: false,
  Thursday: false,
  Friday: false,
  Saturday: false,
  Sunday: false,
};

const initialState = {
  selectedStore: {},
  showModal: false,
  days,
  weekdays,
  store,
  stores,
  openWeekTimes,
  closeWeekTimes,
  toggles,
  phoneNumbers: [
    {
      id: 1,
      phone: "",
    },
  ],
  requisite: "yes",
  bankShots: [
    {
      id: 1,
      title: "",
      shotNumber: "",
    },
  ],
  checkType: "Стандартный",
  networks: {
    facebook: "",
    site: "",
  },
  instaTelegram: {
    instagram: "",
    telegram: "",
  },
  legal: {
    legalCompany: "",
    legalAddress: "",
    legalCountry: "uzbekistan",
    legalPostCode: "",
  },
};

const storesSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setStoreName: (state, action) => {
      state.store = {
        ...state.store,
        name: action.payload,
      };
    },
    setStoreSize: (state, action) => {
      state.store = {
        ...state.store,
        size: action.payload,
      };
    },
    setToggles: (state, action) => {
      state.toggles = {
        ...state.toggles,
        [action.payload.engDay]: action.payload.toggle,
      };
    },
    setCloseWeekTimes: (state, action) => {
      state.closeWeekTimes = {
        ...state.closeWeekTimes,
        [action.payload.engDay]: action.payload.closeWeekTime,
      };
    },
    setOpenWeekTimes: (state, action) => {
      state.openWeekTimes = {
        ...state.openWeekTimes,
        [action.payload.engDay]: action.payload.openWeekTime,
      };
    },
    addStoreItem: (state) => {
      const newStore = {
        id: Date.now(),
        ...state.legal,
        ...state.instaTelegram,
        ...state.networks,
        ...state.store,
        bankShots: state.bankShots,
        requisite: state.requisite,
        checkType: state.checkType,
        phones: state.phoneNumbers,
      };
      state.stores.push(newStore);
      window.localStorage.setItem("stores", JSON.stringify(state.stores));
      state.legal = {
        legalCompany: "",
        legalAddress: "",
        legalCountry: "uzbekistan",
        legalPostCode: "",
      };
      state.bankShots = [
        {
          id: 1,
          title: "",
          shotNumber: "",
        },
      ];
      state.store = {
        name: "",
        size: "",
      };
      state.checkType = "Стандартный";
      state.instaTelegram = {
        instagram: "",
        telegram: "",
      };
      state.phoneNumbers = [
        {
          id: 1,
          phone: "",
        },
      ];
      state.closeWeekTimes = {
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
        Sunday: "",
      };
      state.openWeekTimes = {
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
        Sunday: "",
      };
      state.networks = {
        facebook: "",
        site: "",
      };
    },
    deleteStoreItem: (state, { payload }) => {
      const filteredStores = state.stores.filter((item) => item.id !== payload);
      state.stores = filteredStores;
      window.localStorage.setItem("stores", JSON.stringify(filteredStores));
    },
    addNewPhone: (state) => {
      const newPhone = { id: Date.now(), phone: "" };
      state.phoneNumbers.push(newPhone);
    },
    deleteNewPhone: (state, { payload }) => {
      const filteredPhones = state.phoneNumbers.filter(
        (item) => item.id !== payload
      );
      state.phoneNumbers = filteredPhones;
    },
    handlePhoneNumChange: (state, { payload }) => {
      state.phoneNumbers[payload.index].phone = payload.value;
    },
    handleRequisiteChange: (state, { payload }) => {
      state.requisite = payload;
    },
    handleBankShotsChange: (state, { payload }) => {
      state.bankShots[payload.index].shotNumber = payload.shotNumber;
    },
    handleBankNamesChange: (state, { payload }) => {
      state.bankShots[payload.index].title = payload.title;
    },
    addNewBankShot: (state) => {
      const newBankShot = { id: Date.now(), title: "", shotNumber: "" };
      state.bankShots.push(newBankShot);
    },
    deleteBankShot: (state, { payload }) => {
      const filteredBankShots = state.bankShots.filter(
        (item) => item.id !== payload
      );
      state.bankShots = filteredBankShots;
    },
    handleCheckTypeChange: (state, { payload }) => {
      state.checkType = payload;
    },
    handleNetworks: (state, { payload }) => {
      const newNetwork = { ...state.networks, ...payload };
      state.networks = newNetwork;
    },
    handleInstaTelegram: (state, { payload }) => {
      const instaTel = { ...state.instaTelegram, ...payload };
      state.instaTelegram = instaTel;
    },
    setLegal: (state, { payload }) => {
      const newLegal = { ...state.legal, ...payload };
      state.legal = newLegal;
    },
    setSelectedStore: (state, {payload}) => {
      const findStore = state.stores.find(item => item.id === payload);
      state.selectedStore = findStore;
    },
    setShowModal: (state, {payload}) => {
      state.showModal = payload;
    }
  },
});

export const {
  setStoreName,
  setStoreSize,
  setToggles,
  setCloseWeekTimes,
  setOpenWeekTimes,
  addStoreItem,
  deleteStoreItem,
  addNewPhone,
  deleteNewPhone,
  handlePhoneNumChange,
  handleRequisiteChange,
  handleBankShotsChange,
  handleBankNamesChange,
  addNewBankShot,
  deleteBankShot,
  handleCheckTypeChange,
  handleNetworks,
  handleInstaTelegram,
  setLegal,
  setSelectedStore,
  setShowModal,
} = storesSlice.actions;
export default storesSlice.reducer;
