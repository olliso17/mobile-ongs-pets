import useSWR from "swr";
import api from "../service/api";

export function useFetchSwr<Data = any, Error = any>(url: string) {
    const { data, error, mutate } = useSWR<Data, Error>(url, async (url: any) => {
        const response = await api.get(url);
        const data = await response.data;

        return data
    },{
        refreshInterval: 6000, 
        errorRetryInterval:5000,
        revalidateOnReconnect:true
    })

    return { data, error, mutate}
}