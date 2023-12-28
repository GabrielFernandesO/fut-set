import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

export default function NavBar() {
    return (
        <navbar>
            <div className="bg-neutral-800 h-28 flex">
                <div className="h-full w-1/5 flex items-center justify-start pl-8">
                    <div className="bg-white h-16 w-16 rounded-full">
                    </div>
                </div>
                <div className=" h-full w-3/5 items-center flex justify-center">
                    <div className="flex h-8 w-80 rounded-xl bg-white pr-2 pl-2">
                        <input className="h-8 w-80 border-0 outline-none rounded-xl" placeholder="Quick search" />
                        <span className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer text-lg"><IoSearchOutline /></span>
                    </div>
                </div>
                <div className="h-28 w-1/5 flex items-center justify-end space-x-8 pr-8 ">
                    <div className="bg-white h-16 w-16 rounded-full">
                    </div>
                    <div className="bg-white h-16 w-16 rounded-full">
                    </div>
                </div>
            </div>
            <div className="bg-amber-200 h-16 flex items-center justify-center">
                <ul className="flex space-x-12 text-xl">
                    <li>
                        <Link className="hover:text-white transition duration-300 font-semibold" href={"/home/news"}>NEWS</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition duration-300 font-semibold" href={"/home/clubs"}>CLUBS</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition duration-300 font-semibold" href={"/home/leagues"}>LEAGUES</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition duration-300 font-semibold" href={"/home/social"}>SOCIAL</Link>
                    </li>
                </ul>

            </div>
        </navbar>
    )
}