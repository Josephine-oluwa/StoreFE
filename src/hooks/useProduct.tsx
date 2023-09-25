import { useQuery } from "@tanstack/react-query";
import {getProducts} from "../Api/Reg"

export const useProducts = ()=> {
    const {data, isLoading} = useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })
    return {data, isLoading}
}