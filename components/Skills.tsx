"use client"

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

import { skills as AllSkill } from "@/public/data"

const Skills = () => {

    const { theme, setTheme } = useTheme();
    const [selected, setSelected] = useState("all")
    const [skills, setSkills] = useState<{name:string, src:string, category:string[]}[]>([]);
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setSkills(() => {
            return AllSkill.filter(skill => !skill.category.includes("misc"))
        })
    }, [setTheme, theme])

    if (!mounted) return null

    function updateSKill(category:string) {
        if (category == "all") {
            setSkills(() => {
                return AllSkill.filter(skill => !skill.category.includes("misc"))
            })
        }
        else {
            setSkills(() => {
                return AllSkill.filter(skill => skill.category.includes(category))
            })
        }
    }

    function buttonClicked(button:string) {
        setSelected(button)
        updateSKill(button)
    }

    return (
        <div id="Skills" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
                <h2 className={`text-xl font-semibold md:text-2xl md:leading-tight ${theme == "dark" ? "text-gray-200" : "text-gray-800"}`}>Skills()</h2>

                <div className="grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20 mt-4">
                    <div className="col-span-6 text-center">
                        <button className={`col-span-6 text-center rounded px-8 py-3 text-sm font-medium transition hover:scale-105 border ${theme == `dark` ? `text-white border-indigo-600 ${selected == "all" ? "bg-indigo-700 text-gray-100" : ""}` : `text-black border-violet-600 ${selected == "all" ? "bg-violet-700 text-gray-100" : ""}`}`} onClick={() => {buttonClicked("all")}}>
                            <span className="sm:hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            All()
                            <span className="sm:hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </button>
                    </div>
                    <div className="col-span-6 text-center">
                        <button className={`col-span-6 text-center rounded px-8 py-3 text-sm font-medium transition hover:scale-105 border ${theme == `dark` ? `text-white border-indigo-600 ${selected == "front" ? "bg-indigo-700 text-gray-100" : ""}` : `text-black border-violet-600 ${selected == "front" ? "bg-violet-700 text-gray-100" : ""}`}`} onClick={() => {buttonClicked("front")}}>
                            FrontEnd()
                        </button>
                    </div>
                    <div className="col-span-6 text-center">
                        <button className={`col-span-6 text-center rounded px-8 py-3 text-sm font-medium transition hover:scale-105 border ${theme == `dark` ? `text-white border-indigo-600 ${selected == "back" ? "bg-indigo-700 text-gray-100" : ""}` : `text-black border-violet-600 ${selected == "back" ? "bg-violet-700 text-gray-100" : ""}`}`} onClick={() => {buttonClicked("back")}}>
                            BackEnd()
                        </button>
                    </div>
                    <div className="col-span-6 text-center">
                        <button className={`col-span-6 text-center rounded px-8 py-3 text-sm font-medium transition hover:scale-105 border ${theme == `dark` ? `text-white border-indigo-600 ${selected == "misc" ? "bg-indigo-700 text-gray-100" : ""}` : `text-black border-violet-600 ${selected == "misc" ? "bg-violet-700 text-gray-100" : ""}`}`} onClick={() => {buttonClicked("misc")}}>
                        <span className="sm:hidden">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            Misc()
                        <span className="sm:hidden">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </button>
                    </div>
                </div>

            </div>
            <div className="my-8 flex justify-center flex-wrap gap-6 sm:gap-x-12 lg:gap-x-20">
                {
                    skills.map(skill => (
                        <div key={skill.name} className="flex-shrink-0 transition duration-400 hover:-translate-y-1">
                            <div>
                                <Image width={48} height={48} src={`skills/${skill.src}.svg`} alt={skill.name} className="mb-1 mx-auto bg-gray-700/10 rounded-full p-1"/>
                                <div className="text-center">
                                    {skill.name}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills;

