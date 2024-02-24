"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BiMessage } from "react-icons/bi"
import Link from "next/link"
import { scrollTo } from "@/lib/utils"

export default function Hero() {
    return (
        <div className="animate-fade-in">
            <h1 className="text-4xl font-extrabold mb-3">Marcus Georgievski</h1>
            <p className="text-xl text-foreground mb-6">Full Stack Developer</p>

            <p className="max-w-[400px] mb-10">
                Building full stack applications with a focus on performance and
                user experience.
            </p>

            <div className="mb-10">
                <Socials />
            </div>

            <div></div>
        </div>
    )
}

const socials = [
    {
        name: "GitHub",
        href: "https://github.com/marcusgeorgievski",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/marcusgeorgievski/",
        icon: FaLinkedin,
    },
]

function Socials() {
    return (
        <div className="flex space-x-4">
            {socials.map((social, i) => {
                const Icon = social.icon
                return (
                    <Link
                        key={i}
                        href={social.href}
                        target="_blank"
                        className="text-accent-foreground/90 hover:text-foreground transition-all"
                        aria-label={social.name + " profile"}
                    >
                        <Icon className="text-3xl" />
                    </Link>
                )
            })}

            <button
                onClick={() => scrollTo("contact")}
                className="text-accent-foreground/90 hover:text-foreground transition-all"
                aria-label="Message"
            >
                <BiMessage className="text-3xl" />
            </button>
        </div>
    )
}
