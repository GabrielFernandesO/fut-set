import Image from "next/image"

export default function MiniLeague({nomeLiga,imgURL}){
    return(
        <div className="bg-white h-16 w-full  flex items-center hover:bg-gray cursor-pointer  ">
                    <div className=" pl-4 pr-4   flex items-center justify-center space-x-4 p-1">
                        
                        <Image src={imgURL} width={32} height={32} alt="logoleague"></Image>
                        <h6 className="text-md">
                        {nomeLiga}
                        </h6>
                         
                    </div>
                </div>
    )
}