"use server"
import { commentSchema } from "@/lib/types"
import { z } from "zod"
import sql from "@/lib/db"

export async function getComments(postId: string) {
    try {
        const results =
            await sql`SELECT * FROM "comments" WHERE postId = ${postId} ORDER BY "createdAt" ASC`
        return results
    } catch (error: any) {
        return {
            error: "Something went wrong!" + error.message,
        }
    }
}

export async function deleteComment(id: string) {
    const del = `DELETE FROM "comments" WHERE "commentId" = '${id}'`
    try {
        await sql(del)
        // console.log(results, `DELETE FROM "comments" WHERE postId = ${id}`)
        // return results
    } catch (error: any) {
        return {
            error: "Something went wrong!" + error.message,
        }
    }
}

export async function createComment(
    comment: z.infer<typeof commentSchema>,
    noteId: string
) {
    try {
        await sql`INSERT INTO "comments" (postId, name, comment) VALUES (${noteId}, ${comment.name}, ${comment.comment})`
    } catch (error: any) {
        return {
            error: "Something went wrong!" + error.message,
        }
    }
}
