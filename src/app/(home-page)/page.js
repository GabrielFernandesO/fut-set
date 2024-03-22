'use client'

import { useState } from "react"
import DuringCard from "../components/Cards/duringCard"
import PreCard from "../components/Cards/preCard"
import PosCard from "../components/Cards/posCard"
import Leagues from "../components/Leagues/Leagues"
import Odd from "../components/Odd/Odd"
import TablePlayers from "../components/TablePlayers/TablePlayers"

export default function Home() {

    const [gameControl, setGameControl] = useState('posmatch')

    return (
        <main className="flex h-screen">
            <div className="bg pt-4 p-4 h-full w-1/4 flex-col items-center flex space-y-6  ">
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
            <section className="bg h-full w-1/2"></section>
           <div className="pt-4 pb-4 h-full w-1/4  flex-col flex items-center justifiy-center space-y-6 ">
           <Odd></Odd>
           <TablePlayers></TablePlayers>
            </div>
           
        </main>
    )
}