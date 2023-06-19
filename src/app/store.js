import { configureStore } from "@reduxjs/toolkit";
import editFormSlice from "../features/editFormSlice";

export default configureStore({
  reducer: {
    form: editFormSlice,
  },
});
