import React from 'react'
import Menu from '../components/projects/Menu.jsx';
import Menu_1 from '../components/common/Menu_1.jsx';

const Agence = () => {
  return (
    <div>
      <Menu_1/>
        <Menu/>
       
      <div className='text-[20vw] font-[font2] leading-[0.9] text-center pt-[22vw]'>SEVEN7Y <br/>
            TWO</div>

<p className='text-[4.6vw] font-[font2] pr-[1vw] ml-[40%] leading-[0.99]'> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
  </p>

  <div className="w-full px-[10.7vw] pt-[10vw] pb-[8vw]">


  <div className="flex justify-between items-center mb-[12vw]">

    <p className="font-[font2] text-[1.5vw]">
      Expertise
    </p>

    <div className="font-[font2] text-[1.5vw] leading-[1.35]">
      <p>Strategy</p>
      <p>Advertising</p>
      <p>Branding</p>
      <p>Design</p>
      <p>Content</p>
    </div>

  </div>


 
  <div className="flex justify-between items-start gap-[4vw]">

    <p className="flex-1 font-[font2] text-[1.5vw] leading-[1.35]">
      Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.
    </p>

    <p className="flex-1 font-[font2] text-[1.5vw] leading-[1.35]">
      Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.
    </p>

    <p className="flex-1 font-[font2] text-[1.5vw] leading-[1.35]">
      Our Culture_ We're open to each other. Period. The team works together to create a space that makes us proud.
    </p>

  </div>

</div>
    </div>
  )
}

export default Agence
