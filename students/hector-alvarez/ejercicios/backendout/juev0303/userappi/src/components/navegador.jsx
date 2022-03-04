import React from "react"
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";


function Navegador() {

    return (
        <React.Fragment>
<Nav
  activeKey="./listado"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Link to="/">Listado</Link>
  </Nav.Item>
  <Nav.Item>
  <Link to="contacto">Formulario</Link>
  </Nav.Item>
  <Nav.Item>
  <Link to="details">Details</Link>
  </Nav.Item>
</Nav>
        </React.Fragment>


    )

}

export default Navegador;