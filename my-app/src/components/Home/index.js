import React from 'react'
export default function Home() {
    return (
        <div className='links'>
            <a href='/'>home</a>
            <a href='http://localhost:3000/lojas?loja=pernambucanas&slogan=danossacasaprasuacasa&setor=pernambucanasinfantil'>split</a>
            <a href='http://localhost:3000/esporte?loja=futebol&item1=bola&item2=chuteira&item3=caneleira&item4=meiao'>query string</a>
        </div>
    )
}
