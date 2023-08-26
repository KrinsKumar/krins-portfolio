import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact";
import About from "@/components/About"

const Page = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default Page;