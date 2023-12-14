import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row, Card, Button} from "react-bootstrap"
import "../App.css"
import vid1 from "../assets/commercevid1.mp4"
//import { Spring } from "react-spring/renderprops"


const Projects = () => {

  const [done, setDone] = useState([{id: "0", name: "E-commerce", vid: vid1, desc: "Responsive e-commerce site for anime", delay: 500, liveSite: "https://splendid-granita-8f1e4f.netlify.app/", source: "https://github.com/Bill-1991/bill-commerce/tree/master", skills: ["Html", "Css", "Bootstrap", "Javascript", "React", "Node", "MySQL", "React-Router", "Anime API"], flip: false},
                {id: "1", name: "Insurances site", img: "https://picsum.photos/200/300", desc: "A site for a company called Worthinsurance. Descriptions and packets of every insurance the company offers", delay: 1000, liveSite: "https://worthinsurance.netlify.app", source: "https://github.com/Bill-1991/insurances-site/tree/main/src", skills: ["Html", "Css", "Javscript", "React"], flip: false},
                {id: "2", name: "Multistep form", img: "https://picsum.photos/200/300", desc: "Multistep Form. (Not fully constructed)", delay: 1500, liveSite: "https://warm-sfogliatella-1b0cc2.netlify.app/", source: "https://github.com/Bill-1991/multistep-form-frontmentor/tree/master/src", skills: ["Html", "Css", "Javscript"], flip: false},
                {id: "3", name: "Tic Tac Toe", img: "https://picsum.photos/200/300", desc: "Tic Tac Toe minigame. (Not fully constructed. There's no live site on this only the source code. VS mode only does random moves)", delay: 1500, liveSite: "", source: "https://github.com/Bill-1991/Tic-tac-toe", skills: ["Html", "Css", "Javscript"], flip: false}])  
  
  const handleFlipBack = (id) => {
    let arr = [...done]
    let project = arr.filter(project => project.id === id)
    project[0].flip = true
    setDone([...arr])
  }

  const handleFlipFront = (id) => {
    let arr = [...done]
    let project = arr.filter(project => project.id === id)
    project[0].flip = false
    setDone([...arr])
  }

  return (
    <Row className='projects' style={{position: "relative"}}>{done.map(project => <Col xs={12} sm={6} md={6} lg={4} key={project.id}>
      <Card className={project.flip === false ? "card" : "cardflip"}>
        { project.flip === false ?
        <div className="card-front">
          <h5 className='title'>{project.name}</h5>
        <video width="100%" controls>
          <source src={project.vid} type="video/mp4"/>
        </video>
        <div className="outer-flip">
        <div className='inner-flip'>
        <button className="flip" onClick={() => handleFlipBack(project.id)}>Push</button>
        </div>
        </div>
        </div> :
        <div className="card-back">
          <div style={{color: "white"}}>
           <p>{project.desc}</p>
           <div className="skills" style={{color: "black", width: "100%"}}>
            <Row style={{width: "90%", position: "relative", left: "5%"}}>{project.skills.map(skill => <Col key={skill}><p>{skill}</p></Col>)}</Row>
           </div>
          </div>
          
          <div className='d-grid' style={{gridTemplateColumns: "36% 60%", gap: "4%", justifyContent: "center"}}>
            <a href={project.liveSite} target="_blank" rel="noreferrer"><Button className='w-100'>Live</Button></a>
            <a href={project.source} target="_blank" rel="noreferrer"><Button className="w-100">Source Code</Button></a>
          </div>
          <div className='outer-flip'>
          <div className="inner-flip">
          <button className="flip" onClick={() => handleFlipFront(project.id)}>Push</button>
          </div>
          </div>
        </div> }
        </Card>
        </Col>)}
      </Row>
  )
}

export default Projects