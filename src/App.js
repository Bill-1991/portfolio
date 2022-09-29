import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap"
import second from "./second.jpg"
import {useState, useRef} from "react"
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Nav from "./Nav"
import NavMob from "./NavMob"
import Contact from "./Contact"
import emailjs from '@emailjs/browser';


function App() { 
  const [skip, setSkip] = useState(false)
  const [home, setHome] = useState(true)
  const [projects, setProjects] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)
  const [more, setMore] = useState(false)
  const [text, setText] = useState("")
  const [submit, setSubmit] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(true)
    setText("")
    setName("")
    setEmail("")
    setTimeout(() => {
        setSubmit(false)
    }, 2000)
    emailjs.sendForm('service_xizidug', 'template_wu4635q', form.current, 'jF29LQqfkMdY3CIam')
      .then((result) => {
          
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  const handleHome = () => {
    if (home === false) {
      setHome(true)
      setProjects(false)
      setAbout(false)
      setMore(false)
      setContact(false)
      setSkip(false)
    }
  }

  const handleProjects = () => {
    if (projects === false) {
      setProjects(true)
      setHome(false)
      setMore(false)
      setAbout(false)
      setContact(false)
      setSkip(false)
  }
}

const handleAbout = () => {
  if (about === false) {
    setAbout(true)
    setHome(false)
    setProjects(false)
    setContact(false)
    setMore(false)
    setSkip(false)
  }
}

const handleContact = () => {
  if (contact === false) {
    setContact(true)
    setAbout(false)
    setHome(false)
    setProjects(false)
    setMore(false)
    setSkip(false)
  }
}

const handleMore = () => {
  if (more === false) {
    setMore(true)
  }else {
    setMore(false)
  }
}

const handleTextChange = (e) => {
  e.preventDefault()
  setText(e.target.value)
}

const handleNameChange = (e) => {
  e.preventDefault()
  setName(e.target.value)
}

const handleEmailChange = (e) => {
  e.preventDefault()
  setEmail(e.target.value)
}

  return (
      <Container fluid style={{backgroundImage: `url(${second})`}} className="portfolio">    
        <Row>
        <NavMob more={more} handleMore={handleMore} handleHome={handleHome} handleProjects={handleProjects} handleAbout={handleAbout} handleContact={handleContact} />
        <Col sm={3}><Nav handleHome={handleHome} handleProjects={handleProjects} handleAbout={handleAbout} handleContact={handleContact} /></Col>         
        {home === true ? <Col sm={9}><Home home={home} handleProjects={handleProjects} handleContact={handleContact}/></Col>  : 
          projects === true ? <Col sm={9}><Projects /></Col> 
          : about === true ? <Col sm={9}><About skip={skip} /></Col> 
            : contact === true ? <Col sm={9}><Contact submit={submit} text={text} name={name} email={email} form={form} sendEmail={sendEmail} handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} handleTextChange={handleTextChange}/></Col> : undefined}
            </Row>         
    </Container>
    );
}

export default App;
