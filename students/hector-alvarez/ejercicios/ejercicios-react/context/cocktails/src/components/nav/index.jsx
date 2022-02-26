
<<<<<<< HEAD

import React from "react"
import { Link } from 'react-router-dom';
import './style.css';




function Nav() {

=======
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from "react"
import './style.css';
import minibar from "../../imagenes/logominibar.png"



function Navegador() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
>>>>>>> feature/miercoles-dieciseis-feb

    return (

        <React.Fragment>

<<<<<<< HEAD
            <nav className="nav_container">
                        <button><Link to='/cockteles'>cocktails</Link></button>
                        <button><Link to='/drinks'>drinks</Link></button>
            </nav>

=======

            <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                <img src={minibar} alt="" />
                <NavDropdown  id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Drinks</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Cocktails</NavDropdown.Item>
                 
                </NavDropdown>
            </Nav>
>>>>>>> feature/miercoles-dieciseis-feb


        </React.Fragment>


    )

}

<<<<<<< HEAD
export default Nav
=======
export default Navegador;
>>>>>>> feature/miercoles-dieciseis-feb
