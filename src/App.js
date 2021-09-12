import "./App.css";
import React, { useState } from "react";
// import Adult from "./components/adult";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'reactstrap';
import { Button, Form, Navbar, Card, Table, InputGroup, FormControl, Modal} from 'react-bootstrap';


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

  // function getFrom(e){
  //   setFrom(e.target.value);
  //   console.log(e.target.value);
  // }

  // function getTo(e){
  //   setData(e.target.value);
  //   console.log(e.target.value);
  // }

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
  const handleOrder = () => {
    
  }

  function handleSearch(e){
    e.preventDefault();
    const result = data.filter((item) => {
      return item.from === from && item.to === to;
    })
    setTiket(true);
    setHasil(result);

    // console.log(result);
    // if(from === item.from ){
    //  return <Table />
    // }else{
    //   return <Modal.Dialog>
    //               <Modal.Header closeButton>
    //                 <Modal.Title>Warning!</Modal.Title>
    //               </Modal.Header>
    //               <Modal.Body>
    //                 <p>Ticket is not found!</p>
    //               </Modal.Body>
    //               <Modal.Footer>
    //                 <Button variant="secondary">Close</Button>
    //               </Modal.Footer>
    //             </Modal.Dialog>
    // }
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
      
    {/* Kalender */}
		<Form.Group className="mb-3">
			<Form.Label>Tanggal Keberangkatan</Form.Label>
			<Form.Control type="date" onChange={getDate}></Form.Control>
		</Form.Group>

    {/* Nama Pemesan */}
		{/* <Form.Group className="mb-3" controlId="formGroupEmail">
			<Form.Label>Nama Pemesan</Form.Label>
			<Form.Control type="text" value={name} onChange={getName} /></Form.Group> */}

		<Button variant="primary mt-2" type="submit" onClick={handleSearch}>Cari</Button>
	</Form>
</Col>
<Col md={8}>
  <Card>{/*
            <Card.Img variant="top" src="https://picsum.photos/200/300" />*/}
            <Card.Body>
              <Card.Title>Harga Tiket
              </Card.Title>
              <Card>
              {tiket === true ?
                (<Table striped bordered hover>
                  <thead>
                    <tr>{/*
                      <th>No</th>*/}
                      <th>No</th>
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
                      <td>{item.id}</td>
                      <td>{item.from}</td>
                      <td>{item.to}</td>
                      <td>{item.price}</td>
                      <td>{item.time}</td>
                      <td><Button onClick={handleOrder}>Pesan</Button></td>
                    </tr>))}</tbody>
                </Table> ) : (
                  <Modal.Dialog>
                  <Modal.Header closeButton>
                    <Modal.Title>Warning!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Ticket is not found!</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                  </Modal.Footer>
                </Modal.Dialog>
                )
              }
              </Card>
            </Card.Body>
          </Card>
        </Col>
</Row>

  
{/* <p>{tiket}</p> */}
</Container>
</>
);
 }