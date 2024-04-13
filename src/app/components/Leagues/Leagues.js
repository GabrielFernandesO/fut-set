import { useState, useEffect } from "react";
import MiniLeague from "../MiniCards/MiniLeague";
import axios from 'axios';
import SkeletonLoading from "./SkeletonLoading";

export default function Leagues() {

    const [arrayLeague, setArrayLeague] = useState(null);


    useEffect(() => {

        const controller = new AbortController()

        // Requisição para API
        async function getLeague() {

            const options = {
                method: 'GET',
                url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
                signal: controller.signal,
                headers: {
                    'X-RapidAPI-Key': '56055e130dmshe17a666f9a8c569p1ac1f4jsn69aa95a23715',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                //Converte obj em array para ser mapeado no jsx
                const array = await (response.data.response)
                const leagues = [39, 78, 135, 140, 61, 13, 2, 3, 94]
                const finalLeagues = array.filter(object => leagues.includes(object.league.id))

                // Armazena a resposta da API na variável arrayLeague
                setArrayLeague(finalLeagues);
                localStorage.setItem('lastReqLeagues', Date.now())
                localStorage.setItem('arrayLeagues', JSON.stringify(finalLeagues))

            } catch (error) {
                console.error(error);
            }
        }
        //Capturando variaveis do LocalStorage
        const lastReq = localStorage.getItem('lastReqLeagues');
        //5 dias em milisegundos 
        const timeForReq = 432000000
        //Condicional para Req
        if (!lastReq || Date.now() - lastReq >= timeForReq) {
            getLeague();
            //Caso não satisfaça a condição, o else mantem os dados no localStorage e a req fica travada
        } else {
            const storageData = localStorage.getItem('arrayLeagues');
            if (storageData) {
                const storageDataJson = JSON.parse(storageData)
                setArrayLeague(storageDataJson)

            }
        }

        return () => {
            console.log('Desmontando componente e cancelando req');
            controller.abort();
        }

    }, []);


    console.log("Array League:", arrayLeague)


    return (
        <>

            <div className="w-full bg-branco h-96 rounded-b-2xl  shadow-lg ">
                <div className="bg-bege h-12 w-full rounded-t-xl justify-center flex items-center">
                    <h1 className="text-white">LEAGUES</h1>
                </div>
                <section className="overflow-y-auto w-full h-full rounded-b-2xl">
                    {arrayLeague ? (
                        <>
                            {arrayLeague.map((leagueData, index) => (
                                <MiniLeague key={index} nomeLiga={leagueData.league.name} imgURL={leagueData.league.logo} />
                            ))}
                        </>
                    ) : (
                        <SkeletonLoading></SkeletonLoading>
                    )}
                </section>
            </div>
        </>

    )
}
