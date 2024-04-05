'use client'

import MatchCard from "../components/Cards/MatchCard"
import Leagues from "../components/Leagues/Leagues"
import Odd from "../components/Odd/Odd"
import TablePlayers from "../components/TablePlayers/TablePlayers"

export default function Clubs(){
    return (
        <main className="flex h-screen">
        <div className="bg pt-4 p-4 h-full w-1/4 flex-col items-center flex space-y-6  ">
            <MatchCard></MatchCard>
            <Leagues></Leagues>
        </div>
        <section className="bg h-full w-full">
            <div className=" w-full h-1/5 flex   flex-col">
                
                <div className="bg-bege w-full h-1/3 flex justify-center items-center">
                TOP MATCHES
                </div>
                <div className=" h-full w-full flex items-center justify-center space-x-8">
                <h1>Cartões</h1><div className="bg-bege w-8 h-8 rounded-full flex justify-center items-center">1</div>
                <h1>Escanteios</h1><div className="bg-bege w-8 h-8 rounded-full flex justify-center items-center">2</div>
                <h1>Gols</h1><div className="bg-bege w-8 h-8 rounded-full flex justify-center items-center">8</div>
                <h1>Faltas</h1><div className="bg-bege w-8 h-8 rounded-full flex justify-center items-center">5</div>
                </div>
                
            </div>
        </section>
        <div className="pt-4 pb-4 h-full w-1/4  flex-col flex items-center justifiy-center space-y-6 ">
            <Odd></Odd>
            <TablePlayers></TablePlayers>
        </div>

    </main>
    )
}