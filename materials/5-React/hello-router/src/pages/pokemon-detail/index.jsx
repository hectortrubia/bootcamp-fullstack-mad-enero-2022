import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function PokemonDetail() {
    const { id } = useParams(); // deconstruyo el path param teniendo en cuenta el detail
    const [pokemon, updatePokemon] = useState({});
    const [evolutionChain, updateEvChain] = useState({});

    useEffect(() => {
        // busco la info del pokemon por el id del path param
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(r => r.json()) // formateo a JSON
            .then(p => {
                updatePokemon(p);

                fetch(p.species.url)// voy a por las especies
                    .then(r => r.json())
                    .then(s => {
                        fetch(s.evolution_chain.url) // voy a por la cadena evolutiva
                            .then(r => r.json())
                            .then(ev => updateEvChain(ev))
                    });

            }); // actualizo el state con la info del API de pokemon
    }, [id]);

    /**
     * Algoritmo recursivo que va pintanto las evolves de cada una de las evolves 
     * llamándose a si mismo
     */
    const printEvolution = (evolves_to) => {
        return (
            <React.Fragment>
                {
                    evolves_to?.map(ev => (
                        <React.Fragment key={ev.species.name}>
                            <p>{ev.species.name}</p>
                            {printEvolution(ev.evolves_to)}
                        </React.Fragment>
                    ))
                }
            </React.Fragment>

        )
    }

    return (
        <section>
            <h1>{pokemon.name}</h1>
            <img alt='' src={pokemon.sprites?.front_default}></img>
            <p>{evolutionChain.chain?.species.name}</p>
            { printEvolution(evolutionChain.chain?.evolves_to) }
        </section>
    )


}

export default PokemonDetail;