import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({insideRegister}) {

  const [togglePasswordType,setTogglePasswordType]=useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(book.png)] bg-cover bg-center text-white'>
      <div className='p-10'> 
        <h1 className='font-bold text-3xl text-center'>BOOKSTORE</h1>
        <div style={{width:'400px'}} className='bg-black text-white p-5 flex justify-center items-center flex-col my-5'>
          <div style={{width:'80px',height:'80px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
           <FaUser className='texrt-3xl'/> 
          </div>
          <h1 className='text-2xl'>{insideRegister?"Register":"Login"}</h1>
          <form>
            {/* username */}
            {
              insideRegister &&
              <input type="text" placeholder='Username' className='bg-white text-black p-2 my-5 w-full rounded'/>
            }
            {/* Email */}
            <input type="email" placeholder='E-Mail' className='bg-white text-black p-2 mb-5 w-full rounded'/>
            {/* Password */}
            <div className='flex items-center'>
              <input type={togglePasswordType ? "text":"password"} placeholder='Password' className='bg-white text-black p-2 mb-5 w-full rounded'/>
              {
                togglePasswordType ?
                <FaEyeSlash onClick={()=>setTogglePasswordType(!togglePasswordType)} className='text-gray-500 curser-pointer' style={{marginLeft:'-25px',marginTop:'-20px'}} />
                :
              <FaEye onClick={()=>setTogglePasswordType(!togglePasswordType)} className='text-gray-500 curser-pointer' style={{marginLeft:'-25px',marginTop:'-20px'}} />
              }
            </div>
            {/* forgot password */}
            <div className='flex justify-between mb-5'>
              <p className='text-xs text-orange-300'>Never share your password with others</p>
              { !insideRegister &&
                <button className='text-xs underline'>Forgot password</button>
              }
        </div>
            {/*Login /Register Button  */}
            <div className='my-5 text-center'>
          {
            insideRegister?
            <button className='bg-green-800 w-full p-2 rounded'>Register</button>
            :
            <button className='bg-green-800 w-full p-2 rounded'>Login</button>
          }
            </div>

            {/* google Authentication */}
            {
              !insideRegister &&
              <div>
                <p>--------------------------or--------------------------</p>
                <div className='flex justify-center items-center w-full mt-2'>
                  Google Authentication
                </div>
              </div>
            }
            {/* new/ */}
            <div className='text-center'>
              {
                insideRegister?
                <p>Existing User? <Link to={'/login'} className='ms-4 underline'>Login</Link></p> 
                :
               <p>New User? <Link to={'/register'} className='ms-4 underline'>Register</Link></p> 
              }

            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Auth