import { client } from "@/../sanity/lib/client"
import NotePage from "../../../../components/notes/note-page"
import { Metadata } from "next"

interface SlugPageProps {
    params: { slug: string }
}

export async function generateMetadata({
    params: { slug },
}: {
    params: { slug: string }
}): Promise<Metadata> {
    // read route params
    const query = `*[_type == "post" && slug.current == $slug][0]`
    const note = await client.fetch(
        query,
        { slug },
        { next: { revalidate: 30 } }
        // { cache: "no-cache" }
    )

    return {
        title: note.title,
        description: note.description,
    }
}

export default async function SlugPage({ params }: SlugPageProps) {
    const { slug } = params
    const query = `*[_type == "post" && slug.current == $slug][0]`
    const note = await client.fetch(
        query,
        { slug },
        // { cache: "no-cache" }
        { next: { revalidate: 60 } }
    )

    if (!note) {
        return <div>404</div>
    }

    return <NotePage note={note} />
}
