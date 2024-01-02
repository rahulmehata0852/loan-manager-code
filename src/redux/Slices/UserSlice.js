import { createSlice } from "@reduxjs/toolkit";
import { GetAlllDetailsOfComapany, GetRequestLoan, RequestLoan, UserInstallmentPay, UserLogin, UserRegister, userInstallmentBounced } from "../Actions/UserAction";

const UserSlice = createSlice({
    name: "UserSlice",
    initialState: { auth: JSON.parse(localStorage.getItem("user")) },
    reducers: {
        logOutUser: (state, { payload }) => {
            localStorage.removeItem("user")
            state.auth = null
        },
        userInvalidate: (state, { payload }) => {
            state.loanRequested = false
            state.UserRegistered = false
            state.UserInstallMentPay = false
            state.installmentBounced = false
            state.error = null
        }
    },


    extraReducers: (builder) => {
        builder



            .addCase(UserLogin.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(UserLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.auth = payload
            })
            .addCase(UserLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })






            .addCase(RequestLoan.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(RequestLoan.fulfilled, (state, { payload }) => {
                state.loading = false
                state.loanRequested = true
            })
            .addCase(RequestLoan.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })





            .addCase(GetRequestLoan.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetRequestLoan.fulfilled, (state, { payload }) => {
                state.loading = false
                state.requests = payload
            })
            .addCase(GetRequestLoan.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.requests = null
            })





            .addCase(UserRegister.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(UserRegister.fulfilled, (state, { payload }) => {
                state.loading = false
                state.UserRegistered = true
            })
            .addCase(UserRegister.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.requests = null
            })






            .addCase(UserInstallmentPay.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(UserInstallmentPay.fulfilled, (state, { payload }) => {
                state.loading = false
                state.UserInstallMentPay = true
            })
            .addCase(UserInstallmentPay.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.requests = null
            })



            .addCase(GetAlllDetailsOfComapany.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetAlllDetailsOfComapany.fulfilled, (state, { payload }) => {
                state.loading = false
                state.h_user = payload[0]
                state.h_employees = payload[1]
            })
            .addCase(GetAlllDetailsOfComapany.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.requests = null
            })






            .addCase(userInstallmentBounced.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userInstallmentBounced.fulfilled, (state, { payload }) => {
                state.loading = false
                state.installmentBounced = true
            })
            .addCase(userInstallmentBounced.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.requests = null
            })




    }

})


export default UserSlice.reducer
export const { logOutUser, userInvalidate } = UserSlice.actions