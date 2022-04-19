import React from 'react'

export default function Lojas() {
    const teste = () => {
        if(window.location.href.includes('penambucanas')){
            return <p>Pernambucanas</p>
            
        }else if(window.location.href.includes('americanas')){
            return <p>Americanas</p>

        }else if(window.location.href.includes('cem')){
            return <p>Cem</p>

        }else if(window.location.href.includes('dark')){
            return <p>Dark</p>

        }else {
            return <p>não existe</p>
        }
    }
    
        

    return (


        <>
            {teste()} 
        </>
    )
}