import React, { useState } from 'react'


//iconos
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { HiIdentification } from "react-icons/hi";
import { TbPasswordUser } from "react-icons/tb";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl' >
      <h1 className='text-3xl uppercase font-bold tracking-[3px] text-white mb-8'>Iniciar Sesion</h1>
      <form >



        <div className='relative mb-4'>
          <HiIdentification className='absolute top-1/2 -translate-y-1/2 left-2' />
          <input type="number"
            className='py-2 pl-8 pr-4 bg-white w-full outline-none rounded-lg'
            placeholder='Identification' />
        </div>


        <div className='relative mb-4'>
          <TbPasswordUser className='absolute top-1/2 -translate-y-1/2 left-2' />
          <input
            type={showPassword ? "text" : "password"}
            className='py-2 px-8 bg-white w-full outline-none rounded-lg'
            placeholder='Password' />

          {showPassword ? (
            <RiEyeFill onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer' />

          ) : (<RiEyeOffFill onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer' />
          )
          }



        </div>


        <div className='mt-6'>
          <button 
          type='submit' 
          className='bg-secondary-200 w-full py-2 px-3 rounded-lg 
          hover:text-white
          transition-colors' >Ingresar</button>
        </div>


      </form>
    </div>
  )
}

export default Login