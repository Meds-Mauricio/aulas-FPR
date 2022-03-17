import './App.css';
function App() {

    const casa = [
        {
            quarto: 'cama',
            sala: false,
            cozinha: 'pia'
        },
        {
            quarto: 'travesseiro',
            sala: true,
            cozinha: 'armario',
        },
        {
            quarto: 'colchão',
            sala: false,
            cozinha: 'mesa',
        },
        {
            quarto: 'travesseiro',
            sala: true,
            cozinha: 'cadeira',
        },
    ]

    const frutas = [
        {
            nome: 'laranja',
            tipo: "pêra",
            id: '81fbc166-a60c-11ec-b909-0242ac120002',
        },
        {
            nome: 'abacaxi',
            tipo: "havaí",
            id: 'bf983f2c-a60c-11ec-b909-0242ac120002',
        },
        {
            nome: 'abacaxi',
            tipo: "pérola",
            id: 'c9c37318-a60c-11ec-b909-0242ac120002',
        },
    ]

    const filtrando = casa.filter(casaComodo => {
        return casaComodo.sala === false
    })
    console.log(filtrando)

    const filtrandoFrutas = frutas.filter(frutasLista => {
        return frutasLista.nome === 'abacaxi'
    })

    return (
        <div className="App">
            <>
                {
                    filtrando.map((casaComodo, index) => {
                        return (
                            <p key={index}>{casaComodo.quarto}</p>
                        )
                    })
                }

                {
                    filtrandoFrutas.map((frutasLista) => {
                        return (
                            <p key={frutasLista.id}>{frutasLista.nome}</p>
                        )
                    })
                }
            </>
        </div>
    );

}

export default App;