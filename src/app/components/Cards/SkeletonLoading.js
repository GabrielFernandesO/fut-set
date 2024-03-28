export default function SkeletonLoading() {
    /* criar props para adaptar a cada elemento que quisermos, no caso ali tem que adaptar ao que estiver dentro
    da div ou algo assim, mantendo a div normal */
    return (

<>
                <div className="w-1/3 space-y-2  flex flex-col items-center justify-center ">
                    <div className="  h-16 w-16 rounded-full bg-gradient-to-r from-gray to-silver animate-pulse">

                    </div>
                    <h1 className='bg-gradient-to-r from-gray to-silver animate-pulse  text-transparent w-24 h-4'></h1>
                </div>
                <div className="h-full w-1/3  flex-col flex  items-center  ">
                    <h3 className="mt-4 bg-gradient-to-r from-gray to-silver text-transparent w-24 h-4 animate-pulse"></h3>
                    <h1 className="text-5xl font-bold"><span className="pr-2"></span><span className="pl-2"></span></h1>
                </div>
                <div className="w-1/3 space-y-2 flex flex-col items-center justify-center">
                    <div className=" h-16 w-16 rounded-full bg-gradient-to-r from-gray to-silver animate-pulse">
                    </div>
                    <h1 className="bg-gradient-to-r from-gray to-silver text-transparent w-24 h-4 animate-pulse"></h1>
                </div>
         
                </>
       
    )
}

