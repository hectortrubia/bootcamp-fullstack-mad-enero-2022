import React from "react"
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// Crea un div de una fila y dos columnas que cuando el tamaño de tu pantalla este por debajo de 1000px se ponga una debajo de otra.
// Crea un div de dos filas y dos columnas cada una, una fila deberá permanecer con las dos columnas en todos sus breakpoints  y la otra fila cuando el tamaño de tu pantalla sea menos de 570px debera ponerse una debajo de otra.


function Home() {


    return (

        <React.Fragment>
            {/* / En una app React crea en una pagina Home un nav, un boton y un accordion de los componentes de react bootstrap. */}

            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>

            <Button variant="primary" size="lg" disabled>Mi botón</Button>{' '}

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Crea un div de una fila y   dos columnas que cuando el tamaño de tu pantalla este por debajo de 1000px se ponga una debajo de otra. */}

            <Container>

                <Row>
                    <Col lg={6} md={12} sm={12} xl={6} xs={12} xxl={6} >columna 1 ej 1/fila 1</Col>
                    <Col lg={6} md={12} sm={12} xl={6} xs={12} xxl={6} >columna 2 ej 1/fila 1</Col>
                </Row>

            </Container>

            <br />

            {/* // Crea un div de dos filas y dos columnas cada una, una fila deberá permanecer con las dos columnas en todos sus breakpoints  y la otra fila cuando el tamaño de tu pantalla sea menos de 570px debera ponerse una debajo de otra. */}

            <Container>

                <Row>
                    <Col lg={6} md={6} sm={6} xl={6} xs={6} xxl={6} >columna 1/fila 1</Col>
                    <Col lg={6} md={6} sm={6} xl={6} xs={6} xxl={6} >columna 2/fila 1</Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={6} xl={6} xs={12} xxl={6} >columna 1/fila 2</Col>
                    <Col lg={6} md={6} sm={6} xl={6} xs={12} xxl={6} >columna 2/fila 2</Col>
                </Row>

            </Container>


        </React.Fragment>


    )

}

export default Home