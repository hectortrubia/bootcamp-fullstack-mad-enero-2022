import React from "react"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Formulario() {

  

  return (

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Introduce tu nombre" />
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Introduce tu Apellido" />
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Introduce tu Usuario" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text><br></br>

        <Form.Label htmlFor="basic-url">Introduce tu URL</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://
          </InputGroup.Text>
          <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>

        <Form.Label>Pais</Form.Label>
        <Form.Control type="text" placeholder="Introduce tu Pais" />

      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  )

}

export default Formulario;