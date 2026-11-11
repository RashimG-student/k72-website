import React from 'react'
import { Link , Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Navbar from './pages/Navbar'
import HomeLogo from './components/home/HomeLogo'
import { useLocation } from "react-router-dom";

const App = () => {
    const location = useLocation();
  return (
    <div className>
             <HomeLogo
        className={
          location.pathname === "/"
            ? "text-white"
            : "text-black"
        }/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/agence' element = {<Agence/>}/>
        <Route path='/projects' element = {<Projects/>}/>
          <Route path='/navbar' element = {<Navbar/>}/>
           <Route path='/contact' element = {<Contact/>}/>
            <Route path='/blog' element = {<Blog/>}/>
      </Routes>
    </div>
  )
}

export default App
