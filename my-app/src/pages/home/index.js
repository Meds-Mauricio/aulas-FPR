import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [resposta, setResposta] = useState([]);
    const [time, setTime] = useState([]);
    const [atacante, setAtacante] = useState([]);
    const [meioCampo, setMeioCampo] = useState([]);
    const [zagueiro, setZagueiro] = useState([]);
    const [goleiro, setgoleiro] = useState([]);
    const [mapear, setMaper] = useState([]);
    
    useEffect(() => {
        axios.get('https://exercicio-de-firebase-default-rtdb.firebaseio.com/futebolsao.json')
            .then(function (response) {
                setResposta(response.data);
            })
        
    }, [mapear])

    const cadastro = () => {
        axios.post('https://exercicio-de-firebase-default-rtdb.firebaseio.com/futebolsaoPaulo.json', {
            time: "time",
            atacante: "atacante",
            meioCampo: "meio campo",
            zagueiro: "zagueiro",
            goleiro: "goleiro"
        })
        .then(function (response) {
            alert('o time foi cadastrado')
            setMaper(!mapear)
        }).catch(
            alert('não conseguimos cadastrar o time ')
        )
    }
    return (
        <>
            <section className='cabecalho'>
                <h1>Api de Times</h1>
                <h2>Cadastramento de times para campeonato</h2>
                <form>
                    <label>Time</label><input onChange={(e) => setTime(e.target.value)}/><br />
                    <label>Atacante</label><input onChange={(e) => setAtacante(e.target.value)}/><br />
                    <label>Meio Campo</label><input onChange={(e) => setMeioCampo(e.target.value)}/><br />
                    <label>zagueiro</label><input onChange={(e) => setZagueiro(e.target.value)}/><br />
                    <label>goleiro</label><input onChange={(e) => setgoleiro(e.target.value)}/><br />
                    <button onClick={(e) => {e.preventDefault() 
                        cadastro()}}>Cadastrar</button>
                </form>

                {/* {resposta && Object.values(resposta).map((item) => {
                    return (
                        <p>{item.atacante}</p>
                    )
                })} */}



            </section>
        </>
    )
}

