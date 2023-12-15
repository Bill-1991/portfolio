import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap"
import second from "./assets/second.jpg"
import {useState, useRef} from "react"
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Nav from "./components/Nav"
import NavMob from "./components/NavMob"
import Contact from "./components/Contact"
import emailjs from '@emailjs/browser';


function App() { 
  const [more, setMore] = useState(false);
  const [text, setText] = useState("");
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();
  const [displayNav, setDisplayNav] = useState(true);
  const [onSkills, setOnSkills] = useState(true);
  const [onCertifications, setOnCertifications] = useState(false);
  const [onToCome, setOnToCome] = useState(false);

  const handleSkills = () => {
    setOnSkills(true)
    setOnCertifications(false)
    setOnToCome(false)
  }

  const handleCertifications = () => {
    setOnSkills(false)
    setOnCertifications(true)
    setOnToCome(false)
  }

  const handleToCome = () => {
    setOnSkills(false)
    setOnCertifications(false)
    setOnToCome(true)
  }

  const handleDisplayNav = () => {
    if (displayNav === true){
      setDisplayNav(false)
    } else{
      setDisplayNav(true)
    }
  }

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
    <HashRouter>
      <Container fluid style={{backgroundImage: `url(${second})`, position: "relative"}} className="portfolio">    
        
        <Row className='appnavmob'><NavMob more={more} handleMore={handleMore}/></Row>
        <Row>
        { displayNav === true ? <Col className='shownNav' sm={3}><Nav /></Col> : <div className="hiddenNav"></div> }         
        {more === true ? null : 
        <Routes>
          <Route exact path="/" element={<Col><Home /></Col>} />
          <Route exact path="/projects" element={<Col><Projects /></Col>} /> 
          <Route exact path="/about" element={<Col><About onSkills={onSkills} onCertifications={onCertifications} onToCome={onToCome} handleSkills={handleSkills} handleCertifications={handleCertifications} handleToCome={handleToCome} /></Col>} />
          <Route exact path="/contact" element={<Col><Contact submit={submit} text={text} name={name} email={email} form={form} sendEmail={sendEmail} handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} handleTextChange={handleTextChange}/></Col>} />

          </Routes>
         }
        { displayNav === true ?
        <div className='hidenav'>
          <button className='hide' style={{backgroundColor: "rgba(0,0,0,0)", fontSize: "50px", fontWeight: "900", border: "none"}} onClick={handleDisplayNav}>{"←"}</button>
        </div>
        : 
        <div className='dispnav'>
          <button onClick={handleDisplayNav} className='show' style={{backgroundColor: "rgba(0,0,0,0)", fontSize: "50px", fontWeight: "900", border: "none"}}>{"→"}</button>
        </div>
        }
        </Row>
    </Container>
    </HashRouter>
    );
}

export default App;
