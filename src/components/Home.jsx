import React from 'react'
import useData from '../hooks/useData'
import './component.css'
export default function Home() {
  const { users, setusers, loginuser, setloginuser, prodcard, setprodcard } = useData();
  return (
    <div>
      <div className='img'>
        {/* <img src="back.jpg" className="w-full h-[350px]  " /> */}
      
      </div>
      <div className="flex">
        {
          prodcard.map((items, k) => {
            return (
              <>
                
                  <div className='flex flex-col m-4 border-[1px] w-[200px] h-[250px] rounded-lg shadow-lg flex-wrap' >
                    <img className=' rounded-lg h-[100px]' src={items.ProductUrl} alt="" />
                    <h1 className='font-extrabold text-[20px] w-[190px] ' key={k}>{items.ProductName}</h1>
                    <p className='text-wrap' key={k}>{items.ProductDetials}</p>
                  </div>
               
              </>
            )
          })
        }
      </div>
    </div>
  )
}
