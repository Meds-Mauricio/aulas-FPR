import './App.css';
import Esporte from './components/Esporte';
import { olimpiadas } from './mock';

export default function App( ) {
        return (
            <div className="App">
                {olimpiadas.esporte.map((jogos) => {
                    return (
                        <Esporte
                            baskete={jogos.baskete}
                            boxe={jogos.boxe}
                            futebol={jogos.futebol}
                        />
                    )
                })}
            </div>
        );
    }
