"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <section id="Contact" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center ">
                <h2 className={`text-xl font-semibold md:text-2xl md:leading-tight ${theme == "dark" ? "text-gray-200" : "text-gray-800"}`}>Contact()</h2>
            </div>
            <div className="sm:flex items-center max-w-screen-xl -mt-8">
                <div className="sm:w-1/2 ">
                    <div className="image object-center text-center">
                        <Image alt="footer" width="10000" height="10000" src="/footer.png"/>
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <div className="my-4 font-bold text-center md:text-left">
                            <span>
                                <a href="mailto:krinskumar@gmail.com" type="submit" target="_blank" 
                                    className={`hover:scale-105 transition text-center text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 ${theme == "dark" ? "bg-indigo-600 focus:ring-indigo-600" : "focus:ring-violet-600 bg-violet-700 text-gray-100"}`}>
                                    Contact Me!
                                </a>
                            </span>
                            <span className="ml-2">
                                <a href="https://www.linkedin.com/in/krins/" type="submit" target="_blank" 
                                    className={`hover:scale-105 transition text-center text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 ${theme == "dark" ? "bg-indigo-600 focus:ring-indigo-600" : "focus:ring-violet-600 bg-violet-700 text-gray-100"}`}>
                                    Linkedin
                                </a>
                            </span>
                        </div>
                        <p className={`${theme == "light" ? "text-gray-700" : "text-gray-400"}`}>
                            If you have any questions or just want to say hello, please feel free to contact me and I will try my best to get back to you!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;