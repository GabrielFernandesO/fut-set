export default function PosCard() {
    return (
        <div className=" bg-white h-32 w-72 rounded-xl shadow-lg flex space-x-6 justify-center items-center">

            <div className="mt-4 flex flex-col items-center justify-center space-y-1">
                <div className=" bg-vermelho h-16 w-16 rounded-full"></div>
                <h1>
                    Arsenal
                </h1>
            </div>
            <div className="mb-4 flex-col flex  items-center justify-center space-y-2">
                <h3 className="text-md text-gray_strong">Finished</h3>
                <h1 className="text-xl"><span className="pr-1">3</span>X<span className="pl-1">1</span></h1>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center space-y-1">
                <div className="bg-vermelho h-16 w-16 rounded-full"></div>
                <h1>
                    Everton
                </h1>
            </div>
        </div>
    )
}