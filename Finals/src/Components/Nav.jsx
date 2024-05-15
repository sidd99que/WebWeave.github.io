import React, { useState } from 'react'
import { FaHome, FaUser, FaBookOpen } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

function Nav() {
 
   const [ActiveNavin , setActiveNavin] =  useState('#')
   
  return (
      <nav className='nav'>
        <a href="#" className={ActiveNavin === '#' ? 'Active' : ''}><FaHome/></a>
        <a href="#About" onClick={() => setActiveNavin('#About')} className={ActiveNavin === '#About' ? 'Active' : ''}><FaUser/></a>
        <a href="#Experince" onClick={() => setActiveNavin('#Experince')} className={ActiveNavin === '#Experince' ? 'Active' : ''}><FaBookOpen/></a>
        <a href="#Projects" onClick={() => setActiveNavin('#Projects')} className={ActiveNavin === '#Projects' ? 'Active' : ''}><MdOutlineMiscellaneousServices/></a>
        <a href="#Contact" onClick={() => setActiveNavin('#Contact')} className={ActiveNavin === '#Contact' ? 'Active' : ''}><IoMdContact/></a>

      </nav>
  )
}

export default Nav
