import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row, Card, Button} from "react-bootstrap"
import "./App.css"
//import { Spring } from "react-spring/renderprops"


const Projects = () => {
  const done = [{id: "0", name: "E-commerce", img: "https://picsum.photos/200/300", desc: "Fully responsive e-commerce site for ordering through net on a small local coffee & snack shop", delay: 500, liveSite: "https://gorgeous-quokka-8403d8.netlify.app/"},
                {id: "1", name: "Baby names picker", img: "https://picsum.photos/200/300", desc: "Pick a name for your newborn baby.Every name's origin and meaning is given on this fully responsive website", delay: 1000},
                {id: "2", name: "25 + 5 clock", img: "https://picsum.photos/200/300", desc: "An appliction mostly for arranging your studying in the best way possible", delay: 1500}]  

  return (
    <Row className='projects'>{done.map(project => <Col xs={12} sm={6} md={6} lg={4}>
      <Card className="card">
        <div className="card-front">
        <Card.Img src={project.img} />
        <Card.Title className='title'>{project.name}</Card.Title>
        </div>
        <div className='card-back'>
          <Card.Title>{project.desc}</Card.Title>
          <Button>Live</Button>
          <Button>Source Code</Button>
        </div>
        </Card>
        </Col>)}
      </Row>
  )
}

export default Projects