import NoteCard from "@/components/notes/note-card"
import ProfileCard from "@/components/notes/profile-card"

export default async function NotesPage() {
    const res = await fetch(
        "https://nw71i56n.api.sanity.io/v2024-02-23/data/query/production?query=*%5B_type+%3D%3D+%27post%27%5D+%0A%0A"
    )
    const bs = await res.json()

    return (
        <>
            <div className="py-8">
                {/* HEADER */}
                <div>
                    <ProfileCard />
                </div>

                {/* FILTERS */}
                <div></div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
                    <NoteCard note={notes[0]} />
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
