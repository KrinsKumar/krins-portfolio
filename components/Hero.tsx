"use client"

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useState } from 'react'

const Hero = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [theme, setTheme])
    
    if (!mounted) return null

    return (
        <section className={`relative overflow-hidden before:absolute before:top-0 before:left-1/2 bg-transparent before:w-full before:h-full  before:transform before:-translate-x-1/2`}>
            { theme === 'dark' 
                ? <Image src="/heroo.svg" alt="Hero" layout="fill" objectFit="cover" quality={100} className='-z-20'/>
                : <Image src="/hero.svg" alt="Hero" layout="fill" objectFit="cover" quality={100} className='-z-20'/>
            }
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                <div className="flex justify-center">
                <a className={`inline-flex items-center gap-x-2 ${theme == "light" ? "bg-white border border-gray-200 hover:border-gray-300 text-gray-600" : "dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"} text-xs  p-2 px-3 rounded-full transition  `} target='_blank' href='https://github.com/KrinsKumar'>
                    Explore my Github
                    <span className="flex items-center gap-x-1">
                    <span className={`border-l border-gray-200 text-blue-600 pl-2 ${theme == "dark" ? "dark:text-blue-500" : ""}`}>Explore</span>
                    <svg className={`w-2.5 h-2.5 text-blue-600 ${theme == "dark" ? "dark:text-blue-500" : ""}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                <p className={`text-lg text-gray-600 ${theme == "dark" ? "dark:text-gray-400" : ""}`} >Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.</p>
                </div>

                <div className="mt-8 grid gap-3 w-full sm:inline-flex cursor-pointer sm:justify-center">
                    <a className="inline-flex justify-center items-center gap-x-3 text-center bg-violet-700 border border-transparent text-grey text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
                        Check out my projects!
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero