import React from 'react'

export default function App() {
    const igreja = [
        {
            pastor: "Manoel",
            discipulador: "true",
            lider: [
                {
                    nome: "Mauricio",
                    dataNascimento: "23/09/1999",
                    endereco: "rua Brasil"
                },

            ],

            liderTreinamento: [
                {
                    celula33: "Gabriel",
                    celula23: true
                },

                {
                    celula33: "Marcos",
                    celula23: false
                }
            ],
        },


        {
            pastor: "Gilberto",
            discipulador: false,
            lider: [
                {
                    nome: "Evandro",
                    dataNascimento: "23/06/1997",
                    endereco: "rua agarapé"
                },
            ],

            liderTreinamento: [
                {
                    celula33: "Ivan",
                    celula23: true
                },

                {
                    celula33: "Carlos",
                    celula23: false
                }
            ],
        },
        {
            pastor: "Jeremias",
            discipulador: true,
            lider: [
                {
                    nome: "rogerio",
                    dataNascimento: "13/07/2000",
                    endereco: "rua aráras"
                },
            ],

            liderTreinamento: [
                {
                    celula33: "Ricardo",
                    celula23: false
                },

                {
                    celula33: "Mario",
                    celula23: false
                }
            ],
        },
        {
            pastor: "Lincoln",
            discipulador: true,
            lider: [
                {
                    nome: "Natan",
                    dataNascimento: "02/02/1995",
                    endereco: "rua ypé"
                },
            ],

            liderTreinamento: [
                {
                    celula33: "Vinicius",
                    celula23: true
                },

                {
                    celula33: "Carlos",
                    celula23: false
                }
            ],
        },
    ]

    return (
        <>
            {igreja.map((aguaViva, index) => (
                <div key={index}>
                    <h1>{aguaViva.pastor}</h1>

                    {aguaViva.lider.map((liderDados) => (
                        <ul>
                            <li>{liderDados.nome}</li>
                            <li>{liderDados.dataNascimento}</li>
                            <li>{liderDados.endereco}</li>
                        </ul>
                    ))}

                    {aguaViva.liderTreinamento.map((dados) => (
                        <ul>
                            <li>{dados.celula33}</li>
                        </ul>
                    ))}
                </div>
            ))}
        </>
    )
}
