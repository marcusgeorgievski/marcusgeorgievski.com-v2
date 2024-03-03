"use server"
import sql from "@/lib/db"
import { nanoid } from "nanoid"

export async function getLikes(postId: string) {
    // const results = await sql`SELECT * FROM "Comment" ORDER BY "createdAt" ASC`
    // return results
}

export async function deleteLike(id: string) {
    // const results = await sql`DELETE FROM "Comment" WHERE id = ${id}`
    // return results
}

export async function createLike(postId: string) {
    // const results = await sql`INSERT INTO "Comment" ${sql(comment)}`
    // return results
}
