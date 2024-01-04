import MiniPlayer from "../MiniCards/MiniPlayer"
export default function TablePlayers(){
    return (
        <section>
            <div className="mt-4 bg-white h-80 w-72 rounded-xl shadow-lg">
            <div className="bg-vermelho rounded-t-xl  h-12 w-72 flex items-center justify-center">
                    <h1 className="text-white">TOP PLAYERS</h1>
                  
                </div>
                <div className="bg-white h-16 w-72 border-b   ">
                <MiniPlayer></MiniPlayer>
                </div>
            </div>
        </section>
    )
}