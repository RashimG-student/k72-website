import react from 'react';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineMenuAlt4 } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);


const Menu = () => {

const handleMouseEnter = (e) => {
  gsap.to(e.currentTarget.querySelector(".fill"), {
    height: "100%",
    duration: 0.1,
    backgroundColor : '#D3FD50',
    ease: "power3.inOut",
    color: 'black'
  });
};

const handleMouseLeave = (e) => {
  gsap.to(e.currentTarget.querySelector(".fill"), {
    height: "0%",
    duration: 0.5,
    ease: "power3.inOut",
    color:'white'
  });
};


return (
    <div className="relative">

      <div className="flex absolute justify-end top-0 right-0 w-full h-screen">

        {/* Work */}
        <div onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="bg-black w-[20vw] h-[4vw] overflow-hidden  text-white ">
          <div className=" fill  w-full h-full  ">
            <Link to="/projects">
              <p  className=" colorChange pt-[1.5vw] font-[font2] text-[1.8vw] pl-[1vw] uppercase">
                Work(17)
              </p>
            </Link>
          </div>
        </div>

        {/* Agency */}
        <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="bg-black w-[28vw] h-[7.5vw]  text-white">
          <div className= " fill  w-full h-full">
            <Link to="/agence">
              <p     className=" colorChange pt-[5vw]  font-[font2] text-[1.8vw] pl-[1vw] uppercase">
                Agency
              </p>
            </Link>
          </div>
        </div>

        {/* Menu */}
        <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="bg-black w-[20vw] h-[10vw]  text-white ">
      
          <div className="  fill  w-full h-full">
            <Link to='/navbar'>
             <HiOutlineMenuAlt4  className='text-[5vw] ml-[70%] pt-[10%]' />
            <p     className=" colorChange pt-[2.5vw]  font-[font2] text-[1.8vw] pl-[1vw] uppercase">
              Menu
            </p>
            </Link>
             
          </div>

           
        </div>

      </div>
    </div>
  );
};

export default Menu;