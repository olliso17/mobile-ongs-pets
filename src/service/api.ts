import axios, { AxiosResponse } from "axios";
import { Ong } from "../interface/get_all_ongs_interface";
import { useState } from "react";

export const baseUrl ='http://192.168.18.8:3000/'

const api = axios.create({
    baseURL:baseUrl,

    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    }

})
// const getOngs = async () => {
//     const [ongs, setOngs] = useState<Ong[]>([]);

//         try {
//             const response: AxiosResponse<Ong[]> = await api.get('ongs/all');
//             if (response.data != null) {
//                 setOngs(response.data);

//             }
//             return ongs
//         } catch (erro: any) {
//             console.error('Erro ao obter recurso:', erro.message);
//             throw erro;
//         }
//     }
export default api