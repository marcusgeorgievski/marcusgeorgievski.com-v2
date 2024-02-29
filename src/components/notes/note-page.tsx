"use client"
import { PortableText } from "@portabletext/react"
import Tag from "@/components/tag"
import SanityImage from "./sanity-image"
import SanityCode from "./sanity-code"
import Link from "next/link"
import { client } from "$/lib/client"

interface NotePageProps {
    note: any
}

export default function NotePage({ note }: NotePageProps) {
    // console.log(note)

    return (
        <div className="py-10 max-w-[80ch] mx-auto">
            {/* <ProfileCard className=" mb-4" /> */}
            <p className="text-[10px] text-muted-foreground mb-4 font-mono">
                {new Date(note._createdAt).toDateString().slice(4)}
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-1">
                {note.title}
            </h1>
            <p className="text-sm md:text-base">{note.description}</p>

            {note.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                    {note.tags.map((tag: string) => (
                        <Tag
                            key={tag}
                            name={tag}
                            // custom={{ variant: "minimal" }}
                        />
                    ))}
                </div>
            )}

            <SanityImage
                image={note.mainImage}
                sizes="100vw"
                className="rounded  mx-auto border overflow-hidden mt-6 mb-2"
            />

            <article className="py-5 dark:prose-invert prose prose-base max-w-none mx-auto ">
                <PortableText
                    value={note.body}
                    components={{
                        types: {
                            image: ({ value }) => (
                                <SanityImage
                                    image={value}
                                    sizes="100vw"
                                    className="rounded-sm mx-auto"
                                />
                            ),
                            code: ({ value }) => (
                                <SanityCode
                                    code={value.code}
                                    language={value.language}
                                    filename={value.filename}
                                />
                            ),
                        },
                        block: {},
                        marks: {
                            // internalLink: async ({ value, children }) => {
                            //     const { slug } = await client.fetch(
                            //         '*[_type == "post" && _id == $id]{"slug": slug.current}[0]',
                            //         { id: value.reference._ref }
                            //     )
                            //     let URL
                            //     if (process.env.NODE_ENV === "development") {
                            //         URL = process.env.DEV_URL
                            //     }
                            //     if (process.env.NODE_ENV === "production") {
                            //         URL = process.env.PROD_URL
                            //     }
                            //     return (
                            //         <a href={`${URL}/notes/${slug}`}>
                            //             {children}
                            //         </a>
                            //     )
                            // },
                            // link: ({ value, children }) => {
                            //     return (
                            //         <a href={value.href} target="_blank">
                            //             {children}
                            //         </a>
                            //     )
                            // },
                        },
                    }}
                />
            </article>
        </div>
    )
}
