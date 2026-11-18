import React from 'react'
import { FaUser } from 'react-icons/fa'

function Auth() {
  return (
    <div className='w-full min-h-screen  flex justify-center items-center bg-[url](landing.png) bg-cover bg-center text-white'>
      <div>
        <h1 className='font-bold text-3xl'>BOOKSTORE</h1>
        <div style={{width:'400px'}} className='bg-black text-white p-5 flex justify-center items-center flex-col my-5'>
          <div style={{width:'80px',height:'80px',borderRadius:'50%'}} className='border mb-5 flex justify-center item-center'>
            <FaUser className='text-3xl' />
          </div>
          <h1 className='text-2xl'>{insideRegister?"Register":"Login"}</h1>
          <form>
            {/* Username */}
            {
              insideRegister &&
              <input type="text" placeholder='Username' className='bg-white text-black  p-2 my-5 w-full rounded' />
            }
            {/*Email  */}
            <input type="email" placeholder='email' className='bg-white text-black  p-2 mb-5 w-full rounded' />
            {/* Password */}
            <input type="password" placeholder='password' className='bg-white text-black  p-2 mb-5 w-full rounded'/>
           <FaEye className='text-gray-500 cursor-pointer' style={{marginLeft:'-25px',marginTop :'25px'}}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
