import useSWR from "sw";

import api from "../api/NetCoreApi";

export function useAxios(baseUrl) {
    const {data, error, mutate} = useSWR(
        url,
        async(url) => {
            const response = await api.get(url);

            return response.data;
        },
        {}
    );

    return {data,error,mutate};
}