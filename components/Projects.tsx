"use client"

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";

import { projects } from "@/public/data"

const Projects = () => {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section className="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-10 mx-auto" id="Projects">
            <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
                <h2 className={`text-xl font-semibold md:text-2xl md:leading-tight ${theme == "dark" ? "text-gray-200" : "text-gray-800"}`}>Projects()</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {
                    projects.map(project => (
                        <div key={project.title} className={`relative group flex flex-col items-center rounded-md overflow-hidden gap-x-4 ${theme == "dark" ? "bg-indigo-600/10 hover:bg-indigo-600/30" : "bg-violet-600/10 hover:bg-violet-600/30"} transition duration-200 p-3`}>
                            <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                                <Image  
                                    className="object-cover" 
                                    src={`/project/${project.image}.png` || '/skills/nextjs.svg'}
                                    fill
                                    alt="Song Cover"
                                />
                                <div className="absolute top-2 left-2">
                                    {project.demo ? <a href={project.demo} target="_blank"><LuExternalLink size={35} className={`md:hidden hover:scale-110 transition hover-pointer p-1 rounded-full ${theme == "dark" ? "bg-indigo-600/50" : "bg-violet-600/50"}`}/></a> : <div></div>}
                                </div>
                                <div className="absolute top-2 right-2">
                                    <a href={project.gh} target="_blank"><AiFillGithub size={37} className={`md:hidden hover:scale-110 transition hover-pointer p-1 rounded-full ${theme == "dark" ? "bg-indigo-600/50" : "bg-violet-600/50"}`}/></a>
                                </div>
                            </div>
                            <div className="flex flex-col items-start w-full text-center pt-4 gap-y-1">
                                <p className="font-semibold mx-auto">
                                    {project.demo ? <a href={project.demo} target="_blank"><LuExternalLink size={27} className="md:inline-block mb-1 mr-2 hover:scale-110 transition hover-pointer hidden"/></a> : <div></div>}
                                    {project.title}
                                    <a href={project.gh} target="_blank"><AiFillGithub size={29} className="md:inline-block mb-1 ml-2 hover:scale-110 transition hover-pointer hidden"/></a>
                                </p>
                                <p className="text-neutral-400 text-sm w-full">
                                    {project.description}
                                </p>
                                <p className="flex flex-row w-full justify-center md:gap-4 gap-2 py-2 mx-auto">
                                    {project.skills.map(skill => (
                                        <Image key={skill} src={`/skills/${skill}.svg`} width={27} height={27} alt={skill} className="duration-400 hover:-translate-y-1 transition-all"/>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;