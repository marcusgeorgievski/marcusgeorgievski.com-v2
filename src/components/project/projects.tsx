import Project from "@/components/project/project-card"
import Section from "@/components/sections/section"
import { Project as P } from "@/lib/types"
import { Button } from "../ui/button"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6"

interface ProjectsProps {
    //children: React.ReactNode;
}

export default function Projects() {
    return (
        <div className="">
            <Section subtitle="Click an image to view a demo">Projects</Section>

            <div className="space-y-6 xl:space-y-6 lg:space-y-0 lg:grid grid-cols-2 lg:grid-cols-1 group/list mb-6">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        // xl:group-hover/list:blur-[1px] hover:!blur-none
                        className="group xl:group-hover/list:opacity-50  hover:!opacity-100 transition-all duration-200 animate-fade-in-up"
                        // style={{
                        //     animation: `fade-in-up 0.6s ease-out ${
                        //         i * 300
                        //     }ms forwards`,
                        //     opacity: 0, // Start with opacity 0 to ensure the fade-in effect
                        // }}
                    >
                        <Project project={project} />
                    </div>
                ))}
            </div>
            <Link
                href={"https://github.com/marcusgeorgievski"}
                className="w-full"
                target="_blank"
            >
                <Button className="w-full" variant="secondary">
                    More on
                    <FaGithub className="mx-1 ml-2" /> GitHub
                </Button>
            </Link>
        </div>
    )
}

const projects: P[] = [
    {
        title: "OpenAI GPT Playground",
        description:
            "AI chatbot developed using OpenAI's GPT API to create an advanced assistant. Its role and parameters can both be customized to tailor your experience.",
        image: "openai.png",
        tags: ["OpenAI", "React", "React Query", "Next.js", "TypeScript"],
        github: "https://github.com/marcusgeorgievski/openai-api",
        live: "https://openai-api-blush.vercel.app/",
        video: "openai.mov",
    },
    {
        title: "CodeHome",
        description:
            "Full stack platform for users to create, explore, and showcase any coding relating projects.",
        image: "codehomeImage.png",
        tags: ["Next.js", "React", "SQL", "Prisma", "Auth", "TypeScript"],
        github: "https://github.com/marcusgeorgievski/codeHome",
        live: "https://codehome.app/",
        video: "codehomeVideo.mov",
    },
    {
        title: "Indeed Skill Scrape",
        description:
            "Parse job posting data based on provided job title and interested technical skills.",
        image: "indeed.png",
        tags: ["Python", "Selenium", "Pandas", "bs4", "Matplotlib"],
        github: "https://github.com/marcusgeorgievski/indeed-skill-scrape",
    },
]
