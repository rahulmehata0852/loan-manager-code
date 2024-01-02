import { createSlice } from "@reduxjs/toolkit";
import { AddEmployeesByEmp, GetEmployees, GetEmployeesByEmp } from "../Actions/EmployeeAction";

const EmployeeSlice = createSlice({
    name: "EmployeeSlice",
    initialState: { customers: [], employee: JSON.parse(localStorage.getItem("employee")) },
    reducers: {
        LogOutEmployee: (state, { payload }) => {
            localStorage.removeItem("employee")
            state.employee = null
            state.logOut = true
        },
        EmployeInvalidate: (state, { payload }) => {
            state.logOut = false
            state.EmployeeAdded = false
            state.error = null
        }
    },


    extraReducers: (builder) => {
        builder



            .addCase(GetEmployees.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetEmployees.fulfilled, (state, { payload }) => {
                state.loading = false
                state.employee = payload

            })
            .addCase(GetEmployees.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })




            .addCase(AddEmployeesByEmp.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(AddEmployeesByEmp.fulfilled, (state, { payload }) => {
                state.loading = false
                state.EmployeeAdded = true

            })
            .addCase(AddEmployeesByEmp.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })





            .addCase(GetEmployeesByEmp.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetEmployeesByEmp.fulfilled, (state, { payload }) => {
                state.loading = false
                state.customers = payload

            })
            .addCase(GetEmployeesByEmp.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })



    }
})



export default EmployeeSlice.reducer
export const { LogOutEmployee, EmployeInvalidate } = EmployeeSlice.actions