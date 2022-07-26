import React from 'react'
import {Form, Container, Row} from "react-bootstrap"


const Contact = (props) => {
  return (
    
    <Row className='contact'>
        <Container className="contacts">
      <h3>Facebook:    ________</h3>
      <h3>Twitter:     ________</h3>
      <h3>Github:      ________</h3>
      <h3>E-mail:      ________</h3>
     
</Container>
    <Container fluid className='form mt-5'>
    {props.submit === true ? <h2 className='thank mt-5'>Thank you!!...I'll contact you as soon as possible!</h2> : undefined}
    <Form>
        <Form.Group className='mt-3'>
            <Form.Label>E-mail adress</Form.Label>
            <Form.Control type="e-mail" placeholder="enter your e-mail" />
        </Form.Group>
        <Form.Group className='mt-3'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter your phone number" />
        </Form.Group>
        <Form.Group className='mt-4 d-grid'>
            <Form.Label>Write me here</Form.Label>
            <textarea value={props.text} onChange={props.handleChange} style={{minHeight: "100px", height: "fit-content"}} />
        </Form.Group>
        <button onClick={props.handleSubmit}>Submit</button>
    </Form>
    </Container>
    </Row>    
  )
}

export default Contact