"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { tags } from "@/lib/tags"
import Tag from "@/components/tag"
import { useState } from "react"

interface NotesFilterProps {
    //children: React.ReactNode;
}

export default function NotesFilter({
    filters,
    setFilters,
}: {
    filters: Set<string>
    setFilters: (filters: Set<string>) => void
}) {
    return (
        <>
            <Accordion type="single" collapsible className="w-fit">
                <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="py-2 md:w-fit flex gap-4">
                        Filter
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="inline-flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <button
                                    key={tag.name}
                                    onClick={() => {
                                        if (filters.has(tag.name!)) {
                                            filters.delete(tag.name!)
                                            setFilters(new Set(filters))
                                        } else {
                                            setFilters(
                                                new Set(filters.add(tag.name!))
                                            )
                                        }
                                    }}
                                >
                                    <Tag
                                        name={tag.name!}
                                        custom={{
                                            variant: "minimal",
                                            border: false,
                                            icon: true,
                                            active: filters.has(tag.name!),
                                        }}
                                        // className="text-xs font-mono text-accent-foreground/80 bg-accent/10 px-2 py-1 rounded"
                                    />
                                </button>
                            ))}
                        </div>
                        {filters.size > 0 && (
                            <button
                                onClick={() => setFilters(new Set([]))}
                                className="mt-3 text-sm text-muted-foreground/80 flex items-center gap-1"
                            >
                                clear filters
                            </button>
                        )}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}
