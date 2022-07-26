import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Col} from "react-bootstrap"
import fb from "./fb.png"
import linked from "./linked.png"
import git from "./git.png"
import twit from "./twit.jpg"


const Nav = (props) => {
  return (
    <Row className='nav'> 
    <div className='d-grid'>    
    <img className='me' onClick={props.handleHome} style={{borderRadius: "100%"}} src="https://picsum.photos/200/200" alt="me" />
    <h3>Vasileios</h3>
    <h4>Front-end developer!</h4>
    
    <button className='mt-4' onClick={props.handleAbout}>About</button>
    <button onClick={props.handleProjects}>Projects</button>
    <button onClick={props.handleContact}>Contact</button>
    </div>
    
      
      <h4 className='onsocial mt-5'>Get Social!</h4>
      <Row className='social mt-3'>
      <Col  className='face'>
      <button><img src={fb} alt="facebook" /></button>
      <p className='popuptext'>Facebook</p>
      </Col>
      <Col className='linked'>
      <button><img src={linked} alt="LinkedIn" /></button>
      <p className='popuptext'>LinkedIn</p>
      </Col>
      <Col className='git'>
      <button><img src={git} alt="GitHub" /></button>
      <p className='popuptext'>GitHub</p>
      </Col>
      <Col className='twit'>
      <button><img src={twit} alt="Twitter" /></button>
      <p className='popuptext'>Twitter</p>
      </Col>
       </Row>
    </Row>
  
  )
}

export default Nav