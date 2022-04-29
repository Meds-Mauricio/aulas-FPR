import React, { useState, useEffect } from 'react';

export default function Time() {
    const [brasil1, setBrasil1] = useState('Alisson')
    const [brasil2, setBrasil2] = useState('Marquinhos')
    const [brasil3, setBrasil3] = useState('Éder Militão')
    const [brasil4, setBrasil4] = useState('Casemiro')
    const [brasil5, setBrasil5] = useState(' Bruno Guimarães')
    const [brasil6, setBrasil6] = useState('Gabriel Jesus')
    const [brasil7, setBrasil7] = useState('Richarlison')
    const [brasil8, setBrasil8] = useState('Neymar')
    const [brasil9, setBrasil9] = useState('Éder Militão')
    const [brasil10, setBrasil10] = useState('Lucas Paquetá')
    const [brasil11, setBrasil11] = useState('Thiago Silva ')

    const [inicio, setInicio] = useState('')

    const saoPaulo = () => {
        setInicio('saoPaulo')
    }

    const palmeiras = () => {
        setInicio('palmeiras')
    }
    const corinthians = () => {
        setInicio('corinthians')
    }

    useEffect(() => {
        if (inicio === 'saoPaulo') {
            setBrasil1('Jandrei')
            setBrasil2('Léo')
            setBrasil3('Jandrei')
            setBrasil4('Miranda')
            setBrasil5('Arboleda')
            setBrasil6('Igor Gomes')
            setBrasil7('Nicão')
            setBrasil8('Gabriel Sara')
            setBrasil9('Marquinhos')
            setBrasil10('Luciano')
            setBrasil11('Rigoni')
        }
        else if (inicio === 'palmeiras') {
            setBrasil1('Weverton')
            setBrasil2('Marcos Rocha')
            setBrasil3('Piquerez')
            setBrasil4('Gustavo Gomez')
            setBrasil5('Murilo')
            setBrasil6('Zé Rafael')
            setBrasil7('Danilo')
            setBrasil8('Rafael Veiga')
            setBrasil9('Dudu')
            setBrasil10('Gustavo Scarpa')
            setBrasil11('Rony')
        }
        else if (inicio === 'corinthians') {
            setBrasil1('Cássio')
            setBrasil2('Fagner')
            setBrasil3('Fábio Santos')
            setBrasil4('João Vitor')
            setBrasil5('Raul Gustavo')
            setBrasil6('Du Queiroz')
            setBrasil7('Maycon')
            setBrasil8('Renato Augusto')
            setBrasil9('Willian')
            setBrasil10('Roger Guedes')
            setBrasil11('Jô')
        }
    }, [inicio]);

    return (
        <section>
            <div className='elenco'>
                <div>
                    <p>{brasil1}</p>
                </div>
                <div>
                    <p>{brasil2}</p>
                </div>
                <div>
                    <p>{brasil3}</p>
                </div>
                <div>
                    <p>{brasil4}</p>
                </div>
                <div>
                    <p>{brasil5}</p>
                </div>
                <div>
                    <p>{brasil6}</p>
                </div>
                <div>
                    <p>{brasil7}</p>
                </div>
                <div>
                    <p>{brasil8}</p>
                </div>
                <div>
                    <p>{brasil9}</p>
                </div>
                <div>
                    <p>{brasil10}</p>
                </div>
                <div>
                    <p>{brasil11}</p>
                </div>
            </div>

            <div className='button'>
                <div className='saoPaulo'>
                    <button onClick={() => saoPaulo()}>Sâo Paulo</button>
                </div>
                <div className='palmeiras'>
                    <button onClick={() => palmeiras()}>Palmeiras</button>
                </div >
                <div className='corinthians'>
                    <button onClick={() => corinthians()}>Corinthians</button>
                </div>
            </div>
        </section>

    );
}

