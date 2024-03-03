import ProfileCard from "@/components/notes/profile-card"
import { client } from "@/../sanity/lib/client"
import { Metadata } from "next"
import NotesList from "./notes"
import { SiGnometerminal } from "react-icons/si"

export const metadata: Metadata = {
    title: "Notes | Marcus Georgievski",
    description: "A collection of notes from person studies.",
}

export default async function NotesPage() {
    const allNotesQuery = `*[_type == "post"]`
    const notes = await client.fetch(
        allNotesQuery,
        {},
        // { cache: "no-cache" }
        { next: { revalidate: 60 } }
    )

    // console.log(allNotes)

    return (
        <>
            <div className="py-8 flex flex-col gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold flex items-center gap-4 mb-1">
                        <SiGnometerminal />
                        Notes
                    </h1>
                    <p>
                        Collection of notes on programming and other interests
                    </p>
                </div>
                {/* <div>
                    <ProfileCard />
                </div> */}
                <NotesList notes={notes} />
            </div>
        </>
    )
}
