import './App.css';
import { Casa, Click } from './Utils';

function App() {
   const Mensagem = 'é muito legal';
   const Numero = 8; 

    // cria uma função externa que chame o numero digitado no input no console.log acrtescentando 
    // a mensagem --é muito louco--

    //passar duas variáveis para uma segunda função onde elas retornem dentro de um alert depois do click

    return (
        <form>
            <input onChange={(e) => { Casa(e.target.value) }} />
            <button onClick= { Click(Numero) }>click</button>
        </form>
    )
}
export default App;