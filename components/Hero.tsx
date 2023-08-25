"use client"

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'

const Hero = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [theme, setTheme])
    
    if (!mounted) return null

    return (
        <section id='Home' className={`relative overflow-hidden top-0 left-1/2 bg-transparent w-full h-full  transform -translate-x-1/2 flex flex-wrap pt-24`}>
            { theme === 'dark' 
                ? <Image src="/heroo.svg" alt="Hero" layout="fill" objectFit="cover" quality={100} className='-z-20'/>
                : <Image src="/hero.svg" alt="Hero" layout="fill" objectFit="cover" quality={100} className='-z-20'/>
            }
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                <div className="flex justify-center">
                <a target='_blank' href='https://github.com/KrinsKumar' className={`z-50 inline-flex items-center border gap-x-2 ${theme == "light" ? "bg-white border-gray-200 hover:border-gray-300 text-gray-600" : "bg-gray-800  border-gray-700 hover:border-gray-600 text-gray-400"} text-xs  p-2 px-3 rounded-full transition`}>
                    Explore my Github
                    <span className="flex items-center gap-x-1">
                    <span className={`border-l border-gray-200 pl-2 ${theme == "dark" ? "text-white" : "text-violet-700"}`}>Explore</span>
                        <svg className={`w-2.5 h-2.5 ${theme == "dark" ? "text-white" : "text-violet-700"}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </span>
                </a>
                </div>
                <div className="mt-5 max-w-xl text-center mx-auto">
                <h1 className={`block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ${theme == "dark" ? "dark:text-gray-200" : ""}`}>
                    Krinskumar Vaghasia
                </h1>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto">
                <p className={`text-lg text-gray-600 ${theme == "dark" ? "dark:text-gray-400" : ""}`} >I am an enthusiastic, and fast learning software developer student, specializing in full stack development.</p>
                </div>

                <div className="z-50 mt-8 grid gap-3 w-full sm:inline-flex cursor-pointer sm:justify-center hover:scale-105 transition">
                    <Link to="Projects" offset={-60} isDynamic={true} spy={true} smooth={true} duration={500} className={`inline-flex justify-center items-center gap-x-3 text-center  border border-transparent text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 ${theme == "dark" ? "bg-indigo-600 focus:ring-indigo-600" : "focus:ring-violet-600 bg-violet-700 text-gray-100"}`}>
                        Check out my projects!
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero