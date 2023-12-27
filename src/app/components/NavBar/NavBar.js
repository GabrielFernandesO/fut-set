import Link from "next/link";

export default function NavBar() {
    return (
        <navbar>
            <div className="bg-black h-28 flex  ">
                <div className="h-full w-1/5 items-center flex justify-center">
                    <div className="bg-white h-16 w-16 rounded-full">

                    </div>
                </div>
                <div className=" h-full w-3/5 items-center flex justify-center">
                    <input className="h-10 w-96 rounded-xl" />

                </div>
                <div className="h-28 w-1/5 flex items-center justify-center space-x-8  ">
                    <div className="bg-white h-16 w-16 rounded-full">

                    </div>
                    <div className="bg-white h-16 w-16 rounded-full">

                    </div>
                </div>

            </div>
            <div className="bg-yellow-300 h-16 flex items-center justify-center">
                <ul className="flex space-x-12 text-xl">
                    <li>
                        <Link className="hover:text-white transition duration-300 " href={"/home/news"}>NEWS</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition duration-300 " href={"/home/clubs"}>CLUBS</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition duration-300 " href={"/home/leagues"}>LEAGUE</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition duration-300 " href={"/home/social"}>SOCIAL</Link>
                    </li>
                </ul>

            </div>
        </navbar>
    )
}