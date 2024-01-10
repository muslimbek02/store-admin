import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumbers: [
    {
      id: 1,
      phone: "",
    },
  ],
};

const formDataSlice = createSlice({
  name: "formdata",
  initialState,
  reducers: {
    addNewPhone: (state, action) => {
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
  },
});

export const { addNewPhone, deleteNewPhone, handlePhoneNumChange } =
  formDataSlice.actions;
export default formDataSlice.reducer;
