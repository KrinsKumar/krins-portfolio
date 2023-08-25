"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Contact = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <section id="Contact" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
                <h2 className={`text-xl font-semibold md:text-2xl md:leading-tight ${theme == "dark" ? "text-gray-200" : "text-gray-800"}`}>Contact()</h2>
            </div>
            <div className="my-auto text-center max-w-[70%] mx-auto">
                If you have any questions or just want to say hello, please feel free to contact me and I will try my best to get back to you!
                <div className="z-50 mt-6 grid gap-3 w-full sm:inline-flex cursor-pointer sm:justify-center hover:scale-105 transition">
                    <a href="mailto:krinskumar@gmail.com" type="submit" target="_blank" className={`inline-flex justify-center items-center gap-x-3 text-center  border border-transparent text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 ${theme == "dark" ? "bg-indigo-600 focus:ring-indigo-600" : "focus:ring-violet-600 bg-violet-700 text-gray-100"}`}>
                        Contact Me!
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;