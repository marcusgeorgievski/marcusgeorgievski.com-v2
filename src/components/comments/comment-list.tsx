"use client"
import { deleteComment } from "@/actions/comments"
import { Comment } from "@/lib/types"
import moment from "moment-timezone"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
// import { GoChevronDown, GoChevronUp } from "react-icons/go"
import { BsFillTrash3Fill, BsGridFill, BsList } from "react-icons/bs"

interface CommentListProps {
    //children: React.ReactNode;
}

export default function CommentList({ comments }: { comments: Comment[] }) {
    const [open, setOpen] = useState(false)
    const [grid, setGrid] = useState(true)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    function delComment(id: string) {
        startTransition(async () => {
            await deleteComment(id)
            router.refresh()
        })
    }

    return (
        <div className="grid grid-cols-1 gap-6 mb-6">
            {comments.map((comment) => {
                // const date = new Date(comment.createdat).toLocaleTimeString()
                let date = moment(comment.createdAt)
                    .tz("America/New_York")
                    .format("MMM DD YYYY - hh:mm A")

                // clg

                return (
                    <div
                        key={comment.commentId}
                        className="pl-4 border-l-2 relative"
                    >
                        <p className="text-sm  text-foreground">
                            {comment.name}
                        </p>
                        <p className="text-xs mb-2 text-muted-foreground">
                            {date}
                        </p>
                        <p className="text-xs ">{comment.comment}</p>

                        {
                            <button
                                disabled={isPending}
                                onClick={() => delComment(comment.commentId)}
                            >
                                <BsFillTrash3Fill className="text-red-800 text-xs top-2 right-2 absolute opacity-60" />
                            </button>
                        }
                    </div>
                )
            })}
        </div>
    )
}
