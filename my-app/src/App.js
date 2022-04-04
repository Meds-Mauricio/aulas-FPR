import './App.css';
import { Mercado, Click } from './Utils';

function App() {
const mensagem = 'é muito bom';
const doce =  'chocolate';

    return (
        <form>
            <input onChange={(e) => Mercado(e.target.value)} />
            <button onClick={() => Click(doce, mensagem)}>click</button>
        </form>
    )
}
export default App;