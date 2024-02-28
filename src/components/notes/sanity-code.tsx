"use client"

import dynamic from "next/dynamic"
const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter"), {
    ssr: false,
})
import {
    srcery as darkTheme,
    googlecode as lightTheme,
} from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { IoMdCopy } from "react-icons/io"

interface SanityCodeProps {
    code: string
    language?: string
    className?: string
    filename?: string
}

export default function SanityCode({
    code,
    language,
    className,
    filename,
}: SanityCodeProps) {
    const { theme } = useTheme()

    function copyToClipboard() {
        navigator.clipboard.writeText(code)
    }

    return (
        <div className="relative">
            <div className="absolute border-b bg-red-50/10 h-8 flex items-center justify-between w-full  px-2 !mb-0 text-xs text-muted-foreground/50 font-mono">
                <p className="text-muted-foreground/70">{filename}</p>
                <button
                    onClick={copyToClipboard}
                    className="h-4 w-4 hover:text-foreground"
                >
                    <IoMdCopy />
                </button>
            </div>
            <SyntaxHighlighter
                style={theme === "dark" ? darkTheme : lightTheme}
                language={language}
                wrapLongLines
                className={cn("border rounded !mt-0 my-0 !pt-9", className)}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
