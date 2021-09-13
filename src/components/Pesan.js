import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Adults from './Adults'
import Child from './Child'
import Tiket from './Tiket'
import Pemesan from './Pemesan'

export default function Pesan(){
    <>
 <Container fluid="sm">
	<Row>
		<Col>
			<Pemesan />
		</Col>
		<Col>
			<Tiket />
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
</Container>

    </>

}