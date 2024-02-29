"use server"
import { commentSchema } from "@/lib/types"
import { z } from "zod"
import sql from "@/lib/db"

export async function getComments(postId: string) {
    // const results = await sql`SELECT * FROM "Comment" ORDER BY "createdAt" ASC`
    // return results
}

export async function deleteComment(id: string) {
    // const results = await sql`DELETE FROM "Comment" WHERE id = ${id}`
    // return results
}

export async function createComment(comment: z.infer<typeof commentSchema>) {
    // const results = await sql`INSERT INTO "Comment" ${sql(comment)}`
    // return results
}
