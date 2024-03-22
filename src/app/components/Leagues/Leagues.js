import { useState, useEffect } from "react";
import MiniLeague from "../MiniCards/MiniLeague";
import axios from 'axios';

export default function Leagues() {

    const [arrayLeague, setArrayLeague] = useState(null);
    const [callApi, setCallApi] = useState(false);

    // Requisição para API
    async function getLeague() {
        const leagues = '39-78-135-140-61-13-2-3-94'
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {
                ids: `${leagues}`
            },
            headers: {
                'X-RapidAPI-Key': '56055e130dmshe17a666f9a8c569p1ac1f4jsn69aa95a23715',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            //Converte obj em array para ser mapeado no jsx
            const array = await Object.values(response.data.response)
            // Armazena a resposta da API na variável arrayLeague
            setCallApi(true);
            setArrayLeague(array);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (!arrayLeague) {
            getLeague();
        }
    }, [arrayLeague]);


    console.log("Array League:", arrayLeague)

    return (
        <div className="w-full bg-branco h-96 rounded-xl shadow-lg">
            <div className="bg-bege h-10 w-full rounded-t-xl justify-center flex items-center">
                <h1 className="text-white">LEAGUES</h1>
            </div>

            {arrayLeague !== null && (
                <>
                    {arrayLeague.map((leagueData, index) => (
                        <MiniLeague key={index} nomeLiga={leagueData.league.name} imgURL={leagueData.league.logo} />
                    ))}
                </>
            )}
        </div>
    )
}
