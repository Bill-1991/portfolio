import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row} from "react-bootstrap"
import "./App.css"

const About = () => {
  return (
    
    <Row className="about">
    
    
    <Row className='intro'>
      <h1 className='welcome'>Welcome to my portfolio!!!</h1>
      <img src="https://picsum.photos/300/300" alt="me" />
      </Row>
      
      
      <Row className='mt-5'>
    
      <h3>Few things about me:</h3>
      <p>I'm Vasileios ________.I'm born and currently located in Greece!I'm a self-taught web developer pursuing my dream of entering web development,mainly on front-end for now...I love <strong>Coding</strong> and it's a big part in my life!</p>
           
      <Col sm={12} style={{height: "1px", backgroundColor:"white"}}></Col>
      <h2>What i know till of this moment:</h2>
      <h3>Html</h3>
      <h3>Css</h3>
      <h3>Sass</h3>
      <h3>Bootstrap</h3>
      <h3>Javascript</h3>
      <h3>React</h3>
      <h3>GitHub</h3>
      
      <Col className='mt-3' sm={12} style={{height: "1px", backgroundColor:"white"}}></Col>
  
      <h2>Conclusion:</h2>
      <h4>I would love for you to give me any project you have in mind
           I will try my best possible and will deliver everything you ask,be it a one page website or a larger scale project!</h4>
           
      <p className='mt-3'>Thank you for checking my portfolio.The source code of it is <strong><a href="" target="_blank">here</a></strong></p>
  </Row>
  </Row>
  )
}

export default About