import React from 'react'
import Video from '../components/home/Video'
import HomeHeader from '../components/home/HomeHeader'
import HomeBottom from '../components/home/HomeBottom'
import HomePara from '../components/home/HomePara'
import HomeLogo from '../components/home/HomeLogo'
import Menu_1 from '../components/common/Menu_1.jsx';

const Home = () => {
  return (
 <>

    <div className='w-screen h-screen text-white font-[font1] m-0 p-0 '>
     
     
      <div className=' fixed'>
        <Video/>
        
      </div>
      <div>
        <Menu_1/>
      </div>
      <div className=' relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeader/>
        <HomePara/>
      <div className='mt-[2.5vw]'>
        <HomeBottom/>
      </div>
      </div>
     
    </div></>
  )
}

export default Home