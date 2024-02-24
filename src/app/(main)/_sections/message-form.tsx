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
import Section from "@/components/section"
import { Textarea } from "@/components/ui/textarea"
import { createMessage } from "@/actions/message"
import { useTransition } from "react"
import { messageSchema } from "@/lib/types"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function MessageForm() {
    const [isPending, startTransition] = useTransition()
    const { toast } = useToast()
    const router = useRouter()

    const form = useForm<z.infer<typeof messageSchema>>({
        resolver: zodResolver(messageSchema),
        defaultValues: {
            name: "",
            contact: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof messageSchema>) {
        // await createMessage(values)
        startTransition(async () => {
            createMessage(values).then((res: any) => {
                if (res?.error) {
                    toast({
                        title: "Error",
                        description: "Something went wrong :(",
                        variant: "destructive",
                    })
                    return
                }
                toast({
                    title: res?.title || "Message sent!",
                    description:
                        res?.description || "Thanks " + values.name + "!",
                })
                form.resetField("message")
            })
            router.refresh()
        })
    }

    return (
        <div id="contact">
            <Section subtitle="Send me a message!">Message</Section>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="md:grid md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
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
                            name="contact"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Contact{" "}
                                        <span className="text-xs text-muted-foreground/90 ml-2">
                                            optional
                                        </span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="email, phone, etc."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="email, phone, etc."
                                        className="resize-none h-[150px]"
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
        </div>
    )
}
