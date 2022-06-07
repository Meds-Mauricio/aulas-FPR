import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import cadastro from '../cadastro'
export default function Home() {
    const [resposta, setResposta] = useState([])
    const [titulo, setTitulo] = useState([])
    const [genero, setGenero] = useState([])
    const [imagem, setImagem] = useState([])
    const [tipo, setTipo] = useState([])
    const [dadoDigitado, setDadoDigitado] = useState()
    const [reativar, setReativar] = useState([])

    useEffect(() => {
        axios.get('https://filmes-e-series-af485-default-rtdb.firebaseio.com/cadastro.json')
            .then(function (response) {
                setResposta(response.data);
            })
    }, [reativar])

    return (
        <>

            {resposta && Object.values(resposta).map((item) => {
                console.log(resposta);

                return (
                    <>
                        <div >
                           <p>Titulo: {item.titulo}</p> 
                           <p>Genero: {item.genero}</p> 
                           <p>Tipo: {item.tipo}</p> 
                            <img width="300" src={item.imagem}/>
                        </div>
                    </>
                )
            })
            }
        </>
    )

}
