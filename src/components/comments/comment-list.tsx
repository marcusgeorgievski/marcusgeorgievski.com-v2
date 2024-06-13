"use client"
import { deleteComment, getCommentsPage } from "@/actions/comments"
import { Comment } from "@/lib/types"
import moment from "moment-timezone"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
// import { GoChevronDown, GoChevronUp } from "react-icons/go"
import { BsFillTrash3Fill, BsGridFill, BsList } from "react-icons/bs"

interface CommentListProps {
    //children: React.ReactNode;
}

export default function CommentList({
    comments,
    noteId,
}: {
    comments: Comment[]
    noteId: string
}) {
    const [open, setOpen] = useState(false)
    const [grid, setGrid] = useState(true)
    const [page, setPage] = useState(1)
    const [noMoreComments, setNoMoreComments] = useState(false)
    const [commentList, setCommentList] = useState(comments)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    function delComment(id: string) {
        console.log("del", id)
        startTransition(async () => {
            await deleteComment(id)
            router.refresh()
        })
    }

    async function nextPage(page: number) {
        // console.log(noteId, page)
        const fetchedComments = await getCommentsPage(noteId, page)
        console.log(fetchedComments)
        setPage((prev) => prev + 1)
        setCommentList((prev) => [...prev, ...fetchedComments])

        if (fetchedComments.length === 0) {
            setNoMoreComments(true)
        }
    }

    return (
        <div className="grid grid-cols-1 gap-6 mb-6">
            {commentList &&
                commentList.map((comment) => {
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
                                    onClick={() =>
                                        delComment(comment.commentId)
                                    }
                                >
                                    <BsFillTrash3Fill className="text-red-800 text-xs top-2 right-2 absolute opacity-60" />
                                </button>
                            }
                        </div>
                    )
                })}

            <div>
                {!noMoreComments ? (
                    <button
                        onClick={() => nextPage(page)}
                        className="text-blue-600 hover:underline text-xs text-muted-foreground mb-2"
                    >
                        view more
                    </button>
                ) : (
                    <>all comments loaded</>
                )}
            </div>
        </div>
    )
}
