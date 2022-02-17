import React from 'react';
import './style.css';
import Pokecard from '../pokecard';
import {useState} from 'react';
import {useEffect} from 'react';



function Pokelist() {


    let [pok, uptdatepok] = useState([])

    useEffect(() => {

        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(r => r.jason())
            .then(c => {

                c.results.ForEach(v => {
                    console.log(v)
                    fetch(v.url)
                        .then(r => r.json())
                        .then(data => {
                            let pokemon = {
                                id: data.id,
                                img: data.sprites.back_default,
                                name: data.name,
                                type: [data.types]
                            }
                            uptdatepok((pok) => [...pok, pokemon])


                        })
                })

            })


    })

    return (

        <React.Fragment>

            {pok.length === 0 ? <h1>cargando</h1> : pok.map((v, i) =>

                <Pokecard Key={i} nombre={v.name} img={v.img} id={v.id} type={v.type}></Pokecard>)}

        </React.Fragment>

    )

}

export default Pokelist