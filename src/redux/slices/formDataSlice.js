// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   phoneNumbers: [
//     {
//       id: 1,
//       phone: "",
//     },
//   ],
//   requisite: "yes",
//   bankShots: [
//     {
//       id: 1,
//       title: '',
//       shotNumber: ''
//     },
//   ],
//   checkType: 'Стандартный',
//   networks: {
//     facebook: '',
//     site: '',
//   },
//   instaTelegram: {
//     instagram: '',
//     telegram: ''
//   },
//   legal: {
//     legalCompany: '',
//     legalAddress: '',
//     legalCountry: '',
//     legalPostCode: ''
//   }
// };

// const formDataSlice = createSlice({
//   name: "formdata",
//   initialState,
//   reducers: {
//     addNewPhone: (state, action) => {
//       const newPhone = { id: Date.now(), phone: "" };
//       state.phoneNumbers.push(newPhone);
//     },
//     deleteNewPhone: (state, { payload }) => {
//       const filteredPhones = state.phoneNumbers.filter(
//         (item) => item.id !== payload
//       );
//       state.phoneNumbers = filteredPhones;
//     },
//     handlePhoneNumChange: (state, { payload }) => {
//       state.phoneNumbers[payload.index].phone = payload.value;
//     },
//     handleRequisiteChange: (state, { payload }) => {
//       state.requisite = payload;
//     },
//     handleBankShotsChange: (state, {payload}) => {
//       state.bankShots[payload.index].shotNumber = payload.shotNumber;
//     },
//     handleBankNamesChange: (state, {payload}) => {
//       state.bankShots[payload.index].title = payload.title;
//     },
//     addNewBankShot: (state, action) => {
//       const newBankShot = {id: Date.now(), title: '', shotNumber: ''};
//       state.bankShots.push(newBankShot);
//     },
//     deleteBankShot: (state, {payload}) => {
//       const filteredBankShots = state.bankShots.filter(item => item.id !== payload);
//       state.bankShots = filteredBankShots;
//     },
//     handleCheckTypeChange: (state, {payload}) => {
//       state.checkType = payload;
//     },
//     handleNetworks: (state, {payload}) => {
//       const newNetwork = {...state.networks, ...payload};
//       state.networks = newNetwork;
//     },
//     handleInstaTelegram: (state, {payload}) => {
//       const instaTel = {...state.instaTelegram, ...payload};
//       state.instaTelegram = instaTel;
//     },
//     setLegal: (state, {payload}) => {
//       const newLegal = {...state.legal, ...payload};
//       state.legal = newLegal;
//     },
//   }
// });

// export const {
//   addNewPhone,
//   deleteNewPhone,
//   handlePhoneNumChange,
//   handleRequisiteChange,
//   handleBankShotsChange,
//   handleBankNamesChange,
//   addNewBankShot,
//   deleteBankShot,
//   handleCheckTypeChange,
//   handleNetworks,
//   handleInstaTelegram,
//   setLegal,
// } = formDataSlice.actions;
// export default formDataSlice.reducer;
