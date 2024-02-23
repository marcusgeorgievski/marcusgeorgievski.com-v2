import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiPython,
    SiSelenium,
    SiPandas,
    SiNumpy,
    SiPrisma,
    SiTailwindcss,
    SiRedis,
    SiReactquery,
    SiC,
} from "react-icons/si"
import { BiLogoPostgresql, BiLogoJava } from "react-icons/bi"
import { RiOpenaiFill } from "react-icons/ri"
import { TbSoup } from "react-icons/tb"
import { VscGraph } from "react-icons/vsc"
import { MdFingerprint } from "react-icons/md"
import { FaGolang } from "react-icons/fa6"
import { Tag } from "@/lib/types"
import { SiCplusplus, SiExpress, SiOpencv } from "react-icons/si"

export const languages = ["Python", "TypeScript", "SQL", "Java", "C++", "Go"]

export const webTechnologies = [
    "Next.js",
    "React",
    "Tailwind",
    "Prisma",
    "Express",
    "Auth",
    "React Query",
    "Redis",
]

export const dataScience = [
    "OpenCV",
    "Pandas",
    "Matplotlib",
    "Numpy",
    "bs4",
    "Selenium",
]

export const tags: Tag[] = [
    {
        name: "React",
        text: "React",
        iconStyle: "text-black ",
        className: "bg-sky-400",
        textStyle: "text-black",
        icon: SiReact,
    },
    {
        name: "Next.js",
        text: "Next.js",
        className: "bg-black border border-slate-600",
        textStyle: "text-slate-200",
        iconStyle: "text-white",
        icon: SiNextdotjs,
    },
    {
        name: "TypeScript",
        text: "TypeScript",
        className: "bg-blue-700",
        textStyle: "text-blue-50",
        iconStyle: "text-white",
        icon: SiTypescript,
    },
    {
        name: "Python",
        text: "Python",
        className: "bg-blue-700",
        textStyle: "text-yellow-300",
        iconStyle: "text-yellow-300",
        icon: SiPython,
    },
    {
        name: "Selenium",
        text: "Selenium",
        className: "bg-gray-600",
        textStyle: "text-slate-100",
        icon: SiSelenium,
    },
    {
        name: "Pandas",
        text: "Pandas",
        className: "bg-indigo-900",
        textStyle: "text-white",
        icon: SiPandas,
    },
    {
        name: "Numpy",
        text: "Numpy",
        className: "bg-black border border-slate-600",
        textStyle: "text-white",
        icon: SiNumpy,
    },
    {
        name: "SQL",
        text: "SQL",
        className: "bg-blue-200 border border-blue-600",
        textStyle: "text-blue-700",
        iconStyle: "text-blue-700 text-lg",
        icon: BiLogoPostgresql,
    },
    {
        name: "Java",
        text: "Java",
        className: "bg-black border border-slate-600",
        textStyle: "text-white",
        iconStyle: "text-orange-500 text-lg",
        icon: BiLogoJava,
    },
    {
        name: "OpenAI",
        text: "OpenAI",
        className: "bg-teal-300",
        textStyle: "text-black",
        icon: RiOpenaiFill,
    },
    {
        name: "Prisma",
        text: "Prisma",
        className: "bg-indigo-600",
        textStyle: "text-slate-100",
        icon: SiPrisma,
    },
    {
        name: "bs4",
        text: "bs4",
        className: "bg-indigo-600",
        textStyle: "text-slate-100",
        icon: TbSoup,
    },
    {
        name: "Tailwind",
        text: "Tailwind",
        className: "bg-blue-500",
        textStyle: "text-slate-100",
        icon: SiTailwindcss,
    },
    {
        name: "Matplotlib",
        text: "Matplotlib",
        className: "bg-blue-800",
        textStyle: "text-slate-100",
        icon: VscGraph,
    },
    {
        name: "Redis",
        text: "Redis",
        className: "bg-red-700",
        textStyle: "text-slate-100",
        icon: SiRedis,
    },
    {
        name: "React Query",
        text: "React Query",
        className: "bg-red-500",
        icon: SiReactquery,
    },
    {
        name: "Auth",
        text: "Auth",
        className: "bg-black border border-slate-600",
        textStyle: "text-slate-100",
        icon: MdFingerprint,
    },
    {
        name: "Go",
        text: "Go",
        className: "bg-sky-500 border",
        textStyle: " text-white",
        iconStyle: "text-lg text-white",
        icon: FaGolang,
    },
    {
        name: "C++",
        text: "C++",
        className: "bg-black border border-slate-600",
        textStyle: "text-white",
        icon: SiCplusplus,
    },
    {
        name: "Express",
        text: "Express",
        className: "bg-black border border-slate-600",
        textStyle: "text-white",
        icon: SiExpress,
    },
    {
        name: "OpenCV",
        text: "OpenCV",
        className: "bg-black ",
        textStyle: "text-white",
        iconStyle: "text-red-500",
        icon: SiOpencv,
    },
]
