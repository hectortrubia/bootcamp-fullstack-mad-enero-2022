

import React from "react"
import { Link } from 'react-router-dom';
import './style.css';




function Nav() {


    return (

        <React.Fragment>

            <nav className="nav_container">
                        <button><Link to='/cockteles'>cocktails</Link></button>
                        <button><Link to='/drinks'>drinks</Link></button>
            </nav>



        </React.Fragment>


    )

}

export default Nav