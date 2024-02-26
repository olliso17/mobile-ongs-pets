import { useEffect, useState } from "react";
import api from "../service/api";
import { AxiosResponse } from "axios";


export interface Ong {
    id: string,
    active: boolean,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
    name: string,
    cnpj: string,
    address: string,
    neighborhood: string,
    city: string,
    email_ong?: string | '',
    state: string,
    number_address: number,
    cep: string,
    user_id: string,
    telephone?: string | '',
    maximum_pets?: number | 0,
    image?: string | '',
    pets?: [],
    donations?: []
}
const useAllOngs = async () => {
    const [ongs, setOngs] = useState<Ong[]>([])
    useEffect(() => {
        const getOngs = async () => {
            try {
                const response: AxiosResponse<Ong[]> = await api.get('ongs/all');
                setOngs(response.data)
            } catch (erro: any) {
                console.error('Erro ao obter recurso:', erro.message);
                throw erro;
            }
        }
        getOngs()
    }, []);

    return ongs
}

export default useAllOngs;