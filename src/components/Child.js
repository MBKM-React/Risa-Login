import React, { useState } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Container, Row, Col } from 'reactstrap'; 
import { Form, Card} from 'react-bootstrap'; 


export default function App() { 
  return (
  <>
    <Container fluid="md">
      <Card border="secondary" style={{ width: '30rem' }}>
        <Card.Header>Data Penumpang Bayi</Card.Header>
        <Card.Body>
          <Card.Text>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Nama Pemesan :</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan Nama" required/></Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3 ml-3 mr-3">
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Form.Control type="date" placeholder="+62" required/>
                    </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>); }