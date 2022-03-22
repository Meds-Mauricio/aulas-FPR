import React from 'react'

export default function App() {

  const olimpiadas = [
    {
      nome: 'Rogerio',
      atleta: 'Ronaldo',
      dataNascimento: '23/08/1998',
      informacao: [
        {
          idade: '22',
          modalidade: 'Futebol',
        },
        {
          idade: '23',
          modalidade: 'Basquete',
        }


      ]
    },

    {
      nome: 'Rodrigo',
      atleta: 'Oscar',
      dataNascimento: '23/10/1998',
      informacao: [
        {
          idade: '23',
          modalidade: 'Futebol',
        },
        {
          idade: '22',
          modalidade: 'Basquete',
        }


      ]
    },

  ]


  return (
    <>
      {
        olimpiadas.map((olimpiadas, index) => {
          const jogo = olimpiadas.informacao.filter((jeesp) => {
            return jeesp.modalidade === 'Basquete'
          })
          return (
            <div key={index}>
              <div>
                <p>{olimpiadas.modalidade}</p>
                <p>{olimpiadas.atleta}</p>
                <p>{olimpiadas.atleta}</p>
                <p>{olimpiadas.dataNascimento}</p>
                <p>{olimpiadas.nome}</p>

              </div>

              {jogo.map((jogos) => {
                return (
                  <div>
                    <p>{jogos.idade}</p>
                    <p>{jogos.modalidade}</p>
                  </div>

                )
              })}
            </div>
          )
        })
      }
    </>
  )
}