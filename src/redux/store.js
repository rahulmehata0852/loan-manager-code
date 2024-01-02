import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Slices/AdminSlice";
import EmployeeSlice from "./Slices/EmployeeSlice";
import UserSlice from "./Slices/UserSlice";

const reduxStore = configureStore({
    reducer: {
        admin: AdminSlice,
        employee: EmployeeSlice,
        user: UserSlice
    }
})



export default reduxStore