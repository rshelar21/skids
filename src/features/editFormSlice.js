import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  type: false,
};

const editFormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    editForm: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      state.type = action.payload.type;
    },
  },
});

export const { editForm } = editFormSlice.actions;

export const selectUser = (state) => state.form;

export default editFormSlice.reducer;
