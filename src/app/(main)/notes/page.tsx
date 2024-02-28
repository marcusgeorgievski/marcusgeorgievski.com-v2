import NoteCard from "@/components/notes/note-card"
import ProfileCard from "@/components/notes/profile-card"
import { client } from "@/../sanity/lib/client"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Notes | Marcus Georgievski",
    description: "A collection of notes from person studies.",
}

export default async function NotesPage() {
    const allNotesQuery = `*[_type == "post"]`
    const notes = await client.fetch(allNotesQuery, {}, { cache: "no-cache" })

    // console.log(allNotes)

    return (
        <>
            <div className="py-8 flex flex-col gap-4">
                <h1 className="text-4xl font-extrabold">Notes</h1>
                {/* <div>
                    <ProfileCard />
                </div> */}

                {/* <div className="text-xl text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <p>In Progress</p>
                    </div>
                    <p className="text-muted-foreground text-xs">coming soon</p>
                </div> */}

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {notes.map((note: any) => (
                        <NoteCard key={note._id} note={note} />
                    ))}
                </div>
            </div>
        </>
    )
}

const notes = [
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
]
