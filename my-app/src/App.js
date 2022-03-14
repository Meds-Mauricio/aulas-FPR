import './App.css';

function App() {

    const familia = {
        info: 'basico'
    }

    return (
        <div className="App">
            <div className='lista'>
            {familia.info === "italo" ? (
                        <p>não tem conteudo</p>
                    ) : (
                <div>
                    {familia.info === "premium" && (
                        <p>premium</p>
                    )}

                    {familia.info === "padrao" && (
                        <p>normal</p>
                    )}

                    {familia.info === "basico" && (
                        <p>básico</p>
                    )}

                    

                </div>
                    )
}
            </div>
        </div>
    )
}

export default App