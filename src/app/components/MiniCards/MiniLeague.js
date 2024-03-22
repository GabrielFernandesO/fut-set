export default function MiniLeague({nomeLiga,imgURL}){
    return(
        <div className="bg-white h-16 w-full  flex items-center hover:bg-gray cursor-pointer  ">
                    <div className=" pl-4 pr-4   flex items-center justify-center space-x-4 p-1">
                        <div className=" bg-bege rounded-full h-8 w-8 flex justify-center items-center ">
                            {imgURL}
                        </div>
                        <h6 className="text-md">
                        {nomeLiga}
                        </h6>
                         
                    </div>
                </div>
    )
}