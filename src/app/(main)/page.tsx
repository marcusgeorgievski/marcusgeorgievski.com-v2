import Hero from "@/components/sections/hero"
import Projects from "@/components/project/projects"
import MessageForm from "@/components/messages/message-form"
import Messages from "@/components/messages/messages"
import { Suspense } from "react"
import Skills from "@/components/sections/skills"

export default function Home({ searchParams: { msg } }: any) {
    return (
        <div className="flex flex-col gap-12 md:gap-20">
            <div className="xl:grid xl:grid-cols-[450px,auto] xl:py-20 flex flex-col gap-16">
                <div className="pt-12 xl:pt-0  xl:w-full">
                    <div className="xl:sticky top-20 ">
                        <Hero />
                    </div>

                    <div></div>
                </div>

                <div>
                    <Projects />
                </div>
            </div>

            <div>
                <Skills />
            </div>

            <div>{/* <Posts /> */}</div>

            <div>
                <MessageForm />
            </div>

            <div>
                {msg === process.env.PASSWORD && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Messages />
                    </Suspense>
                )}
            </div>
        </div>
    )
}
