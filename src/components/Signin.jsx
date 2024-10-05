import React, { useEffect, useState } from 'react'
import useData from '../hooks/useData'
import { useNavigate } from 'react-router-dom';





export default function Signin() {



  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const {users,setusers,loginuser,setloginuser} =useData();
  const navgates=useNavigate();



  const Register = () => {
   
    const found =  users.find((items)=>{return items.useremail==email && items.userpass==pass})
    if(found){
      setloginuser(found.useremail)
      navgates("/profile")
        if(users==null){
          navgates("/")
        }
    }else(
      alert("invalid user name")
     
    )
    console.log( email, pass)
  }
  return (
    <div className='flex flex-wrap justify-center'>
      <div className="w-[700px] flex flex-col gap-7 my-5  flex-wrap justify-center items-center border-[2px] border-current h-[400px]">
        <h1 className='font-extrabold text-[24px]'>Sign In</h1>

        <input type="email" className='border-current p-[10px] rounded border-[1px] w-[500px] ' placeholder='email' required onChange={(e) => setemail(e.target.value)} />
        <input type="password" className='border-current p-[10px] rounded border-[1px] w-[500px] ' placeholder='password' required onChange={(e) => setpass(e.target.value)} />
        <button className='bg-blue-700 text-white w-[300px] rounded p-[10px] hover:bg-blue-500' onClick={Register}>Register</button>
          <a href=""onClick={()=>navgates("/Signup") }>Signup your Account</a>
      </div>
    </div>
  )
}
