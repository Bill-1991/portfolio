import React, { useState, useEffect } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import fb from "../assets/fb.png";
import linked from "../assets/linked.png";
import git from "../assets/git.png";
//import {Spring} from "react-spring/renderprops";
import {Container, Row} from "react-bootstrap";
import { Link } from "react-router-dom";



const NavMob = (props) => {
  const navStyle = props.more === false ? {
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(115,121,9,1) 35%, rgba(0,212,255,1) 100%)",
    gridTemplateRows: "63vh 30vh",
    height: "0",
    transition: "height 0.4s ease-in-out"
  } : {
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(115,121,9,1) 35%, rgba(0,212,255,1) 100%)",
    gridTemplateRows: "63vh 30vh", 
    height: "100%",
    transition: "height 0.2s ease-in-out",
  }

  const navdots = props.more === false ? {
    display: "flex",
    gap: "5px",
    transform: "rotate(0)",
    transition: "transform 0.4s ease-in-out"
  } : {
    display: "flex",
    gap: "5px",
    transform: "rotate(270deg)",
    transition: "transform 0.2s ease-in-out",
  }
  
  let [quote, setQuote] = useState([]);
  const random = Math.floor(Math.random() * 1643)

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => setQuote(data))

  },[])

  return (
    <Container fluid className="navmob"  style={{height: props.more === true ? "100vh" : "7vh", gridTemplateRows: props.more === true ? "7% 93%" : undefined}}> 
        <Row className="mobsocial" style={{display: "grid", gridTemplateColumns: "75% 25%", height: "7vh"}}>
          <div style={{width: "100%", display: "flex", gap: "5px", position: "relative", top: "5px", height: "5vh"}}>
          <h5 className="name">Bill Altze</h5>
          <a href="https://www.facebook.com/vasilis.altzerinis/" target="_blank" rel="noreferrer"><img className='facebook' src={fb} alt="facebook" /></a>
          <a href="https://www.linkedin.com/in/%CE%B2%CE%B1%CF%83%CE%B9%CE%BB%CE%B7%CF%82-%CE%B1%CE%BB%CF%84%CE%B6%CE%B5%CF%81%CE%B9%CE%BD%CE%B7%CF%82-28319024a/" target="_blank" rel="noreferrer"><img className='linkedin' src={linked} alt="LinkedIn" /></a>
          <a href="https://github.com/Bill-1991" target="_blank" rel="noreferrer"><img className='github' src={git} alt="GitHub" /></a>
          </div>
          <div style={{justifySelf: "end"}}>
          <button className="onsocial" style={{position: "relative"}} onClick={props.handleMore}><div className="dots" style={navdots}><h3 className="first-dot">.</h3><h3 className="sec-dot">.</h3><h3 className="third-dot">.</h3></div></button>
           </div>
           </Row>
          <Row>
          <Container fluid className="premore d-grid" style={navStyle}>
           {props.more === true ?           
           <div className='onmore'>
           <Link to="/"><button onClick={props.handleMore} ><strong>Home</strong></button></Link>
           <Link to="/about"><button onClick={props.handleMore} ><strong>About</strong></button></Link>
           <Link to="/projects"><button onClick={props.handleMore} ><strong>Projects</strong></button></Link>
           <Link to="/contact"><button onClick={props.handleMore} ><strong>Contact</strong></button></Link>
           <Link to="/blog"><button onClick={props.handleMore} ><strong>Blog</strong></button></Link>
           </div>
           
            : <div className="offmore"></div>
}
          
          {props.more === true ? <div className="quotes">
            <strong><h3>{quote[random].text}</h3></strong>
           <strong><h4>{quote[random].author}</h4></strong>
           </div> : undefined} 
           </Container>
           </Row>
        </Container>   
  )
}

export default NavMob