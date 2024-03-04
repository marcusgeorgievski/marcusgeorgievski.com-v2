import { getComments } from "@/actions/comments"
import Section from "../sections/section"
import CommentForm from "./comment-form"
import CommentList from "./comment-list"

interface CommentsProps {
    //children: React.ReactNode;
}

export default async function Comments({ noteId }: { noteId: string }) {
    const comments = await getComments(noteId)

    // console.log(comments)
    return (
        <div className="mt-8 max-w-[80ch] mx-auto">
            <Section>Comments</Section>

            <CommentList comments={comments} />

            <CommentForm noteId={noteId} />
        </div>
    )
}
