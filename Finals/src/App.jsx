import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './Components/Header'
import Nav from './Components/Nav'
import About from './Components/About'
import Projects from './Components/Projects'
import Experince from './Components/Experince'
import Footer from './Components/Footer'
import Section from './Components/Section'
import Contact from './Components/Contect'






function App() {
 

  return (
    <> 
       <Header/>
       <Nav/>
       <About/>
        <Experince/>
       <Projects/>
       <Contact/>
       <Footer/>
       <Section/>
   
   
      
       
   
   
      
    </>
  )
}

export default App
