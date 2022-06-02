import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { teste, Click } from "../home"

export default function home() {
    const [resposta, setResposta] = useState([]);
    const [teste, setTeste] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [tipo, setTipo] = useState([]);


    // console.log(teste);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150')
            .then(function (response) {
                setResposta(response.data.results);

            }
            )
    }, [])

    const click = (url) => {
        // console.log("resposta",resposta)
        axios.get(url)
            .then(function (response) {
                setPokemon(response.data);

            }
            )
    }
    // console.log(pokemon);

    return (

        <section className='cabecalho'>
            <h1>Api de pokemon</h1>
            <p>{pokemon.name}</p>
            <p>{pokemon.types.map((tipo))}</p>
            {/* {resposta && resposta.map((tipo) => {
                { console.log(tipo) }
                return (
                    <p onClick={() => click(tipo.url)}>{tipo.name}</p>
                    )
                })} */}

            <p>{pokemon.weight}</p>
            <p>{pokemon.height}</p>
            
            {resposta && resposta.map((item) => {
                return (
                    <p onClick={() => click(item.url)}>{item.name}</p>
                    )
                })}
        </section>
    )
}


