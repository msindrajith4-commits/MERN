import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'


function Edit() {
  const [offCanvas,setoffCanvas]= useState(false)
  return (
    <div>
    {/* Button */}
    <button onClick={()=>setoffCanvas} className='bg-black text-white font-bold p-2 flex items-center justify-center rounded hover:bg-white hover:text-black border'>
    <FaPen className='me-2' /> Edit
    </button>
    {/* offcanvas */}
    {
    offCanvas&&
    <div>
    <div className='bg-gray-500/75 inset-0 fixed w-full h-full'>
    </div>
      <div className='bg-white h-full z-50 fixed w-90 top-0 left-0'>
        {/* head */}
        <div className='flex justify-between item-center mb-5 bg-black text-white p-3 text-2xl'>
       <h1>Update user profile</h1>
       <FaX onClick={()=>setoffCanvas(false)}/>
        </div>
        {/* body */}
        <div className='flex flex-col justify-center items-center my-5'>
          <label htmlFor="userProfile">
          <input type="file" id='userProfile' hidden />
          <img style={{height:'100px',width:'100px',borderRadius:'50%'}} className='z-51' src="https://portkennedyps.wa.edu.au/wp-content/uploads/2017/06/user-icon-male.jpg" alt="user" />
          <button style={{marginLeft:'60px',marginTop:'-25'}} className='bg-black text-white px-2 y-2 rounded z-52 fixed'><FaPen /></button>
          </label>
          {/* username */}
          <div className='mt-10 mb-3 w-full px-5'>
            <input type="text" placeholder='Username' className='w-full bg-grey-100 rounded p-2' />
          </div>
          {/* password */}
          <div className=' mb-3 w-full px-5'>
            <input type="text" placeholder='Password' className='w-full bg-grey-100 rounded p-2' />
          </div>
          {/* new Password */}
          <div className=' mb-3 w-full px-5'>
            <input type="text" placeholder='Confirm password' className='w-full bg-grey-100 rounded p-2' />
          </div>
          {/* bio */}
          <div className='mb-3 w-full px-5'>
            <input type="text" placeholder='Bio' className='w-full bg-grey-100 rounded p-2' />
            
          </div>
          {/* reset */}
          <div className='flex justify-end mt-5 py-1 font-bold rounded w-full'>
            <button className='bg-yellow-600 text-white px-5 py-2 font-bold rounded'> RESET</button>
             <button className='bg-green-600 text-white px-5 py-2 font-bold rounded ms-5'> UPDATE</button>

          </div>
        </div>
      </div>
      </div>
}
    
    </div>
  )
}

export default Edit
