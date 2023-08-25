"use client"

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";

import { projects } from "@/public/data"

const Projects = () => {

    const { theme, setTheme } = useTheme();
    const [selected, setSelected] = useState("all")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
                <h2 className={`text-xl font-semibold md:text-2xl md:leading-tight ${theme == "dark" ? "text-gray-200" : "text-gray-800"}`}>Projects()</h2>

            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {
                    projects.map(project => (
                        <div key={project.title} className="relative group flex flex-col items-center rounded-md overflow-hidden gap-x-4 bg-indigo-600/5 hover:bg-indigo-600/10 transition p-3">
                            <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                                <Image  
                                    className="object-cover" 
                                    src={`/project/${project.image}.png` || '/skills/nextjs.svg'}
                                    fill
                                    alt="Song Cover"
                                />
                            </div>
                            <div className="flex flex-col items-start w-full text-center pt-4 gap-y-1">
                                <p className="font-semibold truncate w-full">
                                    <a href={project.demo} target="_blank"><LuExternalLink size={28} className="inline-block mb-1 mr-2 hover:scale-110 transition hover-pointer"/></a>
                                    {project.title}
                                    <a href={project.gh} target="_blank"><AiFillGithub size={28} className="inline-block mb-1 ml-2 hover:scale-110 transition hover-pointer"/></a>
                                </p>
                                <p className="text-neutral-400 text-sm w-full truncate">
                                    {project.description}
                                </p>
                                <p className="flex flex-row w-full justify-center md:gap-4 gap-2 py-2 mx-auto">
                                    {project.skills.map(skill => (
                                        <Image key={skill} src={`/skills/${skill}.svg`} width={27} height={27} alt={skill} className="bg-gray-700/10 rounded-full hover:scale-110 transition"/>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;