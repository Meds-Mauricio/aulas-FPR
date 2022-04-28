import React, { useState } from 'react';

export function Home() {
    const [pronome, setPronome] = useState('nós vamos')
    const [esporte, setEsporte] = useState('futebol')
    const [multiplicar, setMultiplicar] = useState(1)

    function mudar() {
        setPronome('eles vão')
        setEsporte('basquete')
    }

    function contador() {
        setMultiplicar(multiplicar * 4)
    }

    return (
        <div className="box">
            <div className='frase'>
                <p>{pronome} jogar {esporte}.</p>
                <button onClick={() => mudar()}>Trocar</button>
            </div>

            <div className='matematica'>
                {multiplicar}
                <button onClick={() => setMultiplicar(multiplicar * 4)}>Trocar</button>
            </div>
        </div>
    )
}
export default Home;