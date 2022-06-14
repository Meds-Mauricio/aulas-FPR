import React, { useState, useEffect } from 'react';
import Home from '../home';

export default function Inscritos() {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const redirecionar =() => {
        window.location.href="/"
        localStorage.clear();
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setEmail(localStorage.getItem('email'))
            setSenha(localStorage.getItem('senha'))
        }
    }, [])

    const cadastro = () => {
        if (email === 'douglassantos@gmail.com' && senha === 'teste') {
            return (
                <>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/153550013_994407594645113_7023637351001422722_n.jpg?ccb=11-4&oh=01_AVwQ-8zv75oke0c44NRR7-pYI28tGdWNWEKsF8IFvo3_Gw&oe=62B73707" />
                    <p>Douglas dos Santos</p>
                    <p>28</p>
                </>
            )
        } else if (email === 'nathan@gmail.com' && senha === 'teste') {
            return (
                <>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/252414206_1122247044848994_4048493858383801055_n.jpg?ccb=11-4&oh=a0810fc7c725c19e219ddac55e0385ea&oe=62B562A4" />
                    <p>Nathan Ferraz</p>
                    <p>34</p>
                </>

            )
        }  else if (email === 'rogerio@gmail.com' && senha === 'teste') {
            return (
                <>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/258199736_750553419439737_4778811596343024871_n.jpg?ccb=11-4&oh=e20672c547ba4f13ef4ff2b87ea07499&oe=62B75F5E" />
                    <p>Rogério Marciano</p>
                    <p>23</p>
                </>

            )
        } else if (email === 'emanuel@gmail.com' && senha === 'teste') {
            return (
                <>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/120644582_333088305639052_1388588836000341974_n.jpg?ccb=11-4&oh=88de60a38a450dc8fb04beecf9cf8cf0&oe=62B5B88F" />
                    <p>Emanuel ocara</p>
                    <p>28</p>
                </>
            )
        } else if (email === 'marcello@gmail.com' && senha === 'teste') {
            return (
                <>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/287453459_439283910904466_3146904450005480309_n.jpg?ccb=11-4&oh=13e557f9d95c70b163e73452c1bed00d&oe=62B7C9CF" />
                    <p>DMarcello Moraes</p>
                    <p>31</p>
                </>
            )
        } else if (email === 'polyribeiro@gmail.com' && senha === 'teste') {
            return (
                <>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/187807139_718860685919552_8838447497442718700_n.jpg?ccb=11-4&oh=2920a3845bcd46079c1f9c02ce3b6eb5&oe=62B83761" />
                    <p>Poly Ribeiro</p>
                </>
            )
        } else if (email === 'feliperibeiro@gmail.com' && senha === 'teste') {
            return (
                <>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/75295365_600191884135922_8749716309669737272_n.jpg?ccb=11-4&oh=01_AVz-Uj1Vdg1lC9i3RL_hblp7B5lT4epL0l5ZgratkMnvFQ&oe=62B7401F" />
                    <p>Felipe Ribeiros</p>
                    <p>31</p>
                </>
            )
        } else if (email === 'mauricioedson@gmail.com' && senha === 'teste') {
            return (
                <>
                    <img src="https://avatars.githubusercontent.com/u/99505378?v=4" />
                    <p>Mauricio Edson</p>
                    <p>48</p>
                </>
            )
        }
    }
    return (

        <div>
            {cadastro()}
            <button onClick={() => redirecionar()}>enviar</button>
        </div>


    )

}









