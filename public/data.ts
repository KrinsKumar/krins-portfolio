export let skills = [
    {
        name:"React",
        category: ["front"],
        src:"react",
    },{
        name:"AngularJs",
        category: ["front"],
        src:"angularjs",
    },{
        name:"NodeJs",
        category: ["back"],
        src:"nodejs",
    },{
        name:"SpringBoot",
        category: ["back"],
        src:"sb",
    },{
        name:"Next",
        category: ["front"],
        src:"next",
    },{
        name:"Redis",
        category: ["back"],
        src:"redis",
    },{
        name:"Kafka",
        category: ["back"],
        src:"kafka",
    },{
        name:"AWS",
        category: ["all"],
        src:"aws",
    },{
        name:"Azure",
        category: ["all"],
        src:"azure",
    },{
        name:"Javascript",
        category: ["front", "back"],
        src:"js",
    },{
        name:"Typescript",
        category: ["back"],
        src:"ts",
    },{
        name:"Java",
        category: ["back"],
        src:"java",
    },{
        name:"C++",
        category: ["back"],
        src:"c++",
    },{
        name:"C",
        category: ["back"],
        src:"c",
    },{
        name:"C#",
        category: ["back"],
        src:"c-sharp",
    },{
        name:"Python",
        category: ["back"],
        src:"python",
    },{
        name:"Git",
        category: ["all"],
        src:"git",
    },{
        name:"Github",
        category: ["all"],
        src:"github",
    },{
        name:"Postman",
        category: ["all"],
        src:"postman",
    },{
        name:"Docker",
        category: ["back"],
        src:"docker",
    },{
        name:"Kubernetes",
        category: ["back"],
        src:"kubernetes",
    },{
        name:"MongoDB",
        category: ["back"],
        src:"mongodb",
    },{
        name:"Postgres",
        category: ["back"],
        src:"postgres",
    },{
        name:"MySql",
        category: ["back"],
        src:"mysql",
    },{
        name:"Jest",
        category: ["back"],
        src:"jest",
    },{
        name:"HTML",
        category: ["front"],
        src:"html",
    },{
        name:"CSS",
        category: ["front"],
        src:"css",
    },{
        name:"Tailwind",
        category: ["front"],
        src:"tailwind",
    },{
        name:"SASS",
        category: ["front"],
        src:"sass",
    },{
        name:"Bootstrap",
        category: ["front"],
        src:"bootstrap",
    },{
        name:"Figma",
        category: ["misc"],
        src:"figma",
    },{
        name:"Git",
        category: ["misc"],
        src:"git",
    },{
        name:"Jira",
        category: ["misc"],
        src:"jira",
    },{
        name:"Netlify",
        category: ["misc"],
        src:"netlify",
    },{
        name:"Office 365",
        category: ["misc"],
        src:"office-365",
    },{
        name:"Powershell",
        category: ["misc"],
        src:"powershell",
    },{
        name:"Bash",
        category: ["misc"],
        src:"bash",
    },{
        name:"NPM",
        category: ["misc"],
        src:"npm",
    },{
        name:"Photoshop",
        category: ["misc"],
        src:"photoshop",
    },{
        name:"Illustrator",
        category: ["misc"],
        src:"Illustrator",
    },{
        name:"Premiere Pro",
        category: ["misc"],
        src:"premiere",
    },{
        name:"After Effects",
        category: ["misc"],
        src:"after-effects",
    },
]

export let projects:{
    gh: string,
    demo: string | undefined,
    title: string,
    skills: string[],
    image: string | undefined,
    description: string
}[] = [
    {
        gh: "https://github.com/KrinsKumar/stream-music",
        demo: "stream-music.vercel.app",
        title: "Stream Music",
        skills: ["next", "react", "ts", "supabase", "postgres"],
        image: "stream-music",
        description: "Full Stack Spotify Clone for streaming music"
    },{
        gh: "https://github.com/KrinsKumar/NoBrainer-AI_SaaS",
        demo: "https://no-brainer-ai-saa-s-concept.vercel.app/",
        title: "NoBrainer",
        skills: ["next", "react", "ts", "tailwind", "openai"],
        image: "no-brainer",
        description: "SaaS Concept for generating 🎨📸🎥🎵"
    },{
        gh: "https://github.com/KrinsKumar/spring-security-JWT",
        demo: undefined,
        title: "Spring Security JWT",
        skills: ["java", "sb", "postgres", "postman"],
        image: "java-jwt",
        description: "Rest API on Spring Boot with JWT security"
    },{
        gh: "https://github.com/KrinsKumar/spring-security-JWT",
        demo: "https://nutflix.vercel.app/",
        title: "Angular-Netflix",
        skills: ["angularjs", "ts", "bootstrap", "html"],
        image: "nutflix",
        description: "Netflix Homepage using AngularJs"
    },{
        gh: "https://github.com/KrinsKumar/ChatBackend-Redis",
        demo: undefined,
        title: "Socket Chat Architecture",
        skills: ["redis", "docker", "next", "ts", "postman"],
        image: "chat-node",
        description: "A scalable chat architecture using Redis"
    },{
        gh: "https://github.com/KrinsKumar/Aztech",
        demo: undefined,
        title: "Aztech - Hackhathon",
        skills: ["nodejs", "mongodb", "js", "figma", "openai"],
        image: "aztech",
        description: "Full Stack AI quotation tool for Mircom"
    },{
        gh: "https://github.com/KrinsKumar/React-LandingPage",
        demo: "cheery-melba-ac3569.netlify.app/",
        title: "React LandingPage",
        skills: ["react", "js"],
        image: "landing",
        description: "A Business landing page using React"
    },{
        gh: "https://github.com/KrinsKumar/spring-firstProject",
        demo: undefined,
        title: "Spring RestAPI",
        skills: ["java", "sb", "postgres", "docker", "postman"],
        image: "simple",
        description: "My First Spring Boot with PostgreSQL and Docker"
    },{
        gh: "https://github.com/KrinsKumar/movies-API",
        demo: undefined,
        title: "Movies API - Node",
        skills: ["nodejs", "mongodb", "postman"],
        image: "movies",
        description: "An API for movies powered by MongoDB"
    },{
        gh: "https://github.com/KrinsKumar/Responsive-dashboard",
        demo: "https://krinskumar.github.io/Responsive-dashboard/",
        title: "Vanilla Dashboard",
        skills: ["html", "css", "js"],
        image: "responsive",
        description: "Responsive Dashboard on gh-pages"
    },{
        gh: "https://github.com/KrinsKumar/krins-portfolio",
        demo: undefined,
        title: "This Portfolio",
        skills: ["next", "ts", "tailwind"],
        image: "portfolio",
        description: "This portflio you are on right now"
    },{
        gh: "https://github.com/KrinsKumar/sketch.io",
        demo: "https://krinskumar.github.io/sketch.io/",
        title: "sketch.io",
        skills: ["html", "css", "js"],
        image: "sketch",
        description: "My first web project"
    },
]

/*
{
        gh: "",
        demo: "",
        title: "",
        skills: [],
        image: "",
        description: ""
    },
*/