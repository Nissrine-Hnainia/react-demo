import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Container, Col, Row} from 'react-bootstrap';
import plant from "./plant.jpg";
import './style.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container className="head-container">
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter your name here"/>
                </Form.Group> 
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Family name</Form.Label>
                  <Form.Control type="name" placeholder="Enter your name here"/>
                </Form.Group> 
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>UserName</Form.Label>
                  <Form.Control type="name" placeholder="Enter your name here"/>
                </Form.Group> 
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="name@email.com"/>
                </Form.Group> 
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Enter you number here"/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="success">Create an account</Button>
          </Form>
          <Card style={{color:"#000"}}>
            <Card.Img src={plant}/>
            <Card.Body>
              <Card.Title>
              <h2>Become a plant expert.</h2>
              </Card.Title>
              <Card.Text>
                Easy gardening tips. 
                <br/>
                Intdoor and outdoor plant designs.
                <br/>
                Learn how to maintain your personalized garden.              
              </Card.Text>
              <Button variant="secondary">Subscribe</Button>
            </Card.Body>
          </Card>
        </Container>
      </header>
      <footer>© 2020</footer>
    </div>
  );
}

export default App;
