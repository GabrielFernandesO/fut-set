'use client'

import { useState } from "react"
import DuringCard from "../components/Cards/DuringCard"
import PreCard from "../components/Cards/PreCard"
import PosCard from "../components/Cards/PosCard"
import Leagues from "../components/Leagues/Leagues"

export default function Home() {

    const [gameControl, setGameControl] = useState('prematch')

    return (
        <main className="h-screen">
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
        </main>
    )
}