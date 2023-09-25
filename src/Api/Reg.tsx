import axios from "axios"

const url = " http://localhost:2255/api/v1/read-products";
export const getProducts = async ()=> {
    try {
        return await axios.get(url).then((res)=> {
            return res.data.data.data
        })
    } catch (error){
        console.log(error)
    }
}
