import Link from "next/link"
import { SlHeart } from "react-icons/sl"
import { AiOutlineHeart } from "react-icons/ai"
import { TfiCommentAlt } from "react-icons/tfi"

interface BlogPost {
    title: string
    date: string
    content: string
    likes: number
    comments: number
}
interface BlogCardProps {
    //children: React.ReactNode;
}

export default function BlogCard({ blog }: { blog: BlogPost }) {
    const { title, date, content, likes, comments } = blog

    return (
        <Link
            href={`/blog/${title.toLowerCase().split(" ").join("-")}`}
            className="border w-full rounded p-3 gap-2 flex flex-col sm:flex-row transition-all hover:bg-accent/30"
        >
            <div className="w-full border rounded-sm aspect-video sm:h-[100px] sm:w-fit">
                <img
                    src="https://miro.medium.com/v2/resize:fit:1200/0*zKkSjGmRg-_1FQgX.jpg"
                    alt=""
                    className="h-full"
                />
            </div>
            <div>
                <p className="font-semibold text-xl text-foreground line-clamp-1">
                    Title of Post
                </p>
                <p className="text-xs text-justify mb-2 line-clamp-2">
                    This is a short description. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit.
                </p>

                <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] text-muted-foreground/80">
                        Feb 19, 2024
                    </p>
                    <div className="flex text-[10px] text-muted-foreground/80 gap-2">
                        <div className="flex items-center gap-1">
                            <AiOutlineHeart className="text-xs" /> 12
                        </div>
                        <div className="flex items-center gap-1">
                            <TfiCommentAlt /> 2
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
