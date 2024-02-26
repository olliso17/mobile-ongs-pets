import axios from "axios";

const baseUrl ='http://192.168.18.8:3000/'

const api = axios.create({
    baseURL:baseUrl,

    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    }

})

export default api