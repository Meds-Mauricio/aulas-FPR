import React from 'react'
import Home from '../home';

export default function Inscritos() {
    const nome = localStorage.getItem('entrada');
    return (    
        <>
            <menu>
                <p><span>{nome && nome}</span> por confirmar a sua presença.</p>
                <Home />
            </menu>
        </>
    )
}

import React from 'react'

export default function Inscritos() {git git
  return (
    <>

    </>
  )
}
