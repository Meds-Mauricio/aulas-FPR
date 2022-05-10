import React from 'react'
import { useState } from 'react'

export default function Home() {
    const [loja, setLoja] = useState('selecione')
    const [cor, setCor] = useState('selecione')
    const [comodo, setComodo] = useState('selecione')
    const [fornecedor, setFornecedor] = useState('selecione')

    console.log(loja);
    return (
        <section>
            <select onChange={(e) => setLoja(e.target.value)}>
                <option value='selecione'>Selecione</option>
                <option value='riachuello'>Riachuello</option>
                <option value='americanas'>Americanas</option>
                <option value='magazine-luiza'>Magazine Luiza</option>
            </select>
            <select onChange={(e) => setCor(e.target.value)}>
                <option value='selecione'>Selecione</option>
                <option value='azul'>Azul</option>
                <option value='amarelo'>Amarelo</option>
                <option value='vermelho'>Vermelho</option>
            </select>
            <select onChange={(e) => setComodo(e.target.value)}>
                <option value='selecione'>Selecione</option>
                <option value='cozinha'>Cozinha</option>
                <option value='sala'>Sala</option>
                <option value='quarto'>Quarto</option>
            </select>
            <select onChange={(e) => setFornecedor(e.target.value)}>
                <option value='selecione'>Selecione</option>
                <option value='madeira-madeira'>Madeira Madeira</option>
                <option value='bonatto'>Bonatto</option>
                <option value='philco'>Philco</option>
            </select>
            <button onClick={() => window.location.href = `/resultado?loja=${loja}&cor=${cor}&comodo=${comodo}&fornecedor=${fornecedor}`}>Filtrar</button>
          
        </section>
    )
}
