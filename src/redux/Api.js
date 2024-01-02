import axios from "axios";

const API = axios.create({

    baseURL: "https://loan-manager-server.onrender.com"

    // baseURL: "http://localhost:5000"

})


export default API