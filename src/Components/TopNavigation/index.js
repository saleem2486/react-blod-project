import React from 'react'
import '../../App.css'
import { NavLink } from 'react-router-dom'


function TopNavigation() {

  
  return (
    <>
            <div className="flexProperty">
            <div className="navTag">
            <NavLink to={'/'} style={{textDecoration:"none"}}> <div  className="home" >Home</div></NavLink>
            <NavLink to={'/Bollywood'} style={{textDecoration:"none"}}> <div className="home" >Bollywood</div></NavLink>
            <NavLink to={'/Technology'} style={{textDecoration:"none"}}><div className="home" >Technology</div></NavLink>
            <NavLink to={'/Hollywood'} style={{textDecoration:"none"}}> <div className="home" >Hollywood</div></NavLink>
            <NavLink to={'/Fitness'} style={{textDecoration:"none"}}><div className="home" >Fitness</div></NavLink>
               <NavLink to={'/Food'} style={{textDecoration:"none"}}> <div className="home" >Food</div></NavLink>
                </div>
            </div>

           <div className="flexProperty">  <hr className='firstHr'/> </div> 
    </>
  )
}

export default TopNavigation
