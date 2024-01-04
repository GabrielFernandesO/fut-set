export default function MiniOdd() {
    return (
        <div>
             <div className="bg-white h-16 w-72 border-b flex items-center hover:bg-gray cursor-pointer  ">
                    <div className=" h-12 w-72   flex items-center justify-center space-x-4 ">
                        <div className=" h-8 w-8  items-center justify-center flex">
                            <h1 className="text-green">2.65</h1>
                        </div>
                        <h6 className="text-xs">
                            Description of ODD and details about it
                        </h6>
                        <h6 className="text-xs">
                            <p>SEV</p>
                            <p>ARS</p>
                        </h6>
                    </div>
                </div>
        </div>
    )
}