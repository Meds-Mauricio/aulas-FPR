import Home from '../home';
import React, { useState, useEffect } from 'react';

// // // primeira pagina coloca 2 links mandando para duas paginas diferentes, 
// // //tratar a condição do splint, e na outra voce vai tratar a condição da query string

// // //Query string
// // //montar um segundo link com 5 opçoes de parametro, voce vai exibir um conteudo Proprio,
// // // condizente com os 5 parametros

export default function Lojas() {
    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
            [key]: value.toString()
        });
    });
    console.log(urlParams, 'urlParams')

    const renderizarLojas = () => {
        if (urlParams.loja === 'riachuello') {
            return (
                <img src='https://logodownload.org/wp-content/uploads/2014/06/riachuelo-logo-1.png' />
            )
        } else if (urlParams.loja === 'americanas') {
            return (
                <img src='https://kemp.com.br/wp-content/uploads/2020/03/banner-logo-lojas-americanas-2.png' />
            )
        } else if (urlParams.loja === 'magazine luiza') {
            return (
                <img src='https://www.omninews.com.br/wp-content/uploads/2019/10/magazine-luiza-2.jpghttps://www.omninews.com.br/wp-content/uploads/2019/10/magazine-luiza-2.jpg' />
            )
        } else {
            return <h1>Não tem mais lojas</h1>
        }
    }
    const renderizarCores = () => {
        if (urlParams.cor === 'Azul') {
            return (
                <section className='azul'>
                    <h1>azul</h1>
                </section>

            )
        } else if (urlParams.cor === 'Amarelo') {
            return (
                <section className='amarelo'>
                    <h1>amarelo</h1>
                </section>

            )
        } else if (urlParams.cor === 'Vermelho') {
            return (
                <section className='vermelho'>
                    <h1>vermelho</h1>
                </section>

            )
        } else {
            return <h1>não tem mais cores</h1>
        }
    }
    const renderizarComodos = () => {
        if (urlParams.comodo === 'Cozinha') {
            return (
                <>
                    <img src='https://casatema.vteximg.com.br/arquivos/ids/801663-300-300/image-c20c7b28d54747c58e837c6cf0e912bc.jpg?v=637486606465900000' />
                </>
            )
        } else if (urlParams.comodo === 'sala') {
            return (
                <>
                    <img src='http://www.moveisplanejadosbauru.com.br/wp-content/uploads/2012/09/banner-salaestar1.jpg' />
                </>
            )
        } else if (urlParams.comodo === 'quarto') {
            return (
                <>
                    <img src='https://blog.iazamoveisdemadeira.com.br/wp-content/uploads/2016/05/1_Quarto-de-casal.jpg' />
                </>
            )
        } else {
            return <h1>Não tem mais comodos</h1>
        }
    }
    const renderizarFornecedores = () => {
        if (urlParams.fornecedor === 'madeira-madeira') {
            return (
                <section>
                    <h1>madeiramadeira</h1>
                    <p>A melhor para você</p>
                </section>
            )
        } else if (urlParams.fornecedor === 'bonatto') {
            return (
                <section>
                    <h1>Móveis Bonatto</h1>
                    <p>Qualidade com Estilo</p>
                </section>
            )
        } else if (urlParams.fornecedor === 'philco') {
            return (
                <section>
                    <h1>Philco</h1>
                    <p>Tem coisas que só a Philco faz Pra você</p>
                </section>
            )
        } else {
            return <h1>não tem mais Fornecedores</h1>
        }
    }

    return (
        <section className='lojasdiversas'>
            <div className='lojas'>
                {renderizarLojas()}
            </div>

            <div className='cores'>
                {renderizarCores()}
            </div>
            <div className='comdos'>
                {renderizarComodos()}
            </div>

            <div className='fornecedor'>
                {renderizarFornecedores()}
            </div>
        </section>
    )
}
