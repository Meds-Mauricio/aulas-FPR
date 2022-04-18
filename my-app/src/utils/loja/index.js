export const loja = (instrumento) => {
     if(instrumento === "guitarra"){
         console.log('tem cordas')
     }

     else if (instrumento === 'bateria'){
        console.log('tem pedal')
     }

     else if (instrumento === 'microfone'){
        console.log('tem fios')
    }

     else {
        console.log('não existe esse instrumento')
     }
}

export const igreja = (ibav) => {
    switch (ibav){
        case "Manoel": console.log('Pr. Presidente'); break;
        case "Darli": console.log('Pra. Kids'); break;
        case "Reginaldo": console.log('Pr. dos Jovens'); break;
        default:
            console.log('Não atende nenhuma das opções')
    }
}



