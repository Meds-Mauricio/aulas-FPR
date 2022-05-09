import React, { useState, useEffect } from 'react';
import Home from '../../components/Home';

//SPLIT
// montar um link que tenha 3 opções de parâmetro, vai exibir um conteudo
// diferente para cada caso

export default function setorFeminina() {
    const url = window.location.href
    const splitLoja = url.split('&')
    const splitLoja1 = splitLoja[0].split('loja=')[1]
    const splitSlogan = splitLoja[1].split('slogan=')[1]
    const splitSetor = splitLoja[2].split('setor=')[1]

    // console.log(splitLoja, 'splitLoja')
    // console.log(splitSetor, 'splitSetor')

    const [loja, setLoja] = useState()
    const [setor, setSetor] = useState()
    const [tipo, setTipo] = useState()

    useEffect(() => {
        if (splitLoja1 === "pernambucanas") {
            setLoja(
                <img src='https://www.vagasecursos.com/wp-content/uploads/pernambucanas.gif' />
            )
        }
        else if (splitLoja1 === "americanas") {
            setLoja(
                <img src='https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/657486/regular_4dda1ee4a4f732e5c02a2f06964fa45c.jpg' />
            )
        }
        else if (splitLoja1 === "lojas100") {
            setLoja(

                <img src='https://www.lojascem.com.br/site/wp-content/uploads/2016/09/logo-lojas-cem.png' />
            )
        }
        else {
            setLoja(
                <h1>Tente novamente</h1>
            )
        }
    }, []);

    useEffect(() => {
        if (splitSlogan === "danossacasaprasuacasa") {
            setSetor(
                <img src='https://1.bp.blogspot.com/-YK904eVuq_g/VWOSNyl9YJI/AAAAAAABYnw/UQoDEOXRYUc/s1600/casas%2Bslogan.jpg' />
            )
        }
        else if (splitSlogan === "grandesmarcaspreçosbaixostodososdias") {
            setSetor(
                <img src='https://1.bp.blogspot.com/-WR734RsnCcg/Xvpv6djfbJI/AAAAAAABytw/CBhx6iQlwXEKAGGtdSkbeH4WdrocOopvgCLcBGAsYHQ/s1600/americanas%2Bslogan.jpg' />
               

            )
        }
        else if (splitSlogan === "garantiadepreçosbaixos")
         {
            setSetor(
                <img src='https://lh3.googleusercontent.com/p/AF1QipN7v-cle7gX5Vv8uHnIv0c7Pq_1JeOw0o5CXYAH=s1600-w400' />
            )
        }
        else {
            setSetor(
                <h1>Tente novamente</h1>
            )
        }
    }, []);

    useEffect(() => {
        if (splitSetor === "pernambucanasinfantil") {
            setTipo(
                <img src='https://photos.enjoei.com.br/conjunto-infantil-frio-70338031/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yMTUzODkzOC81MGIwOWE5NDUyZDM2ZTVjZWIzNWUzOTVlMmM2ZTlhOC5qcGc' />
            )
        }
        else if (splitSetor === "americanasinfantil") {
            setTipo(
                <img src='https://blogdoanalia.shoppinganaliafranco.com.br/wp-content/uploads/2017/11/Moda_INF.jpg' />
            )
        }
        else if (splitSetor === "lojasceminfantil") {
            setTipo(
                <img src='https://blog.passarela.com.br/wp-content/uploads/2018/09/capamodainfantil.jpg' />
            )
        }
        else {
            setTipo(
                <h1>Tente novamente</h1>
            )
        }
    }, []);

    return (
        <section className='imagens'>
            <Home />
            <div className='pernambucanas'>
                {loja}
                {setor}
                {tipo}
            </div>
        </section>
    )
}

