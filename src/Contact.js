import React, {useEffect} from 'react'
import {Form, Container, Row} from "react-bootstrap"


const Contact = (props) => {

  

  return (
    
    <Row className='contact' id="contact" style={{position: "relative"}}>
        <Container className="contacts">
      <h3>Facebook:    ________</h3>
      <h3>Twitter:     ________</h3>
      <h3>Github:      ________</h3>
      <h3>E-mail:      ________</h3>
     
</Container>
    <Container className='form mt-5'>
   
    <Form ref={props.form} onSubmit={props.sendEmail}>
        <Form.Group className='mt-3'>
            <Form.Label>E-mail adress</Form.Label>
            <Form.Control id="email" value={props.email} name="user_email" type="email" onChange={props.handleEmailChange} placeholder="enter your e-mail" />
        </Form.Group>
        <Form.Group className='mt-3'>
            <Form.Label>FullName</Form.Label>
            <Form.Control id="name" value={props.name} name="user_name" type="name" onChange={props.handleNameChange} placeholder="Enter your Full Name" />
        </Form.Group>
        <Form.Group className='mt-4 d-grid'>
            <Form.Label>Write me here</Form.Label>
            <Form.Control value={props.text} as="textarea" type="text" name='message' onChange={props.handleTextChange} style={{minHeight: "100px", height: "fit-content"}} />
        </Form.Group>
        <button onClick={props.sendEmail} className='submit' type="submit" style={{backgroundColor: "black", color: "white", fontSize: "20px"}}>Submit</button>
    </Form>
    </Container>
    {props.submit === true ? <div style={{justifyContent: "start", backgroundColor: "black", color: "rgb(200, 200, 50)", position: "absolute", right: 0, width: "300px", minHeight: "fit-content", display: "grid", gridTemplateRows: "50% 50%"}}>
        <div className='d-grid' style={{gridTemplateColumns: "25% 70%"}}>
          <p style={{textAlign: "center", borderRadius: "100%", backgroundColor: "green"}}><p style={{marginTop: "20%"}}>yeah</p></p>
          <p style={{textAlign: "center", alignSelf: "center"}}>Message sent!</p>
        </div>
        <div style={{textAlign: "center", border: "2px", color: "white"}}><p>Thank you!!...I'll contact you as soon as possible!</p>
            </div>
            </div> : undefined}
    </Row>
  )
}

export default Contact