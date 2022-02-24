import React from 'react';
import './style.css';
import Pokemon from '../../components/pokecard';
import {useState} from 'react';
import {useEffect} from 'react';



function PokemonList() {
    let [pok, updatepok] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(r => r.json())
            .then(c => {

                c.results.forEach(v => {
               
                    fetch(v.url)
                        .then(r => r.json())
                        .then(data => {
                            let pokemon = {
                                id: data.id,
                                img: data.sprites.front_default,
                                name: data.name,
                                type: [data.types],

                            };
                            updatepok( (pok)=>[...pok,pokemon])
                            pok.push(pokemon)
                         
                        })

                })

            });

    }, []);


    return (
        <React.Fragment>
<div className="container">

            {pok.length === 0 ? <h1>cargando</h1> : pok.map((v, i) =>

                <Pokemon key={i} nombre={v.name} img={v.img} id={v.id} type={v.type} ></Pokemon>)}


</div>

        </React.Fragment>



    )


}

export default PokemonList