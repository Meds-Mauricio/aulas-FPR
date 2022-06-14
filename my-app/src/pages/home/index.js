import React, { useState } from 'react'

function Home() {
    const [ email, setEmail] = useState()
    const [senha, setSenha] =useState()
    
    const entrar = () => {
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
        window.location.href="/inscritos"
    }

  
    return (
        <>
            <section>
                <div className='cabecalho'>
                    <h1>Login</h1>
                    <label>email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type='email'/>
                    <label>Senha</label>
                    <input  onChange={(e) => setSenha(e.target.value)} type='password'/>
                    <button onClick={() => entrar()}>enviar</button>
                </div>
            </section>
        </>
    )}
export default Home