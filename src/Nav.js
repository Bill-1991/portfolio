import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Col, Navbar} from "react-bootstrap"
import fb from "./fb.png"
import linked from "./linked.png"
import git from "./git.png"
import { Link } from "react-router-dom"

const Nav = (props) => {
  return (
    <Navbar className="bignav" style={{height: "100vh"}} sticky="top">
      <Row className="nav">
    <div className='d-grid'>    
    <Link to="/"><img className='me' style={{borderRadius: "100%"}} src="https://picsum.photos/200/200" alt="me" /></Link>
    <h3>Vasileios Al</h3>
    <h4>Front-end developer!</h4>
    
    <Link to="/about"><button className='mt-4'>About</button></Link>
    <Link to="/projects"><button>Projects</button></Link>
    <Link to="/Contact"><button>Contact</button></Link>
    </div>
    
      
      <h4 className='onsocial mt-5'>Get Social!</h4>
      <Row className='social mt-3'>
      <Col  className='face'>
      <a href="https://www.facebook.com/vasilis.altzerinis" target="_blank" rel="noreferrer"><button><img src={fb} alt="facebook" /></button></a>
      <p className='popuptext'>Facebook</p>
      </Col>
      <Col className='linked'>
      <a href="https://www.linkedin.com/in/%CE%B2%CE%B1%CF%83%CE%B9%CE%BB%CE%B7%CF%82-%CE%B1%CE%BB%CF%84%CE%B6%CE%B5%CF%81%CE%B9%CE%BD%CE%B7%CF%82-28319024a/" target="_blank" rel="noreferrer"><button><img src={linked} alt="LinkedIn" /></button></a>
      <p className='popuptext'>LinkedIn</p>
      </Col>
      <Col className='git'>
      <a href="https://github.com/Bill-1991" target="_blank" rel="noreferrer"><button><img src={git} alt="GitHub" /></button></a>
      <p className='popuptext'>GitHub</p>
      </Col>
       </Row>
       </Row>
    </Navbar>
  )
}

export default Nav