import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from "react";
import SkeletonLoading from "./SkeletonLoading"

export default function MiniPlayer() {

    const [arrayScores, setArrayScores] = useState(null);

    useEffect(() => {
        //Para abortar a req durante a mudança de página, caso ela ainda esteja rodando
        const controller = new AbortController()

        async function getTopScores() {

            //Cria numero aleatorio
            const numeros = [39, 78, 135, 140, 61, 13, 2, 3, 94];
            const indiceAleatorio = Math.floor(Math.random() * numeros.length);
            //Aramazena o numero aleatorio cada vez q roda a function
            const randomNumber = numeros[indiceAleatorio]

            const anoAtual = new Date().getFullYear();
            const anoAnterior = anoAtual - 1;


            const options = {
                method: 'GET',
                url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
                signal: controller.signal,
                params: {
                    league: `${randomNumber}`,
                    season: `${anoAnterior}`
                },
                headers: {
                    'X-RapidAPI-Key': '56055e130dmshe17a666f9a8c569p1ac1f4jsn69aa95a23715',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const data = await response.data.response

                setArrayScores(data)
                //Armazena o momento da hora q a req foi feita
                localStorage.setItem('lastReqScores', Date.now())
                //Armazena o array no localstorage
                //Pois quando muda o state a variavel setada muda de estado e volta a null
                localStorage.setItem('arrayScores', JSON.stringify(data))

                console.log('SCORES AQUI!', data);
            } catch (error) {
                console.error(error);
            }
        }

        //Variavel que tem o tempo que a req foi feita
        const lastReq = localStorage.getItem('lastReqScores')
        //limite maximo para outra req
        const hourMiliSeconds = 36000000

        //If para verificar se ouve req ou se o tempo limite ultrapassou 1 hr para atualização de dados
        //Caso um dos dois seja verdadeiro nesta condição, o if etnrará e chaamrá a api
        if (!lastReq || Date.now() - lastReq >= hourMiliSeconds) {
            getTopScores();
        } else {
            //caso n esteja no tempo de refazer a req, pegamos o array que esta no storage e convertemos par ajson novamente
            //e armazenamos no arrayClub para que os dados permaneçam mesmo no f5
            //Porque como o useState reatualiza pós f5 e volta a ser null, ele puxaria uma nova req, e isso 
            //Gastaria muitas reqs, então para não gastar, pós ele ter feito req e não ter passado o tempo,
            //Armazenamos os dados da ultima req no storage para ser utilizando mesmo nos F5, sem que haja req na api
            const storedData = localStorage.getItem('arrayScores');
            if (storedData) {
                const arrayData = JSON.parse(storedData)
                console.log('JSON SCORES', arrayData)
                setArrayScores(arrayData);
            }
        }
        ///Quando desmonta o componente se estiver fazendo req ele cancela, isso melhora a performance da aplicação
        //Sempre deve ser usado, ainda mais para aplicações cuja api retorna muitos dados
        return () => {
            controller.abort();
        }

        //Array de dependencias do useEffect faz com que quando mude de estado ele chame o useEffect
        //No caso cquando arrayClub mudar de estado o useeffect é chamado.
        //Por isso se for passar algum parametro, tem de verificar bem se não entra em looping.

    }, [])

    return (
        <>
            {arrayScores ? (
                <>
                  
                    {arrayScores.map((score, index) => (
                        <div className="bg-white h-16 w-full flex items-center hover:bg-gray cursor-pointer" key={index}>
                            <div className=" h-full w-full   flex items-center justify-center text-center">
                                <div className="flex w-3/12 justify-center items-center">
                                    <Image src={score.player.photo} width={40} height={40} alt='playerIMG' className='rounded-full' />
                                    <Image src={score.statistics[0].team.logo} width={15} height={15} alt='TeamLogo' className='mt-4' />
                                </div>
                                <h6 className="text-sm w-1/2">
                                    {score.player.name}
                                </h6>
                                <h6 className="w-3/12">{score.statistics[0].goals.total}</h6>
                            </div>
                        </div>
                    ))}
                </>

            ) : (
                <SkeletonLoading></SkeletonLoading>
            )}

        </>
    )
}