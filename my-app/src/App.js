import React from 'react'
//OnClick => a ação ocorre no click;
//Onchange => a ação ocorre na mudança;
{/* <button onClick={() => { alert() }}></button> */ }
//fazer um input com onchange que, o que a pessoa digitar, ela vai somar com uma variavél,
// com valor 4 e vai retornar o alert com o resultado.

//fazer um click numa div com um texto qualquer que retorne um alert com o texto,
// "Você conseguiu o texto de uma variavél.

export default function App() {

    const mensagem = 'Você conseguiu'
    const number = 4

    return (
        <div classNome="App">

..            <form>
                <label>digite um numero:</label>
                <input onChange={(e) => { alert(JSON.parse(e.target.value) + number) }} />
            </form>

            <br />

            <div className='click' onClick={() => { alert([mensagem]) }}>click</div>
        </div>
    )
}