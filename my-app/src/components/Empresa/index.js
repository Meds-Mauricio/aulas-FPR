import React, { useState, useEffect } from 'react';

// export default function Empresa() {
//     const [funcionario1, setfuncionario1] = useState('Marcos')
//     const [funcionario2, setfuncionario2] = useState('Rogério')
//     const [funcionario3, setfuncionario3] = useState('Silvio')
//     const [funcionario4, setfuncionario4] = useState('Fernando')
//     const [funcionario5, setfuncionario5] = useState('Manoel')
//     const [funcionario6, setfuncionario6] = useState('Gilberto')
//     const [funcionario7, setfuncionario7] = useState('Luan')
//     const [funcionario8, setfuncionario8] = useState('Douglas')
//     const [funcionario9, setfuncionario9] = useState('Lucas')
//     const [funcionario10, setfuncionario10] = useState('Marcio')

//     const [setor, setSetor] = useState(0)

//     useEffect(() => {
//         if (setor === 0) {
//             setfuncionario1('Marcos')
//             setfuncionario2('Rogério')
//             setfuncionario3('Silvio')
//             setfuncionario4('Fernando')
//             setfuncionario5('Manoel')
//             setfuncionario6('Gilberto')
//             setfuncionario7('Luan')
//             setfuncionario8('Douglas')
//             setfuncionario9('Lucas')
//             setfuncionario10('Marcio')
//         }
//         else if (setor === 1) {
//             setfuncionario1('Mirian')
//             setfuncionario2('Rita')
//             setfuncionario3('Marta')
//             setfuncionario4('Sophia')
//             setfuncionario5('Renata')
//             setfuncionario6('Lúcia')
//             setfuncionario7('Maria')
//             setfuncionario8('Fernanda')
//             setfuncionario9('Julia')
//             setfuncionario10('Kátia')
//         }
//         else {
//             setfuncionario1('Heloisa')
//             setfuncionario2('Nani')
//             setfuncionario3('Thauane')
//             setfuncionario4('Marquinhos')
//             setfuncionario5('Mauricio')
//             setfuncionario6('Danielle')
//             setfuncionario7('Gerônimo')
//             setfuncionario8('Cicero')
//             setfuncionario9('Vandereléia')
//             setfuncionario10('Bruno')
//         }
//     },
//         [setor]);

//     return (
//         <section className='return'>
//             <div className='funcionarios'>
//                 {funcionario1}<br />
//                 {funcionario2}<br />
//                 {funcionario3}<br />
//                 {funcionario4}<br />
//                 {funcionario5}<br />
//                 {funcionario6}<br />
//                 {funcionario7}<br />
//                 {funcionario8}<br />
//                 {funcionario9}<br />
//                 {funcionario10}<br />
//             </div>
//             <div className='setSetor'>
//                 <button onClick={() => setSetor(setor + 1)}>mudar</button>
//             </div>
//         </section>
    )
}