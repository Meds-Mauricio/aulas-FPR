import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [resposta, setResposta] = useState([]);
    useEffect(() => {
        axios.get('https://exercicio-de-firebase-default-rtdb.firebaseio.com/futebol/corinthians.json')
            .then(function (response) {
                setResposta(response.data);
            }
            )
    }, [])
//test
    return (
        <section>
            Teste<br />
            {resposta && Object.values(resposta).map((item) => {
                return (
                    <p>{item.zagueiro}</p>
                )
            })}
        </section>
    )
}

