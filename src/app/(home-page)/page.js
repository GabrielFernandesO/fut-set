'use client'

import MatchCard from "../components/Cards/MatchCard/MatchCard"
import Leagues from "../components/Cards/Leagues/Leagues"
import Odd from "../components/Cards/Odd/Odd"
import TablePlayers from "../components/Cards/TablePlayers/TablePlayers"

export default function Home() {


    return (
        <main className="flex h-screen">
            <div className="bg pt-4 p-4 h-full w-1/4 flex-col items-center flex space-y-6  ">
                <MatchCard></MatchCard>
                <Leagues></Leagues>
            </div>
            <section className="bg h-full w-1/2"></section>
            <div className="pt-4 pb-4 h-full w-1/4  flex-col flex items-center justifiy-center space-y-6 ">
                <TablePlayers></TablePlayers>
            </div>

        </main>
    )
}