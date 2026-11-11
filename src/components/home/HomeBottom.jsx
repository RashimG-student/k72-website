import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const HomeBottom = () => {
  return (
    <div className='flex justify-center '>
       <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-22 flex items-center border-white rounded-full uppercase mr-[2vw] px-5 pb-3'>
        <Link className='text-[7vw] lg:mt-6 font-[font2]' to='/projects'>WORK</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-22 flex items-center border-white rounded-full uppercase px-5 pb-3'>
        <Link className='text-[7vw] lg:mt-6 font-[font2]' to='/agence'>agency</Link>
      </div>
    </div>
  )
}

export default HomeBottom
