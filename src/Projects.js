import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row, Card} from "react-bootstrap"
import "./App.css"
import { Spring } from "react-spring/renderprops"


const Projects = () => {
  const height = window.innerHeight
  const done = [{id: "0", name: "E-commerce", img: "https://picsum.photos/200/300", desc: "Fully responsive e-commerce site for ordering through net on a small local coffee & snack shop", delay: 500, liveSite: "https://gorgeous-quokka-8403d8.netlify.app/"},
                {id: "1", name: "Baby names picker", img: "https://picsum.photos/200/300", desc: "Pick a name for your newborn baby.Every name's origin and meaning is given on this fully responsive website", delay: 1000},
                {id: "2", name: "25 + 5 clock", img: "https://picsum.photos/200/300", desc: "An appliction mostly for arranging your studying in the best way possible", delay: 1500}]  

  console.log(height)

  return (
    <Row className='projects'>{done.map(project => <Col sm={12} md={12} lg={12}><Spring key={project.id} from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: project.delay, duration: 1000 }}>
        {props => <Card style={props} className={project.id}>
          <Row><Col sm={12} md={6} lg={5}><Card.Img src={project.img} alt={project.name} /></Col>
          <Col sm={12} md={6} lg={7}><Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.desc}</Card.Text>
          <button><a href={project.liveSite} target="_blank" rel="noreferrer" className='livesite'>Live_Site</a></button>
          <button><a href={project.source} target="_blank" rel="noreferrer" className='source'>Source Code</a></button>
          </Card.Body></Col></Row>
          </Card>}
      </Spring></Col>)}
      </Row>
  )
}

export default Projects