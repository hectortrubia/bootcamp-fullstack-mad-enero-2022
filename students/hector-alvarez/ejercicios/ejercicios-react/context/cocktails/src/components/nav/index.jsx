
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from "react"
import './style.css';
import minibar from "../../imagenes/logominibar.png"



function Navegador() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (

        <React.Fragment>


            <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                <img src={minibar} alt="" />
                <NavDropdown  id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Drinks</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Cocktails</NavDropdown.Item>
                 
                </NavDropdown>
            </Nav>


        </React.Fragment>


    )

}

export default Navegador;