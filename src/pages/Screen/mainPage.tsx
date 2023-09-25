import React from 'react'
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import {MdOutlineVisibility }from "react-icons/md"
import {FiShoppingBag  }from "react-icons/fi"
import{ useProducts } from "../../hooks/useProduct"

const MainPage = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState<boolean>(false)
    const [propsState, setPropsState] = useState<{}>({} as any)
    const cart = useSelector((state: any) => state.cart)

    const {data, isLoading} = useProducts()

  return (
   <div className='flex flex-wrap ml-4 justify-center'>
    {data?.map((props: any) => (

   
  <div className=' border m-2'>
    <div className='w-[250px] h-[300px] relative m-2'>
<img className='w-[250px] h-[300px] bg-[gray] object-cover'>
</img>
<div className='w-full justify-center flex absolute bottom-0 pb-3 opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.2)] transition-all duration-500 h-[300px] items-end'>
<div className='w-[30px] h-[30px] rounded-[50%] bg-white  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] shadow-md hover:text-white duration-300 transition-all '>
<MdOutlineVisibility/>
</div>
<div className='w-[30px] h-[30px] rounded-[50%] bg-white ml-3  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-300 transition-all shadow-md'>
<FiShoppingBag />
</div>
</div>
    </div>

    <div className='flex items-center mt-2 justify-center w-[250px]'>

    </div>
  </div>
   ))}
   </div>
  )
}

export default MainPage