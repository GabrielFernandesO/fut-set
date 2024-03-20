import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PosCard() {
    const [randomNumber, setRandomNumber] = useState(null)
    const [arrayClub, setArrayClub] = useState(null)

    //Função que gera um número aleatório de um array e o retorna.
    function escolherNumeroAleatorio() {
        const numeros = [33, 40, 42, 47, 49, 50, 529, 530, 541, 496, 505, 489, 85, 212, 211, 228];
        const indiceAleatorio = Math.floor(Math.random() * numeros.length);
        //Armazena o número aleatório na variavel randomNumber pelo método set do hook useState
        setRandomNumber(numeros[indiceAleatorio]);

    }

    //Requisição para API
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
            //Armazena a resposta da API na variavel arrayClub
            setArrayClub(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }





/*     useEffect(() => {
            //Condicional para evitar duas chaamdas da Função de random number e Requisição

        if (!randomNumber) {
            escolherNumeroAleatorio();
        }
            //Só irá chamar a requisição quando arrayClub não existir (Ou seja, não tiver sido chamada)
            //E existir um número aleatório já criado
            //Condicional AND
            
        if (!arrayClub && randomNumber) {
            getMatch(randomNumber);
        }


    }, [randomNumber]); */

    return (
        <>
        {/* Criar um mini loading aqui para quando não tiver informação carregada ainda */}
            {arrayClub && (
                <div className=" bg-white h-32 w-72 rounded-xl shadow-lg flex space-x-6 justify-center items-center">

                    <div className="mt-4 flex flex-col items-center justify-center space-y-1">
                        <div className=" bg-bege h-16 w-16 rounded-full">
                            <Image src={arrayClub.response[0].teams.home.logo} height={64} width={64} alt='logoHome'></Image>
                        </div>
                            <h1>{arrayClub.response[0].teams.home.name}</h1>
                    </div>
                    <div className="mb-4 flex-col flex  items-center justify-center space-y-2">
                        <h3 className="text-md text-gray_strong">{arrayClub.response[0].fixture.status.long}</h3>
                        <h1 className="text-xl"><span className="pr-1">{arrayClub.response[0].goals.home}</span>X<span className="pl-1">{arrayClub.response[0].goals.away}</span></h1>
                    </div>
                    <div className="mt-4 flex flex-col items-center justify-center space-y-1">
                        <div className="bg-bege h-16 w-16 rounded-full">
                        <Image src={arrayClub.response[0].teams.away.logo} height={64} width={64} alt='logoAway'></Image>
                        </div>
                            <h1>{arrayClub.response[0].teams.away.name}</h1>
                    </div>
                </div>
            )}

        </>
    )
}