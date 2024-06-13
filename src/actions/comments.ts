"use server"
import { commentSchema } from "@/lib/types"
import { z } from "zod"
import sql from "@/lib/db"

export async function getComments(postId: string) {
    try {
        const results =
            await sql`SELECT * FROM "comments" WHERE postId = ${postId} ORDER BY "createdAt" DESC`
        return results
    } catch (error: any) {
        return {
            error: "Something went wrong!" + error.message,
        }
    }
}

export async function getCommentsPage(postId: string, page: number) {
    try {
        const results =
            await sql`SELECT * FROM "comments" WHERE postId = ${postId} ORDER BY "createdAt" DESC
            LIMIT 1 OFFSET ${(page - 1) * 1}`
        return results
    } catch (error: any) {
        return {
            error: "Something went wrong!" + error.message,
        }
    }
}

export async function deleteComment(id: string) {
    try {
        const result =
            await sql`DELETE FROM "comments" WHERE "commentId" = ${id}`
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
