import React, { useState } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Container, Row, Col } from 'reactstrap'; 
import { Form, Card} from 'react-bootstrap'; 
export default function App() { 
  return (
  <>
    <Container fluid="md">
      <Card border="secondary" style={{ width: '30rem' }}>
        <Card.Header>Total Pembayaran
          <h3>Rp 1000.000</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Col>
              <Row>
            <h5>    Sabtu, 25 Desember 2021</h5>
            <h6>1 Dewasa, 1 Anak</h6>
              </Row>
              <Row mt="3"><h6>Asal : </h6></Row>
              <Row></Row>
              <Row><h6>Tujuan :</h6></Row>
            </Col>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>); }