import NoteCard from "@/components/notes/note-card"
import ProfileCard from "@/components/notes/profile-card"
import { PiWarning } from "react-icons/pi"

export default async function NotesPage() {
    const res = await fetch(
        "https://nw71i56n.api.sanity.io/v2024-02-23/data/query/production?query=*%5B_type+%3D%3D+%27post%27%5D+%0A%0A"
    )
    const bs = await res.json()

    return (
        <>
            <div className="py-8 flex flex-col gap-4">
                {/* HEADER */}
                <div>
                    <ProfileCard />
                </div>

                <div className="text-xl text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <p>In Progress</p>
                    </div>
                    <p className="text-muted-foreground text-xs">coming soon</p>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2">
                    <NoteCard note={notes[0]} />
                </div>

                <div></div>
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
