import React from 'react'
import Header from '../../components/Header';

function Shoopping() {
    const crianca = window.location.href.includes('y')
    const adulto = window.location.href.includes('x')
    return (
        <div>
            <Header />
            { crianca &&
            <div>
                <h1>você esta na pagina do shoopping</h1>
            </div>
            }
           
            <input onChange={(e) => {
                window.location.href = `/?${e.target.value}`
            }} />

            {adulto &&
            <div>
                <h1>Seja bem vindo</h1>
            </div>
}
        </div>

    )
}

export default Shoopping;