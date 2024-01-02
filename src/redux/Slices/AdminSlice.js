import { createSlice } from "@reduxjs/toolkit";
import { AddCustomerHistory, AddCustomers, AddEmployee, AdminLoginAct, GetAllCustomers, GetCustomerHistory, GetEmployees, GetTotalnumberOfByEmpCustomers, GetUserRequests, RequestsActions, RequestsSendToDb, Requestsrejected } from "../Actions/AdminAction";

const AdminSlice = createSlice({
    name: "AdminSlice",
    initialState: { customers: [], auth: JSON.parse(localStorage.getItem("auth")) },
    reducers: {
        LogOutAdmin: (state, { payload }) => {
            localStorage.removeItem("auth")
            state.auth = null
            state.customerAdded = false
            state.EmployeAdded = false
            state.customerAdded = false
            state.requestUpdated = false
            state.requestRejected = false
            state.error = null
            state.historyAdded = null
        },
        AdminInvalidate: (state, { payload }) => {
            state.EmployeAdded = false
            state.customerAdded = false
            state.requestUpdated = false
            state.requestRejected = false
            state.error = null
            state.historyAdded = null
        }

    },


    extraReducers: (builder) => {
        builder
            .addCase(AdminLoginAct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(AdminLoginAct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.auth = payload
            })
            .addCase(AdminLoginAct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })





            .addCase(AddEmployee.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(AddEmployee.fulfilled, (state, { payload }) => {
                state.loading = false
                state.EmployeAdded = true
            })
            .addCase(AddEmployee.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })






            .addCase(GetEmployees.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetEmployees.fulfilled, (state, { payload }) => {
                state.loading = false
                state.employees = payload
            })
            .addCase(GetEmployees.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })






            .addCase(AddCustomers.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(AddCustomers.fulfilled, (state, { payload }) => {
                state.loading = false
                state.customerAdded = true
            })
            .addCase(AddCustomers.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })







            .addCase(GetAllCustomers.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetAllCustomers.fulfilled, (state, { payload }) => {
                state.loading = false
                state.customers = payload
            })
            .addCase(GetAllCustomers.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })






            .addCase(GetTotalnumberOfByEmpCustomers.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetTotalnumberOfByEmpCustomers.fulfilled, (state, { payload }) => {
                state.loading = false
                state.totalAddedCustomers = payload
            })
            .addCase(GetTotalnumberOfByEmpCustomers.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })






            .addCase(GetUserRequests.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetUserRequests.fulfilled, (state, { payload }) => {
                state.loading = false
                state.requests = payload
            })
            .addCase(GetUserRequests.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })






            .addCase(RequestsActions.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(RequestsActions.fulfilled, (state, { payload }) => {
                state.loading = false
                state.requestUpdated = true
            })
            .addCase(RequestsActions.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })





            .addCase(Requestsrejected.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(Requestsrejected.fulfilled, (state, { payload }) => {
                state.loading = false
                state.requestRejected = true
            })
            .addCase(Requestsrejected.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })



            .addCase(RequestsSendToDb.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(RequestsSendToDb.fulfilled, (state, { payload }) => {
                state.loading = false
                state.requestSended = true
            })
            .addCase(RequestsSendToDb.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })



            .addCase(AddCustomerHistory.pending, (state, { payload }) => {
                state.pending = true
            })
            .addCase(AddCustomerHistory.fulfilled, (state, { payload }) => {
                state.pending = false
                state.historyAdded = true
            })
            .addCase(AddCustomerHistory.rejected, (state, { payload }) => {
                state.pending = false
                state.error = payload
            })



            .addCase(GetCustomerHistory.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetCustomerHistory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.customerHistory = payload
            })
            .addCase(GetCustomerHistory.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload

            })



    }
})


export default AdminSlice.reducer
export const { LogOutAdmin, AdminInvalidate } = AdminSlice.actions