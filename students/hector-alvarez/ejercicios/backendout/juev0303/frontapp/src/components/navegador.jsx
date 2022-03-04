import React from "react"
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

function Navegador() {

  return (
    <React.Fragment>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link><Link to="listado">Listado</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="contacto">Formulario</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="details">Details</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </React.Fragment>


  )

}

export default Navegador;