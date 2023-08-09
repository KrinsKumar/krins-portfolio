"use client"

import { useState, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { useTheme } from 'next-themes'
import { Link as ScrollLink } from 'react-scroll'
import { FiSun, FiMoon } from 'react-icons/fi'
import Link from 'next/link'
import { ClipLoader } from 'react-spinners'

const Header = () => {
    const [navCollapse, setNavCollapse] = useState(true)
    const [scroll, setScroll] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const navs = ['Home', 'Skills', 'Projects', 'Experience', 'Contact']

    useEffect(() => {
        setMounted(true)
        const updateScroll = () => {
            window.scrollY >= 90 ? setScroll(true) : setScroll(false)
            console.log(window.scrollY)
        }
        window.addEventListener('scroll', updateScroll)
    }, [])

    if (!mounted) {
        return (
            <div className='flex items-center justify-center min-h-screen w-screen'>
                <ClipLoader color={'#9f7aea'} size={50} />
            </div>
        )
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <header className={`backdrop-filter backdrop-blur-lg ${scroll ? 'border-b bg-white bg-opacity-40' : 'border-b-0'} dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed`}>
            <nav className='lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-4 hidden sm:flex items-center justify-between'>
                <Link href={'/'} className={`2xl:ml-6 ${theme === "dark" ? "hover:text-violet-500" : "hover:text-rose-700"} transition-colors duration-200`}>
                    Logo
                </Link>
                <ul className='flex items-center gap-8'>
                    {navs.map((e, i) => (
                        <li key={i}>
                            <ScrollLink
                                className={`${theme === "dark" ? "hover:text-violet-500" : "hover:text-rose-700"} transition-colors capitalize cursor-pointer`}
                                to={e}
                                offset={-60}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                {e}
                            </ScrollLink>
                        </li>
                    ))}
                    <span className='hover:scale-110 rounded-full cursor-pointer transition duration-200'>
                        <a target='_blank' href='https://github.com/KrinsKumar'><BsGithub size={25}/></a>
                    </span>
                    <span className="hover:scale-110 rounded-full cursor-pointer transition duration-200" onClick={toggleTheme}>
                        {theme == "light" ? <FiSun size={27}/> : <FiMoon size={27}/>}
                    </span>
                </ul>
            </nav>

            <nav className='p-4 flex sm:hidden items-center justify-between'>
                Logo
                <div className='flex items-center gap-4'>
                    <span className='hover:scale-110 rounded-full cursor-pointer transition duration-200'>
                        <a target='_blank' href='https://github.com/KrinsKumar'><BsGithub size={25}/></a>
                    </span>
                    <span className="hover:scale-110 rounded-full cursor-pointer transition duration-200" onClick={toggleTheme}>
                        {theme == "light" ? <FiSun size={27}/> : <FiMoon size={27}/>}
                    </span>
                    <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
                </div>
            </nav>

            <div className={`flex min-h-screen w-screen absolute md:hidden top-0 ${!navCollapse ? 'right-0' : 'right-[-100%]'} bottom-0 z-50 ease-in duration-200`}>
                <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>

                <div className="flex flex-col p-4 gap-5 bg-gray-100/95 backdrop-filter backdrop-blur-sm dark:bg-grey-900/95 w-3/4">
                    <CgClose className='self-end my-2' size={20} onClick={() => setNavCollapse(true)} />

                    {navs.slice(0, 4).map((e) => (
                        <ScrollLink
                            key={e}
                            className={`${theme === "dark" ? "hover:text-violet-500" : "hover:text-rose-700"} py-1.5 px-4 rounded transition-colors capitalize cursor-pointer`}
                            to={e}
                            offset={-60}
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                            onClick={() => setNavCollapse(true)}
                        >
                            {e}
                        </ScrollLink>
                    ))}
                    <ScrollLink
                        to='contact'
                        offset={-60}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavCollapse(true)}
                        className={`px-6 py-1.5 rounded-md ${theme === "dark" ? "hover:text-violet-500" : "hover:text-rose-700"} text-white text-center`}>
                        Contact
                    </ScrollLink>
                </div>
            </div>
        </header>
    );
}

export default Header;