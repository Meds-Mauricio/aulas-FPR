import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [resposta, setResposta] = useState()

    console.log(resposta && resposta.masculinas.tipo)

    // fetch('https://exercicio-de-firebase-default-rtdb.firebaseio.com/futebol.json')
    //     .then(response => response.json())
    //     .then(data => setResposta(data));

    useEffect(() => {
        axios.get('https://teste-aula-metodos-1-default-rtdb.firebaseio.com/roupas.json').then((response) =>
            setResposta(response.data)
        )
    }, [])
//teste
    return (
        <>
            {/* <h1>Roupas femininas</h1> */}
                {/* {resposta && resposta.masculinas.tipo} */}
                  {  
                    Object.values(resposta && resposta).map(Roupas =>{
                        return(
                            <p>{Roupas.tipo}</p>
                        )
                    })
                }

        </>
    )
}
