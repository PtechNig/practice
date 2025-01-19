
import { useState } from 'react';
import './App.css'
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function App() {
 
  const [action, setAction] = useState()

  const handleLogin = () => {
    setAction('active')
  }

  const handleRegister = () => {
    setAction('')
  }
  return (
    <>
      <div className= {`wrapper relative ${action? 'active' : ''}`} >
        <div className=' text-white flex items-center justify-center login'>

          <div className='border-2 rounded-3xl p-5 h-fit'>
            <h1 className='text-4xl w-96  text-center mb-8'>Login</h1>
            <form >
              <div className='relative' >
                <input type="text" placeholder='Username' className='w-full my-4 p-2.5 bg-transparent border-2 rounded-md ' />
                <FaUser className='absolute top-8 right-3' />
              </div>

              <div className='relative' >
                <input type="password" placeholder='Password' className='w-full my-4  p-2.5 bg-transparent border-2 rounded-md' />
                <IoMdLock className='absolute top-8 right-3' />
              </div>

              <div className='flex justify-between my-3'>
                <label >
                  <input type="checkbox" /> Remember Me
                </label>
                <a href="#" className='hover:text-yellow-500 duration-500' >Forgot Password</a>
              </div>
              <button className='w-full bg-yellow-500 py-2 rounded-md text-xl border-2 border-yellow-500 hover:bg-transparent duration-500 my-6'>Login</button>

              <div className='flex justify-between my-3'>

                <p>Dont have an Account?</p>

                <a href="#" className='hover:text-yellow-500 duration-500' onClick={handleLogin}>Register</a>
              </div>
            </form>
          </div>
        </div>


        <div className=' text-white flex items-center justify-center register absolute top-1 l'>

          <div className='border-2 rounded-3xl p-5 h-fit'>
            <h1 className='text-4xl w-96  text-center mb-8'>Register</h1>
            <form >
              <div className='relative' >
                <input type="text" placeholder='Username' className='w-full my-4 p-2.5 bg-transparent border-2 rounded-md ' />
                <FaUser className='absolute top-8 right-3' />
              </div>


              <div className='relative' >
                <input type="email" placeholder='Email' className='w-full my-4 p-2.5 bg-transparent border-2 rounded-md ' />
                <MdEmail className='absolute top-8 right-3' />
              </div>

              <div className='relative' >
                <input type="password" placeholder='Password' className='w-full my-4  p-2.5 bg-transparent border-2 rounded-md' />
                <IoMdLock className='absolute top-8 right-3' />
              </div>

              <div className='flex justify-between my-3'>
                <label >
                  <input type="checkbox" /> I agree with terms & conditions
                </label>

              </div>
              <button className='w-full bg-yellow-500 py-2 rounded-md text-xl border-2 border-yellow-500 hover:bg-transparent duration-500 my-6'>Register</button>

              <div className='flex justify-between my-3'>

                <p>Already have an Account?</p>

                <a href="#" className='hover:text-yellow-500 duration-500' onClick={handleRegister}>Login</a>
              </div>
            </form>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default App
