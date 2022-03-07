
import React, { useEffect, useState } from "react";
import CardUser from "../components/carduser";


function Listado() {

    let [data,updateData]= useState([])
    useEffect(() => {

        fetch('http://localhost:4003/')
        .then(j => j.json())
        .then(r => updateData(r))
    }, [])
    console.log(data)

    return (


        <React.Fragment>


            {data.map((e, i) => <CardUser key={i} name={e.name} lastname={e.lastname} country={e.country} email={e.email} img={e.img}></CardUser>)}

           
            
        </React.Fragment>
        )
  }

export default Listado;