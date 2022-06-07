import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Cadastro() {
    const [resposta, setResposta] = useState([])
    const [titulo, setTitulo] = useState([])
    const [genero, setGenero] = useState([])
    const [imagem, setImagem] = useState([])
    const [tipo, setTipo] = useState([])
    const [dadoDigitado, setDadoDigitado] = useState([])
    const [reativar, setReativar] = useState([])

    useEffect(() => {
        axios.get('https://filmes-e-series-af485-default-rtdb.firebaseio.com/cadastro.json')
            .then(function (response) {
                setResposta(response.data);
                // console.log(response);
            })
    }, [reativar])

    const cadastro = () => {
        axios.post('https://filmes-e-series-af485-default-rtdb.firebaseio.com/cadastro.json', {
            titulo: titulo,
            genero: genero,
            imagem: imagem,
            tipo: tipo
        })
            .then(() => {
                alert('seu filme foi cadastrado')
                setReativar(!reativar)
            }).catch(() => {
                alert('não conseguimos cadastrar seu filme')
            })
    }

    const excluir = (id) => {
        axios.delete(`https://filmes-e-series-af485-default-rtdb.firebaseio.com/cadastro/${id}.json`, {})
            .then(() => {
                alert('seu filme foi retirado')
                setReativar(!reativar)
            }).catch(() => {
                alert('não conseguimos excluir o filme')
            })
    }

    const substituir = (id) => {
        axios.patch(`https://filmes-e-series-af485-default-rtdb.firebaseio.com/cadastro/${id}.json`, {
            titulo: titulo,
            genero: genero,
            imagem: imagem,
            tipo: tipo
        })
            .then(() => {
                alert('seu filme foi substituido')
                setReativar(!reativar)
            }).catch(() => {
                alert('não conseguimos substituir seu filme')
            })
    }

    return (
        <section className='selecao'>
            {/* <div className='cabecalho'> */}
            <h1>cadastro de filmes e series</h1>

            {resposta && Object.entries(resposta).map((item) => {
                console.log(item);
                // const filtrando = cadastro.filter(cadastramento => {
                //     return cadastramento.tipo === true
                return (
                    <section className='select'>
                        <div className='edicao'>
                            <p>Titulo: {item[1].titulo}</p>
                            <input onChange={(e) => { setTitulo(e.target.value) }} />
                            <p>Genero: {item[1].genero}</p>
                            <input onChange={(e) => { setGenero(e.target.value) }} />
                            <p>Tipo: {item[1].tipo}</p>
                            <select onChange={(e) => { setTipo(e.target.value) }} >
                                <option>selecione</option>
                                <option value="filme">filme</option>
                                <option value="serie">Série</option>
                            </select>
                            <p>imagem:</p>
                            <input onChange={(e) => { setImagem(e.target.value) }} />

                        </div>
                        <div className='button'>
                            <button onClick={() => substituir(item[0])}>Substituir</button>
                            <button onClick={() => excluir(item[0])}>Excluir</button>
                        </div>
                    </section>
                )
            })
            }
            <section>
                <div>
                    <h2>Cadastre seu filme ou série</h2>
                </div>
                <form>
                    <label>titulo</label><input onChange={(e) => setTitulo(e.target.value)} /><br />
                    <label>genero</label><input onChange={(e) => setGenero(e.target.value)} /><br />
                    <label>imagem</label><input onChange={(e) => setImagem(e.target.value)} /><br />
                    <label>tipo</label><input onChange={(e) => setTipo(e.target.value)} /><br />
                    <button onClick={(e) => {
                        e.preventDefault()
                        cadastro()
                    }}>Cadastrar</button>
                </form>
            </section>

        </section>

    )
} 