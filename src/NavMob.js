import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import navIcon from "./navIcon.png"
import fb from "./fb.png"
import linked from "./linked.png"
import git from "./git.png"
import {Spring} from "react-spring/renderprops"
import {Navbar} from "react-bootstrap"




const NavMob = (props) => {
  
  return (
    <Navbar sticky="top" className='navmob'>
          
        <div className="mobsocial d-flex" style={{gap: "15px"}}>
          <h5 style={{fontFamily: "italic", backgroundColor: "rgba(255, 255, 55, 1)", color: "rgba(15, 20, 255, 1)", borderRadius: "30%"}}>Bill Altze</h5>
          <a href="https://www.facebook.com/vasilis.altzerinis/" target="_blank" rel="noreferrer"><img className='facebook' src={fb} alt="facebook" /></a>
          <a href="https://www.linkedin.com/in/%CE%B2%CE%B1%CF%83%CE%B9%CE%BB%CE%B7%CF%82-%CE%B1%CE%BB%CF%84%CE%B6%CE%B5%CF%81%CE%B9%CE%BD%CE%B7%CF%82-28319024a/" target="_blank" rel="noreferrer"><img className='linkedin' src={linked} alt="LinkedIn" /></a>
          <a href="https://github.com/Bill-1991" target="_blank" rel="noreferrer"><img className='github' src={git} alt="GitHub" /></a>
           </div>
           
           <div className='more'>
            <button onClick={props.handleMore}><img style={{width: "30px", height: "30px"}} src={navIcon} alt="navigation_icon" /></button>
           {props.more === true ? <Spring from={{height: 0}} to={{height: 150}} config={{duration: 300}}>{prop => <div style={prop} className='onmore' >
           <Spring from={{opacity: 0}} to={{opacity: 1}} config={{duration: 1000}}>{proper => <button style={proper} onClick={props.handleHome}>Home</button>}</Spring>
           <Spring from={{opacity: 0}} to={{opacity: 1}} config={{duration: 1050}}>{proper => <button style={proper} onClick={props.handleAbout}>About</button>}</Spring>
           <Spring from={{opacity: 0}} to={{opacity: 1}} config={{duration: 1100}}>{proper => <button style={proper} onClick={props.handleProjects}>Projects</button>}</Spring>
           <Spring from={{opacity: 0}} to={{opacity: 1}} config={{duration: 1150}}>{proper =><button style={proper} onClick={props.handleContact}>Contact</button>}</Spring>
           <Spring from={{opacity: 0}} to={{opacity: 1}} config={{duration: 1200}}>{proper => <button style={proper} >Blog</button>}</Spring>
           </div>}</Spring>: <Spring from={{height: 150}} to={{height: 0}} config={{duration: 300}}>{props => <div style={props}></div>}</Spring>}
           </div>
        </Navbar>   
  )
}

export default NavMob