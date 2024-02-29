"use client"
import Link from "next/link"
// import { AiOutlineHeart } from "react-icons/ai"
// import { TfiCommentAlt } from "react-icons/tfi"
import Tag from "@/components/tag"
import SanityImage from "./sanity-image"

interface NotePost {
    title: string
    date: string
    content: string
    likes: number
    comments: number
}

export default function NoteCard({ note }: { note: any }) {
    return (
        <Link
            href={`/notes/${note.slug.current}`}
            className="w-full h-fit rounded p-3 gap-2 flex flex-col transition-all hover:bg-accent/30"
        >
            <div className="rounded-md overflow-hidden border border-slate-200/0">
                <SanityImage
                    image={note.mainImage}
                    sizes="400px"
                    className="aspect-[2.5]"
                    priority
                />
            </div>

            <div className="flex flex-col justify-between w-full">
                <div>
                    <h2 className="font-semibold text-xl text-foreground line-clamp-1">
                        {note.title}
                    </h2>
                    <p className="text-xs text-justify mb-2 line-clamp-2 h-[32px]">
                        {note.description}
                    </p>
                </div>

                {note.tags && (
                    <div className="flex flex-wrap gap-2 mb-2">
                        {note.tags.map((tag: string) => (
                            <Tag
                                key={tag}
                                name={tag}
                                custom={{ variant: "minimal", icon: true }}
                            />
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] text-muted-foreground/80">
                        {new Date(note._createdAt).toDateString().slice(4)}
                    </p>
                    <div className="flex text-[10px] text-muted-foreground/80 gap-2">
                        {/* <div className="flex items-center gap-1">
                            <AiOutlineHeart className="text-xs" /> 12
                        </div>
                        <div className="flex items-center gap-1">
                            <TfiCommentAlt /> 2
                        </div> */}
                    </div>
                </div>
            </div>
        </Link>
    )
}
