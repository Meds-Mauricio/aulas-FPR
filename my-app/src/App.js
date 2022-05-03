import React, { useState, useEffect } from 'react';
import './App.css';


export default function App() {
    const [detalhes, setDetalhes] = useState({
        titulo: '',
        personagens: [],
        diretor: '',
        descrição: '',
        imagens: [],
        genero: '',
        videos: ''
    })
    const [mostrar, setMostrar] = useState('')

    useEffect(() => {
        if (mostrar === 'leao') {
            setDetalhes({
                titulo: 'O Rei leão',
                personagens: [
                    'Jeremy Irons',
                    'Jmes Earl Jones',
                ],
                diretor: 'Roger Allers, Rob Minkoff',
                descrição: 'Mufasa, o leão que governa Pedra do Rei, ganha um herdeiro, Simba. Embora esteja educando o jovem príncipe para assumir o poder, nenhum deles está preparado para a traição do tio, Scar. O Rei Leão acompanha a jornada atribulada de Simba desde a infância até à idade adulta. Embora encontre diversos obstáculos, o protagonista sobrevive graças à força da amizade e ao exemplo de seu pai.',
                imagens: [
                    <img src='https://cinemacao.com/wp-content/uploads/2019/07/cropped-o-rei-leao-fracasso-1130x590.jpg' />,
                    <img src='https://vejasp.abril.com.br/wp-content/uploads/2019/07/releao.jpg' />,
                ],
                genero: 'animação',
                videos: <iframe width="560" height="315" src="https://www.youtube.com/embed/J57HnR6FPW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            })
        }
        else if (mostrar === 'aranha') {
            setDetalhes({
                titulo: 'Homem aranha sem volta pra casa',
                personagens: [
                    ' Tom Holland',
                    'Jacob Batalon',
                ],
                diretor: 'Jon Watts',
                descrição: 'Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como o herói mais querido do mundo após ter sido revelada pela reportagem do Clarim Diário, com uma gravação feita por Mysterio (Jake Gyllenhaal) no filme anterior. Incapaz de separar sua vida normal das aventuras de ser um super-herói, além de ter sua reputação arruinada por acharem que foi ele quem matou Mysterio e pondo em risco seus entes mais queridos, Parker pede ao Doutor Estranho (Benedict Cumberbatch) para que todos esqueçam sua verdadeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa quando vilões de outras versões de Homem-Aranha de outro universos acabam indo para seu mundo. Agora, Peter não só deter vilões de suas outras versões e fazer com que eles voltem para seu universo original, mas também aprender que, com grandes poderes vem grandes responsabilidades como herói.',
                imagens: [
                    <img src='https://i.ibb.co/fksD2Wz/2.jpg' />,
                    <img src='https://s.aficionados.com.br/imagens/spider-man-no-way-home-3_cke.jpg' />
                ],
                genero: 'ação',
                videos: <iframe width="560" height="315" src="https://www.youtube.com/embed/CyiiEJRZjSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            })
        }
        else if (mostrar === 'vingadores') {
            setDetalhes({
                titulo: 'os vingadores',
                personagens: [
                    'Robert Downey Jr',
                    'Chris Evans, Mark Ruffalo',
                ],
                diretor: 'Joss Whedon',
                descrição: 'Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.',
                imagens: [
                    <img src='https://disneyplusbrasil.com.br/wp-content/uploads/2021/10/Os-Vingadores-Originais-1024x576.jpg' />,
                    <img src='https://img.estadao.com.br/thumbs/640/resources/jpg/8/9/1651021549398.jpg' />
                ],
                genero: 'ficção',
                videos: <iframe width="560" height="315" src="https://www.youtube.com/embed/KeNEGtsCWEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            })
        }
        else if (mostrar === 'velozes') {
            setDetalhes({
                titulo: 'Velozes e furiosos 9',
                personagens: [
                    'Vin Diesel',
                    'Michelle Rodriguez',
                ],
                diretor: 'Justin Lin',
                descrição: 'Em Velozes & Furiosos 9, dois anos após o confronto com a ciber-terrorista Cipher, Dominic Toretto (Vin Diesel) - agora aposentado - e Letty (Michelle Rodriguez) vivem uma vida pacata ao lado de seu filho Brian. Mas a vida dos dois é logo interrompida quando Roman Pearce, Tej Parker e Ramsey chegam com notícias de que, pouco depois de prender Cipher (Charlize Theron), o avião de Mr. Nobody foi atacado por agentes e sequestraram Cipher, precisando da ajuda dele para investigar mais afundo. Acompanhando eles em uma missão, o grupo logo acha nos escombros parte de um dispositivo chamado Projeto Aries. A calmaria é dissipada quando o irmão desaparecido de Dom retorna e rouba o dispositivo deles com um grupo altamente treinado. Jakob (John Cena), um assassino habilidoso e excelente motorista, está trabalhando ao lado de Cipher. Para enfrentá-los, Toretto vai precisar reunir sua equipe novamente, inclusive Han (Sung Kang), que todos acreditavam estar morto',
                imagens: [
                    <img src='https://i.ytimg.com/vi/jzPR475iXYk/maxresdefault.jpg' />,
                    <img src='https://ogimg.infoglobo.com.br/in/24975100-35f-acd/FT1086A/velozes-e-furiosos-9-.jpg' />
                ],
                genero: 'ação',
                videos: <iframe width="560" height="315" src="https://www.youtube.com/embed/NnDGWyfP7q4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            })
        }
        else if (mostrar === 'milagres') {
            setDetalhes({
                titulo: 'Superação o milagre da fé',
                personagens: [
                    'Chrissy Metz',
                    'Topher Grace',
                ],
                diretor: ' Roxann Dawson',
                descrição: 'Durante um passeio com a família em uma manhã de inverno no Lago St Louis, no Missouri, o menino John Smith, de apenas 14 anos, sofre uma queda e se afoga por mais de 15 minutos. Chegando ao hospital, John é considerado morto por mais de uma hora até que sua mãe, Joyce Smith, ao lado do pai e de um pastor, junta todas as suas forças e pede a Deus para que seu filho sobreviva. Sua prece poderosa é responsável por um milagre inédito.',
                imagens: [
                    <img src='https://ogimg.infoglobo.com.br/in/23588705-eb2-9f4/FT1086A/Em-SuperacaoO-Milagre-da-Fe-o-drama-de-uma-mae-herculea.jpg' />,
                    <img src='https://odisseiapop.com.br/wp-content/uploads/2019/04/chrissy-metz-breakthrough-trailer-today-main-181205_b8e2c8bd4850e05ce5616ba006ad4231-760x490.jpg' />
                ],
                genero: 'animação',
                videos: <iframe width="560" height="315" src="https://www.youtube.com/embed/6UrEWMwymOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            })
        }
        else if (mostrar === 'gigante') {
            setDetalhes({
                titulo: 'Desafiando Gigantes',
                personagens: [
                    'Alex Kendrick',
                    'Bailey Cave',
                ],
                diretor: ' Alex Kendrick',
                descrição: 'O treinador de futebol Grant Taylor está com problemas pessoais, enfrentando os pais que querem forçar a escola a substituí-lo. Seguindo a mensagem de um visitante, tenta inspirar a equipe a usar a fé para vencer obstáculos.',
                imagens: [
                    <img src='https://boanoticia.org.br/wp-content/uploads/2021/02/2006_facing_the_giants_002-1024x576-2.jpg' />,
                    <img src='https://i.ytimg.com/vi/Azxbti9nPj4/mqdefault.jpg' />
                ],
                genero: 'animação',
                videos: <iframe width="560" height="315" src="https://www.youtube.com/embed/Er05a6jmn1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            })
        }
    }, [mostrar])
    return (
        <body>
            <>
                <h1>Catálogo de filmes</h1>

                <section>
                    <div>
                        <img className='imagens' src='https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2019/07/O-Rei-Le%C3%A3o-741x438.jpg' onClick={() => setMostrar('leao')} />
                    </div>
                    <div>
                        <img className='imagens' src='https://ovicio.com.br/wp-content/uploads/2022/03/20220317-ovicio-homem-aranha-marvel-sem-volta.jpg' onClick={() => setMostrar('aranha')} />
                    </div>
                    <div>
                        <img className='imagens' src='https://wp.ufpel.edu.br/empauta/files/2019/05/vingadores-ultimato-poster.jpg' onClick={() => setMostrar('vingadores')} />
                    </div>
                    <div>
                        <img className='imagens' src='https://cdn.ome.lt/o4KVf1xxVkdCbqavTCQW-KWURJI=/1200x630/smart/extras/conteudos/Velozes_e_Furiosos_9_poster.jpg' onClick={() => setMostrar('velozes')} />
                    </div>
                    <div>
                        <img className='imagens' src='https://boanoticia.org.br/wp-content/uploads/2021/02/image.jpg' onClick={() => setMostrar('milagres')} />
                    </div>
                    <div>
                        <img className='imagens' src='http://1.bp.blogspot.com/-RfdBjOJK0xw/VSQdp4t99-I/AAAAAAAABRA/b2BdlAwpLtU/s1600/imagem1.jpg' onClick={() => setMostrar('gigante')} />
                    </div>
                </section>
                {
                    mostrar && (
                        <div className='catalogo'>
                            <div>
                                <h2> {detalhes.titulo}</h2>
                            </div>

                            <div>
                                <p> {detalhes.personagens}</p>
                            </div>

                            <div>
                                <p> {detalhes.diretor}</p>
                            </div>

                            <div>
                                <p> {detalhes.descrição}</p>
                            </div>

                            <div>
                                <p> {detalhes.imagens}</p>
                            </div>

                            <div>
                                <p> {detalhes.genero}</p>
                            </div>

                            <div>
                                <p> {detalhes.videos}</p>
                            </div>
                        </div>
                    )
                }
            </>
        </body>
    )
}

