import Home from '../../components/Home';
import React, { useState, useEffect } from 'react';

// // // primeira pagina coloca 2 links mandando para duas paginas diferentes, 
// // //tratar a condição do splint, e na outra voce vai tratar a condição da query string

// // //Query string
// // //montar um segundo link com 5 opçoes de parametro, voce vai exibir um conteudo Proprio,
// // // condizente com os 5 parametros

export default function Esportes() {
    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
            [key]: value.toString()
        });
    });
    console.log(urlParams, 'urlParams')



    const [queryLoja, setQueryLoja] = useState()
    const [queryLoja1, setQueryLoja1] = useState()
    const [queryLoja2, setQueryLoja2] = useState()
    const [queryLoja3, setQueryLoja3] = useState()
    const [queryLoja4, setQueryLoja4] = useState()

    useEffect(() => {
        if (urlParams.loja === "futebol") {
            setQueryLoja(
                <img src='https://sportamerica.fbitsstatic.net/img/b/65937aa1-f4a2-4312-a874-c56bb4d1b193.jpg' />
            )
        }
        else if (urlParams.loja === "basquete") {
            setQueryLoja(
                <img src='https://thumbs.dreamstime.com/z/menino-e-menina-com-bola-de-futebol-e-basquetebol-na-loja-90567556.jpg' />
            )
        }
        else if (urlParams.loja === "voley") {
            setQueryLoja(
                <img src='https://saopauloparacriancas.com.br/wp-content/uploads/2016/12/moda-infantil-turma-da-moncia-pernambucanas.jpg' />
            )
        }


    }, []);

    useEffect(() => {
        if (urlParams.item1 === "bola") {
            setQueryLoja1(
                <img src='https://http2.mlstatic.com/D_NQ_NP_2X_653147-MLB47935575593_102021-F.webp' />
            )
        }
        else if (urlParams.item1 === "boladebasquete") {
            setQueryLoja1(
                <img src='https://http2.mlstatic.com/D_NQ_NP_769539-MLB49894543511_052022-O.webp' />
            )
        }
        else if (urlParams.item1 === "boladevoley") {
            setQueryLoja1(
                <img src='https://http2.mlstatic.com/D_NQ_NP_990495-MLB45634676903_042021-O.webp' />
            )
        }

    }, []);

    useEffect(() => {
        if (urlParams.item2 === "chuteira") {
            setQueryLoja2(
                <img src='https://a-static.mlcdn.com.br/618x463/chuteira-futebol-de-campo-penalty-k-era-8-infantil/lw/2605-3741/d1d3c34c082f8bef76f2aae9ef303c8a.jpg' />
            )
        }
        else if (urlParams.item2 === "tennisdebasquete") {
            setQueryLoja2(
                <img src='https://m.media-amazon.com/images/I/41NxutTyWcL._AC_SX395_.jpg' />
            )
        }
        else if (urlParams.item2 === "tenisdevoley") {
            setQueryLoja2(
                <img src='https://a-static.mlcdn.com.br/450x450/tenis-masculino-361o-horus-2-azul-basquete-volei-handebol/footeshoes/fel728/853effeb037db09de22bddf0ebca5178.jpg' />
            )
        }

    }, []);

    useEffect(() => {
        if (urlParams.item3 === "caneleira") {
            setQueryLoja3(
                <img src='https://imgcentauro-a.akamaihd.net/900x900/51943902/caneleira-de-futebol-nike-j-guard-adulto-img.jpg' />
            )
        }
        else if (urlParams.item3 === "cestadebasquete") {
            setQueryLoja3(
                <img src='https://http2.mlstatic.com/D_NQ_NP_2X_934697-MLB44825856336_022021-F.webp' />
            )
        }
        else if (urlParams.item3 === "joelheiradevoley") {
            setQueryLoja3(
                <img src='https://images-americanas.b2w.io/produtos/01/00/img/3268217/1/3268217147_4SZ.jpg' />
            )
        }

    }, []);

    useEffect(() => {
        if (urlParams.item4 === "meiao") {
            setQueryLoja4(
                <img src='https://http2.mlstatic.com/D_NQ_NP_872550-MLB31177822807_062019-O.webp' />
            )
        }
        else if (urlParams.item4 === "rededebasquete") {
            setQueryLoja4(
                <img src='https://http2.mlstatic.com/D_NQ_NP_2X_987616-MLB48996510681_022022-F.webp' />
            )
        }
        else if (urlParams.item4 === "rededevoley") {
            setQueryLoja4(
                <img src='https://decathlonpro.vteximg.com.br/arquivos/ids/2530877/rede-volei-de-praia-bvn9004.jpg?v=637218743425330000' />
            )
        }

    }, []);

    return (
        <section className='lojasEsportes'>
            <Home />
            <div className='lojas'>
                <div className='loja'>
                    {queryLoja}
                </div>
                <div className='loja1'>
                    {queryLoja1}
                </div>
                <div className='loja2'>
                    {queryLoja2}
                </div>
                <div className='loja3'>
                    {queryLoja3}
                </div>
                <div className='loja4'>
                    {queryLoja4}
                </div>
            </div>
        </section>
    )
}
