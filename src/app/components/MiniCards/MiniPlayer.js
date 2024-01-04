export default function MiniPlayer(){
    return(
        <div className="bg-white h-16 w-72 border-b flex items-center hover:bg-gray cursor-pointer  ">
                    <div className=" h-12 w-72   flex items-center justify-center space-x-4 ">
                        <div className=" bg-vermelho rounded-full h-8 w-8 ">
                            
                        </div>
                        <h6 className="text-xs">
                            Description of player and details about it
                        </h6>
                        <h6 className="text-xs">
                            <h1 className="text-green">9,89</h1>
                        </h6>
                    </div>
                </div>
    )
}