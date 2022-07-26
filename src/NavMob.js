import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import navIcon from "./navIcon.png"
import fb from "./fb.png"
import linked from "./linked.png"
import git from "./git.png"
import twit from "./twit.jpg"




const NavMob = (props) => {
  
  return (
    <div className='navmob'>
          
        <div className="mobsocial">
           <button><img className='facebook' src={fb} alt="facebook" /></button>
           <button><img className='linkedin' src={linked} alt="LinkedIn" /></button>
           <button><img className='github' src={git} alt="GitHub" /></button>
           <button><img className='twitter' src={twit} alt="Twitter" /></button>
           </div>
           
           <div className='more'>
            <button onClick={props.handleMore}><img style={{width: "30px", height: "30px"}} src={navIcon} alt="navigation_icon" /></button>
           {props.more === true ? <div className='onmore' >
            <button onClick={props.handleHome}>Home</button>
            <button onClick={props.handleAbout}>About</button>
            <button onClick={props.handleProjects}>Projects</button>
            <button onClick={props.handleContact}>Contact</button>
            <button>Blog</button>
           </div>: null}
           </div>
        </div>   
  )
}

export default NavMob