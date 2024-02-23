"use client"
import Link from "next/link"
import ThemeToggle from "./theme/theme-toggle"
import { GiCapybara } from "react-icons/gi"
import { Page } from "@/lib/types"
import { usePathname, useRouter } from "next/navigation"
import { cn, scrollTo } from "@/lib/utils"
import { Button } from "./ui/button"
import { PiArrowSquareOutLight } from "react-icons/pi"

const pages: Page[] = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
]

export default function Header() {
    const pathname = usePathname()
    const router = useRouter()

    const handleClick = (here: string) => {
        if (pathname.includes("blog")) {
            router.push("/")
            setTimeout(() => {
                scrollTo(here)
            }, 700)
            return
        }
        scrollTo(here)
    }
    return (
        <header className="w-full py-3  backdrop-blur-md border-b bg-background/60 px-6 z-50 top-0 right-0 sticky">
            <div className="max-w-[1200px] mx-auto flex  items-center justify-between h-full">
                <nav className="flex items-center space-x-5 [&>*]:font-normal [&>*]:text-muted-foreground">
                    <Button
                        variant="link"
                        className="!text-indigo-600  px-0 text-2xl"
                        onClick={() => handleClick("home")}
                        aria-label="Home"
                    >
                        <GiCapybara />
                    </Button>

                    {/* LINKS */}

                    <Button
                        variant="link"
                        className="hover:text-foreground px-0"
                        onClick={() => handleClick("home")}
                    >
                        Me
                    </Button>

                    <Button
                        variant="link"
                        className=" hover:text-foreground  px-0"
                        onClick={() => handleClick("skills")}
                    >
                        Skills
                    </Button>

                    <Button
                        variant="link"
                        className=" hover:text-foreground  px-0"
                        onClick={() => handleClick("contact")}
                    >
                        Contact
                    </Button>
                    <Link
                        href="/blog"
                        className=" hover:text-foreground  px-0 text-sm"
                    >
                        <Button
                            variant="link"
                            className="text-muted-foreground hover:text-foreground  px-0 flex items-center gap-1"
                        >
                            Blog
                        </Button>
                    </Link>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    )
}
