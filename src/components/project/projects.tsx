import ProjectCard from "@/components/project/project-card"
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
      <Section subtitle="">Projects</Section>

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
            <ProjectCard project={project} />
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
    title: "AWS Microservice",
    description:
      "RESTful microservice for handling and storing diverse text and image fragments.",
    image: "fragments.png",
    tags: ["AWS", "Docker", "JavaScript", "Express"],
    github: "https://github.com/marcusgeorgievski/fragments",
    live: "",
    video: null,
  },
  {
    title: "StudyHome",
    description:
      "Full stack student management platform for students to track assessments and organize notes.",
    image: "studyHome.png",
    tags: ["Next.js", "React", "SQL", "Auth", "Express"],
    github: "https://github.com/marcusgeorgievski/prj-team-1",
    live: "https://prj-frontend.vercel.app",
    video: null,
  },
  {
    title: "Indeed Skill Scrape",
    description:
      "Parse job posting data based on provided job title and interested technical skills.",
    image: "indeed.png",
    tags: ["Python", "Selenium", "Pandas", "bs4", "Matplotlib"],
    github: "https://github.com/marcusgeorgievski/indeed-skill-scrape",
  },
  {
    title: "OpenAI GPT Playground",
    description:
      "AI chatbot playground using OpenAI's API to create create a custom experience by playing with underlying parameters.",
    image: "openai.png",
    tags: ["OpenAI", "React", "React Query", "Next.js", "TypeScript"],
    github: "https://github.com/marcusgeorgievski/openai-api",
    live: "https://openai-api-blush.vercel.app/",
    video: "openai.mov",
  },
]
