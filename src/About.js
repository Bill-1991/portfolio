import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row} from "react-bootstrap"
import "./App.css"
import js from "./js.png"
import html from "./html.png"
import scss from "./scss.png"
import css from "./css.png"
import bootstrap from "./bootstrap.gif"
import react from "./react.webp"
import {useState} from "react"
import { clear } from '@testing-library/user-event/dist/clear';


const About = (props) => {
  const [skills, setSkills] = useState([{src: html, alt :"html"},
  {src: css, alt: "css"},
  {src: scss, alt: "scss"},
  {src: bootstrap, alt: "bootstrap"},
  {src: js, alt: "javascript"},
  {src: react, alt: "react"}
  ])
 
  if(props.skip === false){
  setTimeout(() => {
    
    let arr = skills
    let skill = skills.pop()
    arr.unshift(skill)
    setSkills([...arr])
    
  }, 1000)
  }
  clearInterval()
  return (
    
    <Row className="about">
    
    
    <Row className='intro'>
      <h1 className='welcome'>Welcome to my portfolio!!!</h1>
      <img src="https://picsum.photos/300/300" alt="me" />
      </Row>
      
      
      <Row className='mt-5'>

      <p>I'm Vasileios ________.I'm born and currently located in Greece!I'm a self-taught web developer pursuing my dream of entering web development,mainly on front-end for now...I love <strong>Coding</strong> and it's a big part in my life!</p>
           
      <Col sm={12} style={{height: "1px", backgroundColor:"white"}}></Col>
      <h2>What i know till of this moment:</h2>
      <Row className='skills'>
        {skills.map(skill => <img style={{width: "16.6%"}} key={skill.alt} src={skill.src} alt={skill.alt} />)} 
      </Row>
      
      <Col className='mt-3' sm={12} style={{height: "1px", backgroundColor:"white"}}></Col>
  
      <h4 className='mt-2'>I would love for you to give me any project you have in mind
           I will try my best possible and will deliver everything you ask,be it a one page website or a larger scale project!</h4>
           
      <p className='mt-3'>Thank you for checking my portfolio.The source code of it is <strong><a href="" target="_blank">here</a></strong></p>
  </Row>
  </Row>
  )
}

export default About