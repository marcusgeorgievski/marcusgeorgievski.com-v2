export interface Page {
    name: string
    href: string
}

interface Comment {
    postId: string
    commentId: string
    name: string
    comment: string
    createdAt: string
}

interface Comment {
    postId: string
    likeId: string
    createdAt: string
}

export interface Tag {
    image?: string
    styles?: string

    icon?: any
    iconStyle?: string

    name?: string
    text?: string
    textStyle?: string
}

export interface Message {
    name: string
    contact: string
    body: string
}

export interface Project {
    title: string
    description: string
    image?: string
    tags?: string[]
    github: string
    live?: string | null
    video?: string | null
}

export interface NotePost {
    title: string
    description: string
    date: string
    slug: string
    tags: string[]
}

import * as z from "zod"

export const messageSchema = z.object({
    name: z.string().min(1, {
        message: "Name required!",
    }),
    contact: z.string(),
    message: z.string().min(1, {
        message: "Message required!",
    }),
})

export const commentSchema = z.object({
    displayName: z.string().min(1, {
        message: "Display name required!",
    }),
    comment: z.string().min(1, {
        message: "Comment required!",
    }),
})
