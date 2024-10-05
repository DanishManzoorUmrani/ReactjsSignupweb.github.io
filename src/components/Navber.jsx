import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navber() {
    const navigate=useNavigate();

   
    return (
        <div className='flex flex-wrap'>
            <div className="flex flex-wrap justify-between sm:w-full shadow-xl h-[80px] bg-white items-center text-black">
                <h1 className='mx-4 text-[30px]'>Navbar</h1>
                <ul className='flex  gap-8 text-[20px] text-black'>
                    <li><Link to={"/"}> Home</Link></li>
                    <li  ><Link to={"/Profile"}> Profile</Link></li>
                    <li  ><Link to={"/Product"}> Product</Link></li>
                    
                    
                </ul>
                <div className="flex  gap-4 mx-4">
                    <button className='w-[100px]  h-[40px] bg-blue-700  text-white rounded-[10px] hover:bg-transparent hover:text-blue-800 hover:border-[2px] hover:border-blue-800' onClick={()=>navigate('./Signup')}>Sign up</button>
                    <button className=' hover:bg-transparent hover:text-red-500 hover:border-[2px] hover:border-red-500    w-[100px] h-[40px] bg-red-500 text-white rounded-[10px]' onClick={()=>navigate('./Signin')}>Sign in</button>
                </div>
            </div>
        </div>
    )
}
