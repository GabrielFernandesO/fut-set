'use client'

import { useState } from "react"
import DuringCard from "../components/Cards/DuringCard"
import PreCard from "../components/Cards/PreCard"
import PosCard from "../components/Cards/PosCard"
import Leagues from "../components/Leagues/Leagues"
import Odd from "../components/Odd/Odd"
import TablePlayers from "../components/TablePlayers/TablePlayers"

export default function Home() {

    const [gameControl, setGameControl] = useState('prematch')

    return (
        <main className="flex h-screen">
            <div className="bg pt-4 pb-4 h-full w-80 flex-col items-center flex  ">
                {gameControl === 'prematch' && (
                    <PreCard></PreCard>
                )}
                {gameControl === 'duringmatch' && (
                    <DuringCard></DuringCard>
                )}
                {gameControl === 'posmatch' && (
                    <PosCard></PosCard>
                )}
                <Leagues></Leagues>
            </div>
            <section className="bg h-full w-[50rem]"></section>
           <div className="h-full flex-col flex items-center justifiy-center ">
           <Odd></Odd>
           <TablePlayers></TablePlayers>
            </div>
           
        </main>
    )
}