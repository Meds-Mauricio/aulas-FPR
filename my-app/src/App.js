import './App.css';

function App() {

    const familia = [
        {
            nome: 'Mauricio',
            telefone: '(11) 9586-7309',
            idade: 15,
            dataDeNascimento: '05/03/2007',
            nomeDaMae: 'Custodia',
            nomeDoPai: 'Adão',
        },
        {
            nome: 'Marcelo',
            telefone: '(11) 86595-0696',
            idade: 22,
            dataDeNascimento: '04/02/2000',
            nomeDaMae: 'Katia',
            nomeDoPai: 'João',
        },
        {
            nome: 'Paulo',
            telefone: '(11) 9089-7876',
            idade: 25,
            dataDeNascimento: '26/11/1997',
            nomeDaMae: 'Maria',
            nomeDoPai: ''
        },
        {
            nome: 'Marcos',
            telefone: '(11) 95674-0384',
            idade: 34,
            dataDeNascimento: '27/05/1988',
            nomeDaMae: 'Patricia',
            nomeDoPai: "Rogerio",
        },
        {
            nome: 'Felipe',
            telefone: '(11) 9373-8590',
            idade: 17,
            dataDeNascimento: '25/01/2013',
            nomeDaMae: 'Andréia',
            nomeDoPai: ''
        },
    ]

    return (
        <div className="App">
            {
                familia.map(pessoas => {//sempre setar um nome para o map ex:. alimento.map(lanche =>{})

                    return (
                        <div className='lista'>
                            <div>
                                <p>Nome: {pessoas.nome}</p>
                                <p>Idade: {pessoas.idade}</p>
                                <p>Data de Nascimento: {pessoas.dataDeNascimento}</p>
                                <p>Telefone: {pessoas.telefone}</p>
                                <p> Nome da Mãe: {pessoas.nomeDaMae}</p>
                                {pessoas.nomeDoPai && <p>Nome do Pai: {pessoas.nomeDoPai}</p>}
                            </div>
                        </div>
                    )
                })
            }
        </div>

    );
}

export default App;