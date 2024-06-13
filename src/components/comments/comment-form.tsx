"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createComment } from "@/actions/comments"
import { useState, useTransition } from "react"
import { commentSchema } from "@/lib/types"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { scrollTo } from "@/lib/utils"

export default function CommentForm({ noteId }: { noteId: string }) {
    const [isPending, startTransition] = useTransition()
    const { toast } = useToast()
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof commentSchema>>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            name: "",
            comment: "",
        },
    })

    function onSubmit(values: z.infer<typeof commentSchema>) {
        // await createMessage(values)
        startTransition(async () => {
            createComment(values, noteId).then((res: any) => {
                if (res?.error) {
                    toast({
                        title: "Error",
                        description: "Something went wrong :(",
                        variant: "destructive",
                    })
                    return
                }
                toast({
                    title: res?.title || "Comment sent",
                    description: res?.description || "Thanks for commenting!",
                })
                form.resetField("comment")
            })
            router.refresh()
        })
    }

    return (
        <div>
            <button
                onClick={() => {
                    setOpen(!open)

                    if (open) {
                        setTimeout(() => {
                            scrollTo("comment-form")
                        }, 400)
                    }
                }}
                className="text-blue-600 hover:underline text-xs text-muted-foreground mb-2"
            >
                Write a comment
            </button>

            {open && (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                        id="comment-form"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="max-w-md ">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="name" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="comment"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Comment</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder=""
                                            className="resize-none h-[120px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isPending}>
                            Submit
                        </Button>
                    </form>
                </Form>
            )}
        </div>
    )
}
