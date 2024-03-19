import axios from 'axios';
import { useEffect, useState } from 'react';
export default function PosCard() {
    const [randomNumber, setRandomNumber] = useState(null) 
    const [arrayClub, setArrayClub] = useState(null)
    
 

    
    
    useEffect(() => {
        function escolherNumeroAleatorio() {
            const numeros = [33, 40, 42, 47, 49, 50, 529, 530, 541, 496, 505, 489, 85, 212, 211, 228];
            const indiceAleatorio = Math.floor(Math.random() * numeros.length);
            return numeros[indiceAleatorio];
        }

        const numeroAleatorio = escolherNumeroAleatorio();
        setRandomNumber(numeroAleatorio);

        async function getMatch(numero) {
            const options = {
                method: 'GET',
                url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
                params: {
                    last: 1,
                    team: `${numero}`,
                    season: '2023'
                },
                headers: {
                    'X-RapidAPI-Key': '56055e130dmshe17a666f9a8c569p1ac1f4jsn69aa95a23715',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                setArrayClub(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        if (randomNumber !== null) {
            getMatch(randomNumber);
            console.log(arrayClub, 'essa e avriael')
        }
    }, [randomNumber]);

    return (
        <div className=" bg-white h-32 w-72 rounded-xl shadow-lg flex space-x-6 justify-center items-center">

            <div className=" flex flex-col items-center justify-center space-y-1">
                <div className=" bg-bege h-16 w-16 rounded-full"></div>
                <h1>
                    ARSENAL
                </h1>
            </div>
            <div className="mb-4 flex-col flex  items-center justify-center space-y-2">
                <h3 className="text-md text-gray_strong">Finished</h3>
                <h1 className="text-xl"><span className="pr-1">3</span>X<span className="pl-1">1</span></h1>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center space-y-1">
                <div className="bg-bege h-16 w-16 rounded-full"></div>
                <h1>
                    Everton
                </h1>
            </div>
        </div>
    )
}