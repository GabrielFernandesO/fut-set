import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SkeletonLoading from "./SkeletonLoading"

export default function MatchCard() {
    const [arrayClub, setArrayClub] = useState(null)

    useEffect(() => {
        //Controler para que haja abort de reqs quando trocar de componente (o que faz com que o atual desmonte)
        //Portanto tudo desde a req com o parametro de signal deve estar dentro do useEffect, que retona um abort
        const controller = new AbortController()
        //Requisição para API
        async function getMatch() {

            //Cria numero aleatorio
            const numeros = [33, 40, 42, 47, 49, 50, 529, 530, 541, 496, 505, 489, 85, 212, 211, 228];
            const indiceAleatorio = Math.floor(Math.random() * numeros.length);
            //Aramazena o numero aleatorio cada vez q roda a function
            const randomNumber = numeros[indiceAleatorio]

            const options = {
                method: 'GET',
                url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
                params: {
                    last: 1,
                    team: `${randomNumber}`,
                    season: '2023'
                },
                signal: controller.signal,
                headers: {
                    'X-RapidAPI-Key': '56055e130dmshe17a666f9a8c569p1ac1f4jsn69aa95a23715',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                //Armazena a resposta da API na variavel arrayClub
                setArrayClub(response.data);
                //Armazena o momento da hora q a req foi feita
                localStorage.setItem('lastReqMatch', Date.now())
                //armazena o array em STRING no local storage pq ele só aceita string, logo precisa converter em string o json
                //e depois converter para JSON.parse
                localStorage.setItem('arrayMatch', JSON.stringify(response.data))
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }


        //EM AMBIENTE DE DEV O USEFFECT MONTA E REMONTA POR ISSO CHAMA 2X
        //MAS EM BUILD/ PRODUÇÃO NÃO IRÁ ACONTECER

        //armazena no storage a ultima req feita o tempo
        const lastReq = localStorage.getItem('lastReqMatch')
        //limite maximo para outra req
        const hourMiliSeconds = 36000000

        //If para verificar se ouve req ou se o tempo limite ultrapassou 1 hr para atualização de dados
        //Caso um dos dois seja verdadeiro nesta condição, o if etnrará e chaamrá a api
        if (!lastReq || Date.now() - lastReq >= hourMiliSeconds) {
            getMatch();
        } else {
            //caso n esteja no tempo de refazer a req, pegamos o array que esta no storage e convertemos par ajson novamente
            //e armazenamos no arrayClub para que os dados permaneçam mesmo no f5
            const storedData = localStorage.getItem('arrayMatch');
            if (storedData) {
                const arrayData = JSON.parse(storedData)
                console.log('JSON TIMEEEEEEEE',arrayData)
                setArrayClub(arrayData);
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
    }, []);

    return (

        <div className=" bg-white h-36 w-full rounded-xl shadow-lg flex justify-center items-center">
            {arrayClub ? (
                <>
                    <div className="w-1/3 space-y-2  flex flex-col items-center justify-center ">
                        <div className="  h-16 w-16 rounded-full">
                            <Image src={arrayClub.response[0].teams.home.logo} height={64} width={64} alt='logoHome'></Image>
                        </div>
                        <h1>{arrayClub.response[0].teams.home.name}</h1>
                    </div>
                    <div className="h-full w-1/3  flex-col flex  items-center  ">
                        <h3 className="mt-4 text-md text-gray_strong">{arrayClub.response[0].fixture.status.long}</h3>
                        <h1 className="text-5xl font-bold"><span className="pr-2">{arrayClub.response[0].goals.home}</span>-<span className="pl-2">{arrayClub.response[0].goals.away}</span></h1>
                    </div>
                    <div className="w-1/3 space-y-2 flex flex-col items-center justify-center ">
                        <div className=" h-16 w-16 rounded-full">
                            <Image src={arrayClub.response[0].teams.away.logo} height={64} width={64} alt='logoAway'></Image>
                        </div>
                        <h1>{arrayClub.response[0].teams.away.name}</h1>
                    </div>
                </>
            ) : (
                <SkeletonLoading>

                </SkeletonLoading>
            )}
        </div>
    )
}