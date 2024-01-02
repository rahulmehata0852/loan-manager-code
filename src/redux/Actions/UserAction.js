import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../Api";

export const UserLogin = createAsyncThunk("UserLogin", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/customers", {
            params: arg
        })
        if (data.length === 0) {
            return rejectWithValue("Invalid Creditainals")
        } else {
            localStorage.setItem("user", JSON.stringify(data[0]))
            return data[0]
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})



export const RequestLoan = createAsyncThunk("RequestLoan", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.post("/requests", arg)
        {
            return true
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})



export const GetRequestLoan = createAsyncThunk("GetRequestLoan", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/requests", {
            params: {
                userId: arg
            }
        })
        console.log(data);
        if (data.length === 0) {
            return rejectWithValue("You have no requests")
        } else {
            return data
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }

})




export const UserRegister = createAsyncThunk("UserRegister", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.post("/customers", arg)
        {
            return true
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})





export const UserInstallmentPay = createAsyncThunk("UserInstallmentPay", async (arg, { rejectWithValue }) => {

    try {
        // delete arg.id
        const { data } = await API.patch(`/customers/${arg.userId}`, arg)
        {
            return true
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})



export const GetAlllDetailsOfComapany = createAsyncThunk("getAlllDetailsOfCustomers", async (arg, { rejectWithValue }) => {

    try {

        const { data } = await API.get("/customers")
        const { data: edata } = await API.get("/employees")

        return [data, edata]


    } catch (error) {
        return rejectWithValue(error.message)
    }

})


export const userInstallmentBounced = createAsyncThunk("userInstallMentBounced", async (arg, { rejectWithValue }) => {
    try {
        const { data } = API.patch(`/customers/${arg.userId}`, arg)

        return true
    } catch (error) {
        return rejectWithValue(error.message)
    }
})  
