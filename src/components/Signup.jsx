import React, { useState } from 'react'
import useData from '../hooks/useData'
import { useNavigate } from 'react-router-dom';
export default function Signup() {

  const [user, setuser] = useState();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const { users, setusers } = useData();
  const navigate = useNavigate();

  const Register = () => {
    const person = {
      Fullname: user,
      useremail: email,
      userpass: pass
    }

    const found = users.find((items) => { return items.useremail == person.useremail })
    if (!found) {
      users.push(person)
      console.log(users);
      navigate('/Signin')
    }
    else {
      alert("Already register ho  bar bar signup ni kar apna kam kar")
    }

  }
  return (
    <div className='flex flex-wrap justify-center'>

      <div className="sm:w-[700px] flex flex-col gap-7 my-5  flex-wrap justify-center items-center border-[2px] border-current  min-h-[400px]">

        <h1 className='font-extrabold text-xl'>Sign Up</h1>
        <input type="text" className='border-current p-[10px] rounded border-[1px] sm:w-[500px] ' placeholder='name' required onChange={(e) => setuser(e.target.value)} />
        <input type="email" className='border-current p-[10px] rounded border-[1px] sm:w-[500px] ' placeholder='email' required onChange={(e) => setemail(e.target.value)} />
        <input type="password" className='border-current p-[10px] rounded border-[1px] sm:w-[500px] ' placeholder='password' required onChange={(e) => setpass(e.target.value)} />
        <button className='bg-blue-700 text-white sm:w-[300px] rounded p-[10px] hover:bg-blue-500' onClick={Register}>Register</button>

      </div>

    </div>
  )
}
