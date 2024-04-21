'use client'

import MatchCard from "../components/Cards/MatchCard/MatchCard"
import Leagues from "../components/Cards/Leagues/Leagues"
import TablePlayers from "../components/Cards/TablePlayers/TablePlayers"
import styles from './page.module.css'
import Image from "next/image"
import SkeletonLoading from "./SkeletonLoading"
import { useState } from "react"

export default function Home() {
    const [loaded, setLoaded] = useState(false)

    return (
        <main className="flex h-full">
            <div className="p-4  h-full w-1/4 flex-col items-center flex space-y-32 ">
                <MatchCard></MatchCard>
                <Leagues></Leagues>
            </div>
            <section className="bg h-full w-1/2 flex flex-col p-4">
                <div className={`${styles.imagePlaceholder} ${loaded ? styles.loaded : ''}`}>
                    <Image
                        src={'/news.jpg'}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={400}
                        height={200}
                        onLoad={() => setLoaded(true)}
                        alt="News-Clubs"
                    />
                </div>
                <div>
                    {loaded ? (
                        <>
                            <h1 className="text-4xl">Exercitation dolor tempor aute non in incididunt esse magna.</h1>
                            <h3>Dolore esse ex ullamco eu est cillum eiusmod anim. Magna culpa occaecat aliqua est veniam ipsum id occaecat dolor cupidatat sunt. Duis Lorem Lorem commodo minim sunt magna laboris consectetur laborum excepteur esse id irure. Minim eu proident proident adipisicing amet. Deserunt non esse ea culpa sunt eiusmod ad labore veniam.
                                Dolor aliquip tempor amet mollit consequat velit reprehenderit aute nisi occaecat qui. Laboris laboris dolore do adipisicing esse sint. Dolore labore qui id quis labore nostrud do. Culpa cupidatat enim proident tempor occaecat est sint enim non aliquip deserunt officia. Sit aliquip aliquip dolore minim aliquip exercitation irure tempor pariatur. Cupidatat ullamco voluptate Lorem eiusmod reprehenderit sit id tempor proident veniam occaecat adipisicing. Cillum eiusmod cupidatat id eu quis laborum ea deserunt.
                                Occaecat magna minim anim magna aute. Occaecat in cupidatat enim dolor enim est consectetur eiusmod occaecat mollit reprehenderit deserunt. Fugiat ut eiusmod commodo anim. Cillum ipsum labore irure reprehenderit consequat ex occaecat elit excepteur ad ut ut.
                            </h3>
                        </>
                    ) : (
                        <SkeletonLoading numberOfItems={1}></SkeletonLoading>
                    )}

                </div>
            </section>
            <div className="p-4 h-full w-1/4  flex-col flex items-center  space-y-6 ">
                <TablePlayers></TablePlayers>
            </div>

        </main>
    )
}