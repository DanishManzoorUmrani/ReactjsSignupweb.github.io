import React from 'react'
import useData from '../hooks/useData'




export default function Profile() {
  const {loginuser} =useData();

  console.log();
  
  return (
    <div className='flex justify-center h-[70vh] items-center'>
      <h1 className='text-[46px] uppercase font-bold' >{loginuser}</h1>
    </div>
  )
}
