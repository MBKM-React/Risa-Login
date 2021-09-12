import "./App.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'reactstrap';
import { Form, Card} from 'react-bootstrap';


export default function App() {
  return (
    <>
    <Container fluid="md">
	<h2>Pemesanan Tiket</h2>
	<Card border="secondary" style={{ width: '30rem' }}>
		<Card.Header>Data Pemesan</Card.Header>
		<Card.Body>
			<Card.Text>
				<Form>
					<Row>
						<Col>
							<Form.Group className="mb-3">
								<Form.Label>Nama Pemesan :</Form.Label>
								<Form.Control type="text" placeholder="Masukkan Nama" required/></Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Alamat Email</Form.Label>
								<Form.Control type="email" placeholder="Masukkan Email" required /></Form.Group>
						</Col>
						<Col>
							<Form.Group className="mb-3 ml-3 mr-3">
								<Form.Label>No HP Pemesan :</Form.Label>
								<Form.Control type="text" placeholder="+62" required/></Form.Group>
							<Form.Group className="mb-3 ml-3 mr-3">
								<Form.Label>Alamat :</Form.Label>
								<Form.Control type="text" placeholder="Masukkan Alamat" required/></Form.Group>
						</Col>
					</Row>
				</Form>
			</Card.Text>
		</Card.Body>
	</Card>
</Container>
</>
);
 }