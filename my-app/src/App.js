import './App.css';
import { Mercado, Click } from './Utils';

function App() {
const mensagem = 'é muito bom';
const doce =  'chocolate';

    // cria uma função externa que chame o numero digitado no input no console.log acrtescentando 
    // a mensagem --é muito louco--

    //passar duas variáveis para uma segunda função onde elas retornem dentro de um alert depois do click

    return (
        <form>
            <input onChange={(e) => Mercado(e.target.value)} />
            <button onClick={() => Click(doce, mensagem)}>click</button>
        </form>
    )
}
export default App;