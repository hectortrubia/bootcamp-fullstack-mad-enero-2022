import React from "react"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useState } from "react";







function Formulario() {

  let [userdata, updatedata] = useState([])



  const handlerSubmit = e => {
    e.preventDefault();
    const user = {
      
      name:e.target.name,
      lastname : e.target.lastname,
      username: e.target.username,
      country: e.target.country,
      img: e.target.img
    }



    fetch('http://localhost:4003/', {

      method: 'POST',
      body: JSON.stringify(user)
  
  }
    )
      .then(d => d.json())
      .then(data => updatedata(...userdata, user)

      )
    console.log(user)



  }


  return (

        <Form onSubmit={handlerSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label >Nombre</Form.Label>
            <Form.Control type="text" placeholder="Introduce tu nombre" name="name" />

            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Introduce tu Apellido" name="lastname" />

            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Introduce tu Usuario" name="username" />

            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text><br></br>

            <Form.Label >Introduce tu URL</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text  name="img" >
                https://
              </InputGroup.Text>
              <FormControl  aria-describedby="basic-addon3" />
            </InputGroup>

            <Form.Label>Pais</Form.Label>
            <Form.Control type="text" placeholder="Introduce tu pais" name="country" />

          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      )

    }



            export default Formulario