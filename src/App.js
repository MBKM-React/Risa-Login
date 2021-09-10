// // import './App.css';
// // import { ReactDOM } from 'react';
// import React from "react";
// // import Mhs from "./components/mahasiswa";
// // import Button from './atom/button'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import Mhs from "./components/mahasiswa";
// import Prof from "./components/prof";


// function LoginMhs(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login As Mahasiswa
//     </button>
//   );
// }

// function LoginProf(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login As Professional
//     </button>
//   );
// }

// // function LoginForm(){
    
// // }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.prof = this.prof.bind(this);
//     this.stud = this.stud.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   prof() {
//     this.setState({isLoggedIn: true});
//   }

//   stud() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     if (isLoggedIn) {
//       button = <LoginProf onClick={this.stud} />;
//     } else {
//       button = <LoginMhs onClick={this.prof} />;
//     }

//     return (
//       <div>
//         <Login isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function Mahasiswa(props) {
//   return <Mhs></Mhs>
// }

// function Professional(props) {
//   return <Prof></Prof>
// }

// function Login(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <Mahasiswa />;
//   }
//   return <Professional />;
// }

// export default LoginControl;

import "./App.css";
//Import calendar
// import { Panel, PanelGroup } from 'rsuite';
import React, { useState } from "react";
import Adult from "./components/adult";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Input } from 'reactstrap';
import { Button, Form, Navbar, Card, Table, InputGroup, FormControl} from 'react-bootstrap';


export default function App() {
  const [nik, setNIK] = useState("");
  const [search, setSearch] = useState(``);
  // const [rute, setRute] = useState("");
  const [date, setDate] = useState("");
  let [data, setData] = useState([
    {id: '1', from : 'Pematangsiantar', to:'Medan', price : 40000, time: '20 September 2021 15:40', aksi : 'Pesan' },
    {id: '2', from : 'Medan',to:'Pematangsiantar' , price : 40000, time: '21 September 2021 16:40', aksi :'Pesan'},
    {id: '3',from : 'Kisaran',to :'Medan',price : 25000, time: '22 September 2021 13:00', aksi :'Pesan'},
    {id: '4',from : 'Medan', to :'Kisaran', price : 25000, time: '23 September 2021 14:00', aksi :'Pesan'},
    {id: '5',from : 'Bengkel', to:'Pematangsiantar', price : 15000, time: '23 September 2021 16:40', aksi :'Pesan'},
    {id: '6',from: 'Pematangsiantar', to:'Bengkel', price : 15000, time: '23 September 2021 08:40', aksi :'Pesan'}
  ]);

  const [num, setNumber] = useState(1);
  const [child, setChild] = useState(0);
  // useEffect(() => {
  //   document.title="Sistem" + name
  //   console.log("update")
  //   return () => {
  //     setNumber();
  //   }
  // }, [])
  const [name, setName] = useState("");
  const [tiket, setTiket] = useState("");
  // const handleClick = () => {
  //   console.log("123");
  //   if (
  //     kota === ""||
  //     name === "" ||
  //     date === "" ||
  //     num === "" ||
  //     child  === ""
  //   ) {
  //     alert("Enter all the  fields");
  //   } else if(kota === "") {
  //     alert("Fill the Field!");
  //     } else if(name === "" ){
  //     alert("Fill the Field!");
  //   }  
  // };
  // useEffect(() => {
  //   if (date.value) {
  //     setDatetime(date.value.toISOString());
  //   }
  // }, [date]);
  
  function getName(e) {
    setName(e.target.value);
  }
  // function getNIK(e) {
  //   setNIK(e.target.value);
  // }

  function getFrom(from){
  console.log (from)
  }

  function getTo(to){
    setData(to.target.value);
  }

  function getDewasa(e){
    setNumber(e.target.value);
  }

  function getAnak(e){
    setChild(e.target.value);
  }

  
  function getDate(e){
    setDate(e.target.value);
  }

  function handlePesan(e){
    e.preventDefault();
    <div>
    <Form.Group className="mb-3" controlId="formGroupEmail">
			<Form.Label>Nama Pemesan</Form.Label>
			<Form.Control type="text" value={name} onChange={getName} />
      </Form.Group>
    </div>
  }


  const getUnique = (arr, comp) => {
  const unique = arr
     //store the comparison values in array
     .map(e => e[comp])

     // store the keys of the unique objects
     .map((e, i, final) => final.indexOf(e) === i && i)

     // eliminate the dead keys & store unique objects
     .filter(e => arr[e])

     .map(e => arr[e]);

   return unique;

  };
  const fromUnique = getUnique(data, "from");


  function formTicket(e){ 
    e.preventDefault(); 
    setTiket(
    // <div>
    //   <Card body>
    //     <h3>Tiket Pemesanan</h3>
    //     <h6>Nama Pemesan : {name}</h6>
    //     <h6>Tiket :<b>{num}</b> dewasa dan<b> {child}</b> anak </h6>
    //     <h6>Pada: {date}</h6>
    //     <h6>Dari : {data.from} ke {data.to} </h6>
    //     <h6>Total : {data.price*{num}} </h6>
    //   </Card>
    // </div>
<Card>
	<Card.Body>
		<Card.Title>Harga Tiket {/*
			<InputGroup>
				<FormControl type="text" placeholder="Search" onChange={handleSearch} value={search} />
			</InputGroup>*/}</Card.Title>
		<Card>
			<Table striped bordered hover>
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
				<tbody>{data.map((item, index) => (
					<tr key={index}>
						<td>{item.id}</td>
						<td>{item.from}</td>
						<td>{item.to}</td>
						<td>{item.price}</td>
						<td>{item.time}</td>
						<td>
							<Button onClick={handlePesan}>Pesan</Button>
						</td>
					</tr>))}</tbody>
			</Table>
		</Card>
	</Card.Body>
</Card>)}
  function handleSearch(e){
    setSearch(e.target.value);
  };

  if(search.length > 0){
    data = data.from.filter((i) =>{
      return i.from.toLowerCase().match(search);
    })
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
<Col>
	<Form onSubmit={formTicket}>
  
  {/* From */}
		<Form.Group className="mb-3">
			<Form.Label>Dari</Form.Label>
			<Form.Select defaultValue="Choose..." 
      onSelect={getFrom}>{data.map((item)=> (
				<option key={item.id} value={item.from}>{item.from}</option>))}</Form.Select>
		</Form.Group>
    
  {/* Tujuan */}
		<Form.Group className="mb-3" controlId="formGroupEmail">
			<Form.Label>Tujuan</Form.Label>
			<Form.Select defaultValue="Choose..." onSelect={getTo} value={data.to}>{fromUnique.map((item)=> (
				<option key={item.id} value={item.to}>{item.to}</option>))}</Form.Select>
		</Form.Group>
    
  
  {/* Stasiun */} {/*
		<Form.Group className="mb-3" controlId="formGridState">
			<Form.Label>Rute</Form.Label>
			<Form.Select defaultValue="Choose...">{kota.map((option) => (
				<option>{option.kota}</option>))}</Form.Select>
		</Form.Group>*/}
    
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
			<Form.Control type="text" value={name} onChange={getName} />
      </Form.Group> */}


		<Button variant="primary mt-2" type="submit" value="Book" onChange={handleSearch}>Cari</Button>
  </Form>
</Col>
</Row>
<p>{tiket}</p>
</Container>
</>
);
 }