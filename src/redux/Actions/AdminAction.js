import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../Api";

export const AdminLoginAct = createAsyncThunk("AdminLogin", async (arg, { rejectWithValue }) => {
    try {

        if (Object.keys(arg).length === 0) {
            return rejectWithValue("Fill The form 😄")
        }

        const { data } = await API.get("/admin", {
            params: arg
        })
        if (data.length === 0) {
            return rejectWithValue("Invalid Credintials")
        } else {
            localStorage.setItem("auth", JSON.stringify(data[0]))
            return data[0]
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }


})




export const AddEmployee = createAsyncThunk("AddEmployee", async (arg, { rejectWithValue }) => {


    try {
        if (Object.keys(arg).length === 0) {
            return rejectWithValue("Fill The form 😄")
        }
        const result = await API.post("/employees", arg)
        return true
    } catch (error) {
        return rejectWithValue(error.message)
    }
})



export const GetEmployees = createAsyncThunk("GetEmployee", async (arg, { rejectWithValue }) => {


    try {

        const result = await API.get("/employees")
        return result.data

    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const AddCustomers = createAsyncThunk("AddCustomers", async (arg, { rejectWithValue }) => {


    try {
        if (Object.keys(arg).length <= 5) {
            return rejectWithValue("Plz Fill Out All Cutomer details")
        }
        const result = await API.post("/customers", arg)
        return true

    } catch (error) {
        return rejectWithValue(error.message)
    }
})




export const GetAllCustomers = createAsyncThunk("GetAllCustomers", async (arg, { rejectWithValue }) => {


    try {
        const { data } = await API.get("/customers")

        return data

    } catch (error) {
        return rejectWithValue(error.message)
    }
})




export const GetTotalnumberOfByEmpCustomers = createAsyncThunk("GetTotalnumberOfByEmpCustomers", async (arg, { rejectWithValue }) => {


    try {
        const { data } = await API.get("/customers")

        {
            return data
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }
})



export const GetUserRequests = createAsyncThunk("GetUserRequests", async (arg, { rejectWithValue }) => {


    try {
        const { data } = await API.get("/requests", {
            params: {
                "status": "pending"
            }
        })

        {
            return data
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const RequestsActions = createAsyncThunk("RequestsActions", async (arg, { rejectWithValue }) => {
    try {
        const { data } = await API.patch(`/requests/${arg.id}`, arg)

        {
            return true
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }
})



export const Requestsrejected = createAsyncThunk("Requestsrejected", async (arg, { rejectWithValue }) => {
    console.log(arg);
    try {
        const { data } = await API.patch(`/requests/${arg.id}`, arg)

        {
            return true
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const RequestsSendToDb = createAsyncThunk("RequestsSendToDb", async (arg, { rejectWithValue }) => {
    try {
        // console.log(arg);
        // delete arg.id
        // if (arg.hasOwnProperty('id')) {
        //     delete arg.id; // This will only delete the 'id' property if it exists in the object.
        // } else {
        //     return rejectWithValue('Property "id" does not exist in the object.');
        // }
        console.log(arg);
        const { data } = await API.patch(`/customers/${arg.userId}`, arg)

        {
            return true
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const AddCustomerHistory = createAsyncThunk("addCustomerHistory", async (arg, { rejectWithValue }) => {
    try {
        delete arg.id
        const result = await API.post("/history", arg)
        return "History Add Success"
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const GetCustomerHistory = createAsyncThunk("getCusHis", async (arg, { rejectWithValue }) => {
    try {
        const { data } = await API.get(`/history`, {
            params: {
                userId: arg
            }
        })
        console.log(data);
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})