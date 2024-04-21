import MiniPlayer from "../../MiniCards/MiniPlayer/MiniPlayer"
export default function TablePlayers() {
    return (
        <section className="w-full h-full ">
            <div className=" bg-white h-80 w-full rounded-xl shadow-lg">
                <div className="bg-bege rounded-t-xl  h-10 w-full flex items-center justify-center">
                    <h1 className="text-white">TOP SCORES</h1>
                </div>
                <div className="flex justify-center items-center w-full bg-gray_weak p-2">
                    <ul className="flex w-full justify-center text-center space-x-12">
                        <li className="w-3/5"> Player</li>
                        <li className="w-1/2"> Name</li>
                        <l1 className='w-3/5'> Goals</l1>
                    </ul>
                </div>
                <div className="bg-white h-full w-full overflow-y-auto rounded-b-2xl">
                    <MiniPlayer></MiniPlayer>
                </div>
            </div>
        </section>
    )
}