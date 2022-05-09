import React from 'react'
export default function Home() {
    return (
        <body>
            <section>
                <h1>Na Moda Ltda.</h1>
                <form>
                    <label text='nome' value='nome'></label>
                    <input text='texto' value='nome' />
                    <input text='texto' value='tel' />
                    <input text='texto' value='e-mail' />
                </form>

                <div>
                    <a href='/'>Home</a>
                    <a href='/'>setorMasculino</a>
                    <a href='/'>setorFeminina</a>
                    <a href='/'>setorInfantil</a>
                </div>
            </section>
        </body >
    )
}
