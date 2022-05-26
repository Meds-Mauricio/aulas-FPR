import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [resposta, setResposta] = useState([]);
    useEffect(() => {
        axios.get('https://exercicio-de-firebase-default-rtdb.firebaseio.com/futebol/saoPaulo.json')
            .then(function (response) {
                setResposta(response.data);
            }
            )
    }, [])

    return (
        <>
            <section className='cabecalho'>
                <h1>Api de Times</h1>
                {resposta && Object.values(resposta).map((item) => {
                    return (
                        <p>{item.atacante}</p>
                    )
                })}
            </section>
        </>
    )
}

