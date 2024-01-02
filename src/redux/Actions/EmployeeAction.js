import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../Api";

export const GetEmployees = createAsyncThunk("GetEmployees", async (arg, { rejectWithValue }) => {

    try {

        const { data } = await API.get("/employees", {
            params: arg
        })
        if (data.length === 0) {
            return rejectWithValue("Invalid Credintials")
        } else {
            localStorage.setItem("employee", JSON.stringify(data[0]))
            return data[0]
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }


})




export const AddEmployeesByEmp = createAsyncThunk("AddEmployeesByEmp", async (arg, { rejectWithValue }) => {
    try {

        if (Object.keys(arg).length <= 5) {
            return rejectWithValue("Plz Fill Out All Cutomer details")
        }


        const { data } = await API.post("/customers", arg)

        return true


    } catch (error) {
        return rejectWithValue(error.message)
    }


})




export const GetEmployeesByEmp = createAsyncThunk("GetEmployeesByEmp", async (arg, { rejectWithValue }) => {
    try {

        const { data } = await API.get("/customers", {
            params: arg
        })

        if (data.length == 0) {
            return rejectWithValue("You have no customers")
        } else {

            return data
        }



    } catch (error) {
        return rejectWithValue(error.message)
    }


})



