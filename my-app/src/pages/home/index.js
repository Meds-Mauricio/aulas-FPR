import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [resposta, setResposta] = useState([])
    const [goleiro, setGoleiro] = useState([])
    const [atacante, setAtacante] = useState([])
    const [zagueiro, setZagueiro] = useState([])
    const [meioCampo, setMeioCampo] = useState([])
    const [dadoDigitado, setDadoDigitado] = useState([])
    const [reativar, setReativar] = useState([])

    useEffect(() => {
        axios.get('https://exercicio-de-firebase-default-rtdb.firebaseio.com/futebol/corinthians.json')
            .then(function (response) {
                setResposta(response.data);
            })
    }, [reativar])

    const cadastro = (id) => {
        axios.post('https://exercicio-de-firebase-default-rtdb.firebaseio.com/futebol/corinthians.json', {
            goleiro: goleiro,
            zagueiro: zagueiro,
            meioCampo: meioCampo,
            atacante: atacante,
        })
            .then(function (response) {
                alert('seu jogador foi cadastrado')
                setReativar(!reativar)
            }).catch(function () {
                alert('não conseguimos cadastrar seus jogadores')
            })
    }

    const excluir = (id) => {
        axios.delete(`https://exercicio-de-firebase-default-rtdb.firebaseio.com/futebol/corinthians/${id}.json`, {})
            .then(function (response) {
                alert('seu jogador foi retirado')
                setReativar(!reativar)
            }).catch(function () {
                alert('não conseguimos  o jogador')
            })
    }

    const substituir = (id) => {
        axios.patch(`https://exercicio-de-firebase-default-rtdb.firebaseio.com/futebol/corinthians/${id}.json`, { item:dadoDigitado })
            .then(function (response) {
                alert('seu jogador foi substituido')
                setReativar(!reativar)
            }).catch(function () {
                alert('não conseguimos cadastrar seu jogador')
            })
    }

    return (
        <section >
            <div className='cabecalho'>
                <h1>Api de time de Futebol</h1>
                {/* {resposta && Object.values(resposta?.femininas)?.map(roupa => { */}

                {/* {resposta && Object.values(resposta).map((item) => { */}
                 {resposta && Object.entries(resposta).map((item) => {
                    // o entries traz pra nós, no console o [0] =id do item / e o [1]= traz os dados dos item
                    return (
                        <section className='cadastramento'>
                            <div className='edicao'>
                                {item[1].goleiro}<br/>
                                {/* {item[1].zagueiro}<br/>
                                {item[1].meioCampo}<br/>
                                {item[1].atacante}<br/> */}
                                <input onChange={(e) => { setDadoDigitado(e.target.value) }} />
                                <button onClick={() => substituir(item[0])}>Substituir</button>
                                <button onClick={() => excluir(item[0])}>Excluir</button>
                                <br />
                            </div>
                        </section>
                    )
                })}
                <h2>Cadastramento de jogadores</h2>
                <form>
                    <label>goleiro</label><input onChange={(e) => setGoleiro(e.target.value)} /><br />
                    <label>zagueiro</label><input onChange={(e) => setZagueiro(e.target.value)} /><br />
                    <label>meio Campo</label><input onChange={(e) => setMeioCampo(e.target.value)} /><br />
                    <label>atacante</label><input onChange={(e) => setAtacante(e.target.value)} /><br />
                    <button onClick={(e) => {
                        e.preventDefault()
                        cadastro()
                    }}>Cadastrar</button>
                </form>

            </div>
        </section>

    )
}


