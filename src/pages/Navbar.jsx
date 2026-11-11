import react from "react"
import HomeLogo from '../components/home/HomeLogo.jsx'
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link, useNavigate } from 'react-router-dom'


const Navbar=()=>{

const handleMouseEnter = (e) => {
  gsap.to(e.currentTarget.querySelector(".tutu"), {
    height: "100%",
    duration: 0.5,
    ease: "power3.inOut",
    color:'black',
     opacity: 1
  });
};

const handleMouseLeave = (e) => {
  gsap.to(e.currentTarget.querySelector(".tutu"), {
    height: "0%",
    duration: 0.5,
    ease: "power3.inOut",
    color:'white',
    opacity: 0
  });
};


useGSAP(()=>{
  gsap.to(".marquee-track",{
        xPercent: -50,
    duration: 5,
    repeat : -1,
    ease:'none'
  })
})


  return(
<div className='bg-black w-full h-screen relative'>
<HomeLogo className='text-white'/>


<div className=" absolute top-[20%] w-full h-[65%]">
<div
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className="relative h-[25%] border-t border-white text-white overflow-hidden flex justify-center items-center"
>
<Link to="/projects">
  <div className="tutu absolute top-0 left-0 w-full h-0  overflow-hidden font-[font2] text-[8vw] flex justify-center items-cente gap-5 bg-[#D3FD50] z-0">

<div className="marquee-track flex w-max items-center">
      <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden">SEE EVERYTHING  <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>

       <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden">SEE EVERYTHING  <img src="
https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
       <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden">SEE EVERYTHING  <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
      <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden">SEE EVERYTHING  <img src="
https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
     <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden">SEE EVERYTHING  <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
     <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden">SEE EVERYTHING  <img src="
https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
    
</div>
  </div>
  
    <p className="pt-[1vw] font-[font2] text-[8vw] uppercase">
      Work
    </p>
  </Link>
</div>





<div
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className="relative h-[25%] border-t border-white text-white overflow-hidden flex justify-center items-center"
>
  <Link to="/agence">

  <div className="tutu absolute top-0 left-0 w-full h-0  bg-[#D3FD50] opacity-0 overflow-hidden font-[font2] text-8xl flex justify-center items-cente z-0">
        <div className="marquee-track flex w-max items-center">
           <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden">KNOW MORE  <img src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
      <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> KNOW MORE  <img src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
           <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden">KNOW MORE  <img src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
        <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> KNOW MORE  <img src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
        <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden">KNOW MORE  <img src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
    <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> KNOW MORE  <img src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
        <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden">KNOW MORE  <img src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
        </div>
  </div>


  
    <p className="pt-[1vw] font-[font2] text-[8vw] uppercase">
      AGENCY
    </p>
  </Link>
</div>



<div
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className="relative h-[25%] border-t border-white text-white overflow-hidden flex justify-center items-center"
>
   <Link to="/contact">

  <div className="tutu absolute top-0 left-0 w-full h-0 opacity-0 overflow-hidden font-[font2] text-8xl flex justify-center items-cente bg-[#D3FD50] z-0">
<div className="marquee-track flex w-max items-center">
           <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> SEND US A FAX ^^</p>
    </div></div>
     <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> SEND US A FAX ^^</p>
    </div></div>
     <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> SEND US A FAX ^^</p>
    </div></div>
     <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> SEND US A FAX ^^</p>
    </div></div>
    <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> SEND US A FAX ^^</p>
    </div></div>
    <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> SEND US A FAX ^^</p>
    </div></div>
    <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> SEND US A FAX ^^</p>
    </div></div>
</div>
  </div>


 
    <p className="pt-[1vw] font-[font2] text-[8vw] uppercase">
      CONTACT
    </p>
  </Link>
</div>




<div
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className="relative h-[25%] border-t border-b border-white text-white overflow-hidden flex justify-center items-center"
>
<Link to="/blog">
  <div className="tutu absolute top-0 left-0 w-full h-0 opacity-0 overflow-hidden font-[font2] text-8xl flex justify-center items-cente bg-[#D3FD50] z-0">

<div className="marquee-track flex w-max items-center">
         <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> READ BLOG <img src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
       <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> READ BLOG <img src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
    
       <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> READ BLOG <img src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
       <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> READ BLOG <img src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
     <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> READ BLOG <img src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
     <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> READ BLOG <img src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
          <div className="shrink-0 flex items-center overflow-hidden"> <div className=" flex items-center shrink-0 gap-5 whitespace-nowrap"><p className=" shrink-0 pt-[1vw] leading-none whitespace-nowrap flex overflow-hidden"> READ BLOG <img src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"  className="w-[16vw] h-[12vh] mt-[0.8vw]  object-cover rounded-4xl"/></p>
    </div></div>
</div>
  </div>


  
    <p className="pt-[1vw] font-[font2] text-[8vw] uppercase">
      BLOG
    </p>
  </Link>
</div>
</div>


</div>
  )
}

export default Navbar