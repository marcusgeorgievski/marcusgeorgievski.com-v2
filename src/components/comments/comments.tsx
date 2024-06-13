import { getComments } from "@/actions/comments"
import Section from "../sections/section"
import CommentForm from "./comment-form"
import CommentList from "./comment-list"
import { Comment } from "@/lib/types"

interface CommentsProps {
    //children: React.ReactNode;
}

export default async function Comments({ noteId }: { noteId: string }) {
    // const comments = await getComments(noteId)
    const comments: Comment[] = []

    // console.log(comments)
    return (
        <div className="mt-8 max-w-[80ch] mx-auto">
            <Section>Comments</Section>

            <CommentList comments={comments} noteId={noteId} />

            <CommentForm noteId={noteId} />
        </div>
    )
}
