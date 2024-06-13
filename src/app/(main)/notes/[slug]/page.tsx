import { client } from "@/../sanity/lib/client"
import NotePage from "../../../../components/notes/note-page"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

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

  return (
    <>
      <NotePage note={note} />

      <footer className="mb-4  max-w-[85ch] mx-auto">
        <Link
          href={"/notes"}
          className="text-blue-600 hover:underline text-sm text-muted-foreground flex items-center"
        >
          <ArrowLeftIcon className="inline-block mr-1" />
          All notes
        </Link>
      </footer>

      {/* <Suspense fallback={<div>Loading...</div>}>
                <Comments noteId={note._id} />
            </Suspense> */}
    </>
  )
}
