"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const About = () => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <section className="max-w-[85rem] px-4 pb-6 pt-8 sm:px-6 lg:px-8 lg:py-10 mx-auto" id="About">
            <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
                <h2 className={`text-xl font-semibold md:text-2xl md:leading-tight ${theme == "dark" ? "text-gray-200" : "text-gray-800"}`}>About()</h2>
            </div>
            <div className="sm:flex items-center max-w-screen-xl -mt-12">
                <div className="sm:w-1/2 ">
                    <div className="image object-center text-center p-8 m-10 mb-0 pb-0">
                        <Image className="rounded-full" alt="footer" width="10000" height="10000" src="/krins.jpeg"/>
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                            Hello, my name is <span className={`${ theme == "dark" ? "text-indigo-600" : "text-violet-700"}`}>Krinskumar Vaghasia</span>
                        </h2>
                        <br/>
                        <p className={`${theme == "light" ? "text-gray-700" : "text-gray-400"}`}>
                            I am a full stack software developer. I am working as a <span className={`${ theme == "dark" ? "text-indigo-600" : "text-violet-700"}`}>Reserach Assistant</span> at Seneca Innovation
                        </p>
                        <br/>
                        <p className={`${theme == "light" ? "text-gray-700" : "text-gray-400"}`}>
                            Outside software development, I enjoy going outside and spend time with my friends, and spending my time practicing my golf swings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;