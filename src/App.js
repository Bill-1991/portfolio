import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap"
import second from "./second.jpg"
import {useState} from "react"
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Nav from "./Nav"
import NavMob from "./NavMob"
import Contact from "./Contact"

function App() {
 
  
  
  const [home, setHome] = useState(true)
  const [projects, setProjects] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)
  const [more, setMore] = useState(false)
  const [text, setText] = useState("")
  const [submit, setSubmit] = useState(false)

  const handleHome = () => {
    if (home === false) {
      setHome(true)
      setProjects(false)
      setAbout(false)
      setMore(false)
      setContact(false)
    }
  }

  const handleProjects = () => {
    if (projects === false) {
      setProjects(true)
      setHome(false)
      setMore(false)
      setAbout(false)
      setContact(false)
  }
}

const handleAbout = () => {
  if (about === false) {
    setAbout(true)
    setHome(false)
    setProjects(false)
    setContact(false)
    setMore(false)
  }
}

const handleContact = () => {
  if (contact === false) {
    setContact(true)
    setAbout(false)
    setHome(false)
    setProjects(false)
    setMore(false)
  }
}

const handleMore = () => {
  if (more === false) {
    setMore(true)
  }else {
    setMore(false)
  }
}

const handleChange = (e) => {
  e.preventDefault() 
  setText(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  setText("")
  setSubmit(true)
  setTimeout(() => setSubmit(false), 2000)
  clearTimeout()
}

  return (
    <Container fluid style={{backgroundImage: `url(${second})`}} className="portfolio">    
        <Row>
        <NavMob more={more} handleMore={handleMore} handleHome={handleHome} handleProjects={handleProjects} handleAbout={handleAbout} handleContact={handleContact} />
        <Col sm={3}><Nav handleHome={handleHome} handleProjects={handleProjects} handleAbout={handleAbout} handleContact={handleContact} /></Col>         
        {home === true ? <Col sm={9}><Home home={home} handleProjects={handleProjects} handleContact={handleContact}/></Col>  : 
          projects === true ? <Col sm={9}><Projects /></Col> 
          : about === true ? <Col sm={9}><About /></Col> 
            : contact === true ? <Col sm={9}><Contact submit={submit} text={text} handleChange={handleChange} handleSubmit={handleSubmit} /></Col> : undefined}
            </Row>         
    </Container>
  
    
    );
}

export default App;
