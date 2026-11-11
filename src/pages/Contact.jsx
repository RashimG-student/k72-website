import react from "react"
import HomeLogo from '../components/home/HomeLogo.jsx'
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link, useNavigate } from 'react-router-dom'


const Contact=()=>{
  return(
    <div  className='bg-black text-white w-full h-screen relative'>
<HomeLogo className='text-white'/>

    <div className="uppercase font-[font1] text-[9.5vw] leading-[8.5vw] pt-[1vw]">
      <div className="flex items-center justify-center">
        to talk
      </div>
      <div className="flex items-center justify-center">
        about
      </div>
      <div className="flex items-center justify-center relative">
        your
      </div>
        <div className="flex items-center justify-center relative">
        project
      </div>
    </div>











    </div>
  )

}
export default Contact