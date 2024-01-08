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

const stores = localStorage.getItem('stores') ? JSON.parse(localStorage.getItem('stores')) : [];

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
  days,
  weekdays,
  store,
  stores,
  openWeekTimes,
  closeWeekTimes,
  toggles,
};

const storesSlice = createSlice({
  name: "stores",
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
    addStoreItem: (state, action) => {
      if (state.store.name && state.store.size) {
        const newObj = {
          ...state.store,
          id: state.stores.length + 1
        };
        const newArr = [...state.stores, newObj];
        state.stores = newArr;
        window.localStorage.setItem("stores", JSON.stringify(newArr));
        state.store = {name: '', size: ''};
        console.log(newArr);
        alert("Magazin muvaffaqiyatli qoshildi");
      } else {
        alert("Iltimos malumotlarni kiriting!");
      }
    },
    deleteStoreItem: (state, action) => {
      
    },
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
} = storesSlice.actions;
export default storesSlice.reducer;
