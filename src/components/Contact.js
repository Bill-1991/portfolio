import React from 'react'
import {Form, Container, Row} from "react-bootstrap"


const Contact = (props) => {

  

  return (
    <Row className='contact' id="contact">
      <Container className="contacts">
        <div className='d-flex' style={{gap: "30px"}}>
          <h6>Facebook:</h6>
          <a href="https://www.facebook.com/vasilis.altzerinis/" target="_blank" rel="noreferrer"><h6>Βασιλης Αλτζερινης</h6></a>
        </div>
        <div className='d-flex' style={{gap: "30px"}}>
          <h6>LinkedIn:</h6>
          <a href="https://www.linkedin.com/in/%CE%B2%CE%B1%CF%83%CE%B9%CE%BB%CE%B7%CF%82-%CE%B1%CE%BB%CF%84%CE%B6%CE%B5%CF%81%CE%B9%CE%BD%CE%B7%CF%82-28319024a/" target="_blank" rel="noreferrer"><h6>Βασιλης Αλτζερινης</h6></a>
        </div>
        <div className='d-flex' style={{gap: "30px"}}>
          <h6>Github:</h6>
          <a href="https://github.com/Bill-1991" target="_blank" rel="noreferrer"><h6>Bill-1991</h6></a>
        </div>
        <h3>E-mail: altzebill@gmail.com</h3>
      </Container>
      <Container className='form mt-5'>
        <Form ref={props.form} className="d-grid" onSubmit={props.sendEmail}>
          <Form.Group className='mt-3' style={{color: "#282c34"}}>
            <Form.Label>E-mail adress</Form.Label>
            <Form.Control id="email" value={props.email} name="user_email" type="email" onChange={props.handleEmailChange} placeholder="enter your e-mail" style={{backgroundColor: "#282c34", color: "white"}} />
        </Form.Group>
        <Form.Group style={{color: "#282c34"}} className='mt-3'>
            <Form.Label>FullName</Form.Label>
            <Form.Control id="name" value={props.name} name="user_name" type="name" onChange={props.handleNameChange} placeholder="Enter your Full Name" style={{backgroundColor: "#282c34", color: "white"}} />
        </Form.Group>
        <Form.Group style={{color: "#282c34"}} className='mt-4 d-grid'>
            <Form.Label>Write me here</Form.Label>
            <Form.Control value={props.text} as="textarea" type="text" name='message' onChange={props.handleTextChange} style={{backgroundColor: "#282c34", minHeight: "100px", height: "fit-content", color: "white"}} />
        </Form.Group>
        <button onClick={props.sendEmail} className='submit' type="submit" style={{backgroundColor: "black", color: "white", fontSize: "20px"}}>Submit</button>
      </Form>
      </Container>
      {props.submit === true ? 
      <div style={{justifyContent: "start", backgroundColor: "black", color: "rgb(200, 200, 50)", position: "absolute", right: 0, width: "300px", minHeight: "fit-content", display: "grid", gridTemplateRows: "50% 50%"}}>
        <div className='d-grid' style={{gridTemplateColumns: "25% 70%"}}>
          <p style={{textAlign: "center", borderRadius: "100%", backgroundColor: "green"}}><p style={{marginTop: "20%"}}>yeah</p></p>
          <p style={{textAlign: "center", alignSelf: "center"}}>Message sent!</p>
        </div>
        <div style={{textAlign: "center", border: "2px", color: "white"}}>
          <p>Thank you!!...I'll contact you as soon as possible!</p>
        </div>
      </div> 
      : 
      undefined
      }
    </Row>
  )
}

export default Contact