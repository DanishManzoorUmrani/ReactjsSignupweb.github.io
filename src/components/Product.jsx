import React, { useState } from 'react'
import useData from '../hooks/useData'
import { useNavigate } from 'react-router-dom'
export default function Product() {

  const [ProductName, setProductName] = useState("")
  const [ProductDetials, setProductDetials] = useState("")
  const [ProductUrl, setProductUrl] = useState()
  const { prodcard, setprodcard } = useData();
  const navgate = useNavigate();
  const Addcard = (e) => {
 
    const addtocard = setprodcard([...prodcard, { ProductName, ProductDetials, ProductUrl }])
    console.log(prodcard);
    if (!addtocard) {
      navgate("/")
    }
   
  }

  return (
    <div className='w-full h-[80vh] flex justify-center items-center '>
      <div className="flex flex-col justify-center shadow-xl items-center gap-6 rounded-[15px] flex-wrap h-[400px] w-[400px] border-[2px]">
        <input type="text" className='border-[1px] p-3 rounded-[10px]  w-[200px] ' placeholder='Add Product Name' onChange={(e) => setProductName(e.target.value)} />
        <input type="text" className='border-[1px] p-3 rounded-[10px]  w-[200px] ' placeholder='Add Product Detials' onChange={(e) => setProductDetials(e.target.value)} />
       
        <input type="text" className='border-[1px] p-3 rounded-[10px]  w-[200px] ' placeholder='App Product IMG Url' onChange={(e) => setProductUrl(e.target.value)} />
        <button className='w-[200px] border-[1px] p-3 rounded-[10px] bg-blue-800 text-white hover:bg-transparent hover:border-blue-700 hover:text-blue-800' onClick={Addcard}>Add</button>
      </div>
    </div>
  )
}
