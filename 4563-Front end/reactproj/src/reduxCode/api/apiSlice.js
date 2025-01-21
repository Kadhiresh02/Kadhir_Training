import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {GET,POST,PUT,DELETE} from '../../shared/services/HTTP.Service';
import {GET,POST,PUT,DELETE} from '../../shared/services/HTTP.Service';

const API_URL="http://localhost:8848/products"

export const fetchData = createAsyncThunk("api/fetchData",async()=>{
    let response =await GET(API_URL);
    return response.data;
});
export const deleteData = createAsyncThunk("api/deleteData",async(id)=>{
     await DELETE(`${API_URL}/${id}`);
    return id;
});
export const createData = createAsyncThunk("api/createData",async(newUser)=>{
     let response = await POST(API_URL,newUser);
    return response.data;
});

const apiSlice=createSlice({
    name:"api",
    initialState:{
        data:[],
        status:"idle",//"loading"||"success" ||"failed"
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status="loading";
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status="success";
            state.data=action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message;

        })
    }
})

export default apiSlice.reducer;