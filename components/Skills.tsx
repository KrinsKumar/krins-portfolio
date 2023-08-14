"use client"

import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

const Skills = () => {

    const { theme, setTheme } = useTheme();
    const [selected, setSelected] = useState("all")

    const frontClicked = () => {
        setSelected("front")
    }
    const backClicked = () => {
        setSelected("back")
    }
    const MiscClicked = () => {
        setSelected("misc")
    }
    const allClicked = () => {
        setSelected("all")
    }

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
                <h2 className={`text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 ${theme == "dark" ? "dark:text-gray-200" : ""}`}>Skills()</h2>

                <div className="grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20 mt-8">
                    <div className="col-span-6 text-center">
                        <button className={`col-span-6 text-center rounded px-8 py-3 text-sm font-medium transition hover:rotate-2 hover:scale-110 border border-indigo-600 ${selected == "all" ? "bg-indigo-600 text-white" : "text-indigo-600"}`} onClick={allClicked}>
                            All()
                        </button>
                    </div>
                    <div className="col-span-6 text-center">
                        <button className={`col-span-6 text-center rounded px-8 py-3 text-sm font-medium transition hover:rotate-2 hover:scale-110 border border-indigo-600 ${selected == "front" ? "bg-indigo-600 text-white" : "text-indigo-600"}`} onClick={frontClicked}>
                            FrontEnd()
                        </button>
                    </div>

                    <div className="col-span-6 text-center">
                        <button className={`col-span-6 text-center rounded px-8 py-3 text-sm font-medium transition hover:rotate-2 hover:scale-110 border border-indigo-600 ${selected == "back" ? "bg-indigo-600 text-white" : "text-indigo-600"}`}onClick={backClicked}>
                            BackEnd()
                        </button>
                    </div>

                    <div className="col-span-6 text-center">
                        <button className={`col-span-6 text-center rounded px-8 py-3 text-sm font-medium transition hover:rotate-2 hover:scale-110 border border-indigo-600 ${selected == "misc" ? "bg-indigo-600 text-white" : "text-indigo-600"}`} onClick={MiscClicked}>
                            Misc()
                        </button>
                    </div>
                </div>

            </div>
            <div className="my-8 md:my-16 grid grid-cols-3 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
                <div className="flex-shrink-0 transition duration-400 hover:-translate-y-1 grayscale-[65%] hover:grayscale-0">
                    <Image width={48} height={48} src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                </div>
                <div className="flex-shrink-0 transition duration-400 hover:-translate-y-1 grayscale-[65%] hover:grayscale-0">
                    <Image width={48} height={48} src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                </div>
                <div className="flex-shrink-0 transition duration-400 hover:-translate-y-1 grayscale-[65%] hover:grayscale-0">
                    <Image width={48} height={48} src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                </div>
                <div className="flex-shrink-0 transition duration-400 hover:-translate-y-1 grayscale-[65%] hover:grayscale-0">
                    <Image width={48} height={48} src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                </div>
                <div className="flex-shrink-0 transition duration-400 hover:-translate-y-1 grayscale-[65%] hover:grayscale-0">
                    <Image width={48} height={48} src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                </div>
                <div className="flex-shrink-0 transition duration-400 hover:-translate-y-1 grayscale-[65%] hover:grayscale-0">
                    <Image width={48} height={48} src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                </div>
            </div>
        </div>
    )
}

export default Skills;