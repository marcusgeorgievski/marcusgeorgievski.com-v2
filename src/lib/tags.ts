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
  SiDocker,
  SiJavascript,
} from "react-icons/si"
import { BiLogoPostgresql, BiLogoJava } from "react-icons/bi"
import { RiOpenaiFill } from "react-icons/ri"
import { TbSoup } from "react-icons/tb"
import { VscGraph } from "react-icons/vsc"
import { MdFingerprint } from "react-icons/md"
import { FaGolang } from "react-icons/fa6"
import { Tag } from "@/lib/types"
import { SiCplusplus, SiExpress, SiOpencv } from "react-icons/si"
import { FaAws } from "react-icons/fa"

export const languages = ["Python", "TypeScript", "SQL", "Java", "Go", "C++"]

export const webTechnologies = [
  "Next.js",
  "React",
  "Express",
  "AWS",
  "Docker",
  "Auth",
  "Prisma",
  "React Query",
  "Redis",
  "Tailwind",
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
    styles: "bg-sky-400",
    textStyle: "text-black",
    icon: SiReact,
  },
  {
    name: "Next.js",
    text: "Next.js",
    styles: "bg-black border border-slate-600",
    textStyle: "text-slate-200",
    iconStyle: "text-white",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    text: "TypeScript",
    styles: "bg-blue-700",
    textStyle: "text-blue-50",
    iconStyle: "text-white",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    text: "JavaScript",
    styles: "bg-yellow-700",
    textStyle: "text-black",
    iconStyle: "text-white",
    icon: SiJavascript,
  },
  {
    name: "Python",
    text: "Python",
    styles: "bg-blue-700",
    textStyle: "text-yellow-300",
    iconStyle: "text-yellow-300",
    icon: SiPython,
  },
  {
    name: "Selenium",
    text: "Selenium",
    styles: "bg-gray-600",
    textStyle: "text-slate-100",
    icon: SiSelenium,
  },
  {
    name: "Pandas",
    text: "Pandas",
    styles: "bg-indigo-900",
    textStyle: "text-white",
    icon: SiPandas,
  },
  {
    name: "Numpy",
    text: "Numpy",
    styles: "bg-black border border-slate-600",
    textStyle: "text-white",
    icon: SiNumpy,
  },
  {
    name: "SQL",
    text: "SQL",
    styles: "bg-blue-200 border border-blue-600",
    textStyle: "text-blue-700",
    iconStyle: "text-blue-700 text-lg",
    icon: BiLogoPostgresql,
  },
  {
    name: "Java",
    text: "Java",
    styles: "bg-black border border-slate-600",
    textStyle: "text-white",
    iconStyle: "text-orange-500 text-lg",
    icon: BiLogoJava,
  },
  {
    name: "OpenAI",
    text: "OpenAI",
    styles: "bg-teal-300",
    textStyle: "text-black",
    icon: RiOpenaiFill,
  },
  {
    name: "Prisma",
    text: "Prisma",
    styles: "bg-indigo-600",
    textStyle: "text-slate-100",
    icon: SiPrisma,
  },
  {
    name: "bs4",
    text: "bs4",
    styles: "bg-indigo-600",
    textStyle: "text-slate-100",
    icon: TbSoup,
  },
  {
    name: "Tailwind",
    text: "Tailwind",
    styles: "bg-blue-500",
    textStyle: "text-slate-100",
    icon: SiTailwindcss,
  },
  {
    name: "Matplotlib",
    text: "Matplotlib",
    styles: "bg-blue-800",
    textStyle: "text-slate-100",
    icon: VscGraph,
  },
  {
    name: "Redis",
    text: "Redis",
    styles: "bg-red-700",
    textStyle: "text-slate-100",
    icon: SiRedis,
  },
  {
    name: "React Query",
    text: "React Query",
    styles: "bg-red-500",
    icon: SiReactquery,
  },
  {
    name: "Auth",
    text: "Auth",
    styles: "bg-black border border-slate-600",
    textStyle: "text-slate-100",
    icon: MdFingerprint,
  },
  {
    name: "Go",
    text: "Go",
    styles: "bg-sky-600 border",
    textStyle: " text-white",
    iconStyle: "text-lg text-white",
    icon: FaGolang,
  },
  {
    name: "C++",
    text: "C++",
    styles: "bg-black border border-slate-600",
    textStyle: "text-white",
    icon: SiCplusplus,
  },
  {
    name: "Express",
    text: "Express",
    styles: "bg-black border border-slate-600",
    textStyle: "text-white",
    icon: SiExpress,
  },
  {
    name: "OpenCV",
    text: "OpenCV",
    styles: "bg-black ",
    textStyle: "text-white",
    iconStyle: "text-red-500",
    icon: SiOpencv,
  },
  {
    name: "AWS",
    text: "AWS",
    styles: "bg-slate-800",
    textStyle: "text-yellow-500",
    iconStyle: "text-yellow-500 text-base",
    icon: FaAws,
  },
  {
    name: "Docker",
    text: "Docker",
    styles: "bg-white",
    textStyle: "text-blue-600",
    iconStyle: "text-blue-600",
    icon: SiDocker,
  },
]
