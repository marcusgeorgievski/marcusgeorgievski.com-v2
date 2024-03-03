"use client"
import NoteCard from "@/components/notes/note-card"
import { tags } from "@/lib/tags"
import Tag from "@/components/tag"
import NotesFilter from "./filter"
import { useState } from "react"

interface NotesProps {
    //children: React.ReactNode;
}

export default function NotesList({ notes }: { notes: any }) {
    const [filters, setFilters] = useState<Set<string>>(new Set([]))

    const notesList = notes
        .filter((note: any) => {
            if (filters.size === 0) return true
            return note.tags.some((tag: string) => filters.has(tag))
        })

        .map((note: any) => <NoteCard key={note._id} note={note} />)

    return (
        <>
            <div>
                {/* filter by tag */}
                <NotesFilter filters={filters} setFilters={setFilters} />
            </div>

            {notesList.length > 0 ? (
                <div className="mt-4 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {notesList}
                </div>
            ) : (
                <p className="text-center mt-10">No notes Found :(</p>
            )}
        </>
    )
}
