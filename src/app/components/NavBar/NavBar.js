import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import  { useRouter } from "next/navigation";

export default function NavBar() {

    const router = useRouter()

    const goHome = () => {
        return router.push('/')
    }

    return (
        <navbar>
            <div className="bg-bege h-28 flex">
                <div className="h-full w-1/5 flex items-center justify-start pl-8"> 
                    <Image src={'/logo.png'} width={115} height={10} alt = 'logo' className="cursor-pointer"  onClick={goHome}/>    
                </div>
                <div className=" h-full w-3/5 items-center flex justify-center">
                    <div className="flex h-8 w-80 rounded-xl bg-white pr-2 pl-2">
                        <input className="h-8 w-80 border-0 outline-none rounded-xl" placeholder="Quick search" />
                        <span className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer text-lg"><IoSearchOutline /></span>
                    </div>
                </div>
                <div className="h-28 w-1/5 flex items-center justify-end space-x-8 pr-8 ">
                    <div className=" h-11 w-11 rounded-full">
                        <Image src={'/userClub.png'} width={44} height={44} alt = 'userClub' className="rounded-full" />
                        
                    </div>
                    <div className=" bg-gray h-12 w-12 rounded-full">
                        <Image src={'/user.png'} width={64} height={64} alt= 'user'/>
                    </div>
                </div>
            </div>
            <div className="bg-vermelho h-16 flex items-center justify-center shadow-xl ">
                <ul className="text-bege flex space-x-12 text-xl">
                    <li>
                        <Link className="hover:text-black transition duration-300 font-semibold" href={"/news"}>NEWS</Link>
                    </li>
                    <li>
                        <Link className="hover:text-black transition duration-300 font-semibold" href={"/clubs"}>CLUBS</Link>
                    </li>
                    <li>
                        <Link className="hover:text-black transition duration-300 font-semibold" href={"/leagues"}>LEAGUES</Link>
                    </li>
                    <li>
                        <Link className="hover:text-black transition duration-300 font-semibold" href={"/social"}>SOCIAL</Link>
                    </li>
                </ul>
                
            </div>
            
             
        </navbar>
    )
}