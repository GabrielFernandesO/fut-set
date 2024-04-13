import { useState } from 'react';
import { IconContext } from 'react-icons';
import * as ReactIcons from 'react-icons/fa'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";


export default function Input({ name, spanIcon, type, placeholder, onChange }) {
    const Icon = ReactIcons[spanIcon]

    const [showPass, setShowPass] = useState(false)

    function togglePassword() {
        setShowPass(!showPass)
    }

    return (
        <>
            {type !== 'password' && (
                <div className="flex flex-col">
                    <label>{name}:</label>
                    <div className="flex items-center w-[15rem] border-b-2 border-gray-200 focus-within:border-gray-300 pl-1">
                        <span className="pr-1">
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                <Icon className="text-gray-500" />
                            </IconContext.Provider>
                        </span>
                        <input type={type} className="h-7 w-64 border-0 outline-none autofill:bg-white" placeholder={placeholder} onChange={onChange}></input>
                    </div>
                </div>
            )}

            {type === 'password' && (
                <div className="flex flex-col" >
                    <label>{name}:</label>
                    <div className="flex items-center w-[15rem] border-b-2 border-gray-200 focus-within:border-gray-300 pl-1">
                        <span className="pr-0.5">
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                <Icon className="text-gray-500" />
                            </IconContext.Provider>
                        </span>

                        <input type={!showPass ? "password" : "text"}
                            className="h-7 w-64 border-0 outline-none autofill:bg-white" placeholder={placeholder} onChange={onChange}></input>


                        <span className="pr-2 cursor-pointer">
                            {!showPass && (
                                <LuEye onClick={togglePassword} />
                            )}
                            {showPass && (
                                <LuEyeOff onClick={togglePassword} />
                            )}
                        </span>

                    </div>

                </div>
            )}

        </>

    )
}