import React, { useState } from 'react';

function Home() {
  const [pergunta1, setPergunta1] = useState()
  const [pergunta2, setPergunta2] = useState()
  const [pergunta3, setPergunta3] = useState()
  const [pergunta4, setPergunta4] = useState()
  const [pergunta5, setPergunta5] = useState()
  const [resposta, setResposta] = useState(0)
  const [step, setStep] = useState(0)

  const um = pergunta1 === 'poly'
  const dois = pergunta2 === 'kaio'
  const tres = pergunta3 === 'emanuel'
  const quatro = pergunta4 === 'gelinho'
  const cinco = pergunta5 === 'marcelo'

  const resultado = (nivel) => {
    setStep(step + 1)
    if (nivel) {
      setResposta(resposta + 1)
    }
  }

  const final = () => {
    switch (resposta) {
      case 0: return 'horrivel';
      case 1: return 'muito ruim';
      case 2: return 'ruim';
      case 3: return 'mediano';
      case 4: return 'bom';
      case 5: return 'muito bom';
    }
  }
  return (
    <>
      {step === 0 &&
        <div>
          <label>Quem é o mais velho?</label>
          <input onChange={(e) => { setPergunta1(e.target.value) }} />
          <button onClick={() => { resultado(um) }}>Responder</button>
        </div>
      }


      {step === 1 &&
        <div>
          <label>Quem é o mais chato?</label>
          <input onChange={(e) => { setPergunta2(e.target.value) }} />
          <button onClick={() => { resultado(dois) }}>Responder</button>
        </div>
      }
      {step === 2 &&
        <div>
          <label>Quem é o mais chorão?</label>
          <input onChange={(e) => { setPergunta3(e.target.value) }} />
          <button onClick={() => { resultado(tres) }}>Responder</button>
        </div>
      }
      {step === 3 &&
        <div>
          <label>Quem é o mais alto?</label>
          <input onChange={(e) => { setPergunta4(e.target.value) }} />
          <button onClick={() => { resultado(quatro) }}>Responder</button>
        </div>
      }
      {step === 4 &&
        <div>
          <label>Quem é o mais novo?</label>
          <input onChange={(e) => { setPergunta5(e.target.value) }} />
          <button onClick={() => { resultado(cinco) }}>Responder</button>
        </div>
      }
      {step === 5 &&
        <p>Você foi {final()}</p>
      }
    </>
  )
}

export default Home;
