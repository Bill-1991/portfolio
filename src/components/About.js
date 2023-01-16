import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Row} from "react-bootstrap"
import "../App.css"
import js from "../assets/js.png"
import html from "../assets/html.png"
import scss from "../assets/scss.png"
import css from "../assets/css.png"
import bootstrap from "../assets/bootstrap.gif"
import react from "../assets/react.webp"
import {useState} from "react"
//import { clear } from '@testing-library/user-event/dist/clear';


const About = (props) => {
  const [skills, setSkills] = useState([{src: html, alt :"html"},
  {src: css, alt: "css"},
  {src: scss, alt: "scss"},
  {src: bootstrap, alt: "bootstrap"},
  {src: js, alt: "javascript"},
  {src: react, alt: "react"}
  ])
 
  
  setTimeout(() => {
    
    let arr = skills
    let skill = skills.pop()
    arr.unshift(skill)
    setSkills([...arr])
    
  }, 1000)
  
  clearInterval()
  return (
    
    <Row className="about">
    
    
    <div className='intro'>
      <strong><h3 className='welcome'>Welcome to my portfolio!!!</h3></strong>
      <div className="intro-par">
      <img src="https://picsum.photos/300/300" alt="me" />
      <p>I'm Vasileios ________.I'm born and currently located in Greece!I'm a self-taught web developer pursuing my dream of entering web development,mainly on front-end for now...I love <strong style={{color: "white"}}>Coding</strong> and it's a big part in my life!</p>
      </div>
      </div>
      
      
      <div className="known">
      <div style={{height: "1px", backgroundColor:"white"}}></div>
      <strong><h6>What i know till of this moment:</h6></strong>
      <div className='skills'>
        {skills.map(skill => <img key={skill.alt} src={skill.src} alt={skill.alt} />)} 
      </div>
      </div>
      <div className="conclusion">
      <div sm={12} style={{height: "1px", backgroundColor:"white"}}></div>
  
      <p>I would love for you to give me any project you have in mind
           I will try my best possible and will deliver everything you ask,be it a one page website or a larger scale project!</p>
           
      <p>Thank you for checking my portfolio.The source code of it is <strong><a href="https://github.com/Bill-1991/portfolio/branches" target="_blank" rel="noreferrer"><p style={{color: "black"}}>here</p></a></strong></p>
  </div>
  </Row>
  )
}

export default About