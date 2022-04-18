import './App.css';
import { loja, igreja } from './utils/loja';

//quero que voce faça uma condição que o valor digitado num input for -0-Guitarra-- console.log tem cordas,
//e digitar --Bateria-- console.log tem pedal, e se você digitar --Microfone-- coloca tem fios, 
//(nada) não existe instrumento.

//quero que faça um console com switch case que faça algo com 3 opções, 
//e uma opção para quando não atender as 3 opções.
function App() {

    return (
            <form class='input'>
                    <div class='input-1'>
                        <input onChange={(e) => loja(e.target.value)} placeholder='digite o instrumento'/>
                    </div>

                    <div class='input-2'>
                        <input onChange={(e) => igreja(e.target.value)} placeholder='digite o nome do Pr.'/>
                    </div>
            </form>
    )
}
export default App;