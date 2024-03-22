import { useState, useEffect } from "react";
import MiniLeague from "../MiniCards/MiniLeague";
import axios from 'axios';

export default function Leagues() {
    
    const [arrayLeague, setArrayLeague] = useState([]);
    const [callApi, setCallApi] = useState(false);

    // Requisição para API
    async function getLeague(numero) {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {
                ids: '39-78-135-140-61-13-2-3-94'
            },
            headers: {
                'X-RapidAPI-Key': '56055e130dmshe17a666f9a8c569p1ac1f4jsn69aa95a23715',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            // Armazena a resposta da API na variável arrayLeague
            setCallApi(true);
            setArrayLeague(response.data);
            console.log("Dados da API:", response.data); // Adiciona um log para depurar
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (!callApi){
            getLeague();
        }
    }, [callApi]);

  
    console.log("Array League:", arrayLeague); // Adiciona um log para depurar

    return (
        <div className="w-full bg-branco h-96 rounded-xl shadow-lg">
            <div className="bg-bege h-10 w-full rounded-t-xl justify-center flex items-center">
                <h1 className="text-white">LEAGUES</h1>
            </div>
            {arrayLeague && arrayLeague.forEach((league, index) => (
                <MiniLeague key={league.league.id} nomeLiga={league.league.name} imgURL={league.league.logo} />
            ))}
        </div>
    )
}
