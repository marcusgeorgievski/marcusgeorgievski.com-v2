import Section from "@/components/section"

interface PostsProps {
    //children: React.ReactNode;
}

export default function Posts() {
    return (
        <>
            <Section subtitle="Click an image to view a demo">
                Recent Posts
            </Section>

            <div className="h-screen grid grid-cols-3 pt-8">
                <div id="post">
                    <h1 className="text-lg font-bold">
                        How to use Tailwind CSS
                    </h1>
                    <p>
                        Getting started with the net/http package in Go by
                        building a simple web server.
                    </p>
                </div>
            </div>
        </>
    )
}
