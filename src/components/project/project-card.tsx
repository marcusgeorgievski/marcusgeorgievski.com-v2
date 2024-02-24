"use client"
import Image from "next/image"
import { Project as P } from "@/lib/types"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { IoIosLaptop } from "react-icons/io"
import Tag from "@/components/tag"

export default function Project({ project }: { project: P }) {
    const { title, description, image, tags, github, live, video } = project

    return (
        <div className="md:grid md:grid-cols-[200px,auto] md:gap-8 p-4 hover:bg-accent/30 transition-all rounded ">
            {video ? (
                <Dialog>
                    <DialogTrigger
                        disabled={true}
                        asChild
                        className="xl:w-[280px] w-full mb-4 xl:mb-0 hover:cursor-pointer"
                    >
                        <Image
                            src={`/${image}`}
                            width={1200}
                            height={100}
                            alt={title}
                            className="rounded border"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </DialogTrigger>
                    <DialogContent>
                        <div className="w-[calc(100vw-8rem)] max-w-[1000px] mt-4 border rounded">
                            <video
                                autoPlay
                                width="1000"
                                src={`/${video}`}
                                controls
                            ></video>
                        </div>
                    </DialogContent>
                </Dialog>
            ) : (
                <Image
                    src={`/${image}`}
                    width={1200}
                    height={100}
                    alt={title}
                    className="rounded border xl:w-[280px]"
                    priority
                    sizes="40vw"
                />
            )}

            <div>
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-sm">{description}</p>
                {tags && (
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {tags.map((tag, i) => (
                            <Tag
                                key={i}
                                name={tag}
                                custom={{
                                    variant: "minimal",
                                    border: false,
                                    icon: true,
                                }}
                            />
                        ))}
                    </div>
                )}
                <div className="flex items-center mt-2 space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-7 px-1.5"
                        aria-label="GitHub"
                    >
                        <Link
                            href={github}
                            target="_blank"
                            className="text-sm"
                            aria-label="Project's Github"
                        >
                            <FaGithub />
                        </Link>
                    </Button>
                    {live && (
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 px-2"
                            aria-label="Link"
                        >
                            <Link
                                href={live}
                                target="_blank"
                                className="flex items-center gap-2"
                            >
                                <IoIosLaptop />
                                Live
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
