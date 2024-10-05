import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='flex flex-wrap w-full h-[200px] gap-10 justify-around bg-black text-white py-[10px] shadow-lg '>

        <div className="">
          <ul className="py-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Information</a></li>
          </ul>
        </div>
        <div className="">
          <ul className="py-4">
            <li>Card</li>
            <li>Sign Up</li>
            <li>Sign IN</li>
            <li>Browser</li>
          </ul>
        </div>
        <div className="">
          <ul className="py-4">
            <li>Danish</li>
            <li>Example@gmail.com</li>
            <li>+92374728827</li>
            <li>Details</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
