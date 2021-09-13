import "./App.css";
import React, { useState } from "react";
// import Adult from "./components/adult";
import { Router, Link , Route } from "react-router-dom";
// import Pesan from "./components/Pesan"
import Adults from './components/Adults'
import Child from './components/Child'
import Tiket from './components/Tiket'
import Pemesan from './components/Pemesan'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { Button, Form, Navbar, Card, Modal, Table } from 'react-bootstrap';


export default function App() {
  const [nik, setNIK] = useState("");
  const [search, setSearch] = useState(``);
  const [date, setDate] = useState("");
  let [data, setData] = useState([
    {id: '1',from : 'Pematangsiantar', to:'Medan', price : 40000, time: '20 September 2021 15:40' },
    {id: '2',from : 'Medan',to:'Pematangsiantar' , price : 40000, time: '21 September 2021 16:40'},
    {id: '3',from : 'Kisaran',to :'Medan',price : 25000, time: '22 September 2021 13:00'},
    {id: '4',from : 'Medan', to :'Kisaran', price : 25000, time: '23 September 2021 14:00'},
    {id: '5',from : 'Bengkel', to:'Pematangsiantar', price : 15000, time: '23 September 2021 16:40'},
    {id: '6',from : 'Pematangsiantar', to:'Bengkel', price : 15000, time: '23 September 2021 08:40'},
    {id: '7',from : 'Tebing', to:"Pematangsiantar", price: 25000, time: '24 September 2021 08:40' }
  ]);


  const [from, setFrom] = useState(); 
  const [to, setTo] = useState();  
  const [price, setPrice] = useState();
  const [item, setItem] = useState();
  const [num, setNumber] = useState(1);
  const [child, setChild] = useState(0);
  const [name, setName] = useState("");

  //Tampil tabel
  const [tiket, setTiket] = useState(false);
  const [hasil, setHasil] = useState([]);

  function getName(e) {
    setName(e.target.value);
  }
  const [pesan, setPesan] = useState();
  function Pesan (){
    setPesan(
    <Container>
    <Row>
      <Col>
        <Pemesan />
      </Col>
      <Col>
      {/* Tiket */}
      <Card border="secondary" style={{ width: '30rem' }}>
        <Card.Header>Total Pembayaran
          <h3>Rp 1000.000</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Col>
              <Row>
            <h5>Sabtu, 25 Desember 2021</h5>
            <h6>{num} Dewasa,  {child} Anak</h6>
              </Row>
              <Row mt="3"><h6>Asal : {from} </h6></Row>
              <Row></Row>
              <Row><h6>Tujuan : {to}</h6></Row>
            </Col>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Adults />
      </Col>
      <Col>
        <Child />
      </Col>
    </Row>
  </Container>)
  }

  function getDewasa(e){
    setNumber(e.target.value);
    // console.log(e.target.value);
  }

  function getAnak(e){
    setChild(e.target.value);
    // console.log(e.target.value);
  }
  
  function getDate(e){
    setDate(e.target.value);
    // console.log(e.target.value);
  }
  function handleSearch(e){
    e.preventDefault();
    const result = data.filter((item) => {
      return item.from === from && item.to === to;
    })
    setTiket(true);
    setHasil(result);
  }

  let history = useHistory();
  function handleOrder(){
  //  return <Route exact path="/order" component={Pesan}></Route>
  history.push('Pesan');
  }
  return (
    <>
    <Container fluid="md">
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">E-Ticketing KAI</Navbar.Brand>
        </Container>
      </Navbar>
      
<Row>
{/* Submit Form */}
<Col md={4}>
<Card className="mt-3">
  <Card.Body>
  <Form>
  
  {/* From */}
		<Form.Group className="mb-3">
			<Form.Label>Dari</Form.Label>
			<Form.Select defaultValue="Choose..." 
        onChange={(e) => setFrom(e.target.value)}
      >{data.map((item)=> (
				<option value={item.from}>{item.from}</option>))}</Form.Select>
		</Form.Group>
    
  {/* Tujuan */}
		<Form.Group className="mb-3" controlId="formGroupEmail">
			<Form.Label>Tujuan</Form.Label>
			<Form.Select defaultValue="Choose..."
      onChange={(e) => setTo(e.target.value)}
      >{data.map((item)=> (
				<option  value={item.to}> {item.to}</option>))}</Form.Select>
		</Form.Group>
    
    {/* Dewasa */}
		<Form.Group className="mb-3" controlId="formGroupEmail">
			<Form.Label>Adult</Form.Label>
			<Form.Control type="number" min="1" value={num} onChange={getDewasa} /></Form.Group>
      
    {/*Child */}
		<Form.Group className="mb-3" controlId="formGroupEmail">
			<Form.Label>Child</Form.Label>
			<Form.Control type="number" min="0" value={child} onChange={getAnak} /></Form.Group>
		<Button variant="primary mt-2" type="submit" onClick={handleSearch}>Cari</Button>
	</Form>
  </Card.Body>
</Card>
</Col>
<Col md={8}>
  <Card className="mt-3">
            <Card.Body>
              <Card.Title>Harga Tiket
              </Card.Title>
              {tiket === true ?
                (<Table striped bordered hover>
                  <thead>
                    <tr>{/*
                      <th>No</th>*/}
                      {/* <th>No</th> */}
                      <th>Asal</th>
                      <th>Tujuan</th>
                      <th>Harga</th>
                      <th>Waktu</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody className='TabelTiket'>
                  {hasil.map((item, index) =>(
                    <tr key={item.id}>
                      {/* <td>{item.id}</td> */}
                      <td>{item.from}</td>
                      <td>{item.to}</td>
                      <td>{item.price}</td>
                      <td>{item.time}</td>
                      <td>
                      {/* <Route exact path ="/Pesan" type="submit"
                      component = {Pesan}>Pesan</Route> */}
                      <Button onClick={Pesan}>Pesan</Button>
                      </td>
                    </tr>))}</tbody>
                </Table> ) : (
                    <p>Ticket is not found!</p>
                )
              }
            </Card.Body>
          </Card>
        </Col>
</Row> 
<Row>{pesan}</Row>
{/* <p>{tiket}</p> */}
</Container>
</>
);
 }