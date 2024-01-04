'use client'

import { useState } from "react"
import DuringCard from "../components/Cards/duringCard"
import PreCard from "../components/Cards/preCard"
import PosCard from "../components/Cards/posCard"
import Leagues from "../components/Leagues/Leagues"

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
            <div className=" mt-4 bg-white h-60 w-72 rounded-xl shadow-lg">
                <div className="bg-vermelho rounded-t-xl  h-12 w-72 flex items-center justify-center">
                    <h1 className="text-white">BEST ODDS</h1>
                </div>
                <div className="bg-white h-16 w-72 border-b   "></div>
                <div className="bg-white h-16 w-72 border-b "></div>
                <div className="bg-white h-16 w-72 rounded-b-xl "></div>
               

                
            

            </div>
        </main>
    )
}