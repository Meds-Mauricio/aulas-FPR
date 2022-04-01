import './App.css';
import { Casa } from './components/Trabalho';

function App() {
   const Mensagem = 'é muito legal';
   const Numero = 8; 

    // cria uma função externa que chame o numero digitado no input no console.log acrtescentando 
    // a mensagem --é muito louco--

    //passar duas variáveis para uma segunda função onde elas retornem dentro de um alert depois do click

    return (
        <form>
            <input onChange={(e) => { Casa(e.target.value, Mensagem) }} />
            {/* <p>{Number + Mensagem}</p> */}
        </form>
    )
}
export default App;