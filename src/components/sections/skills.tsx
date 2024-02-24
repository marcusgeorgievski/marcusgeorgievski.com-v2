"use client"
import Section from "@/components/sections/section"
import Tag from "@/components/tag"
import { webTechnologies, dataScience, languages } from "@/lib/tags"

export default function Skills() {
    // flex flex-col flex-wrap gap-12
    return (
        <div id="skills">
            <Section>Skills</Section>

            <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
                <div className="">
                    <h3 className=" mb-2 text-foreground/70">Languages</h3>

                    <div
                        className="
                    flex gap-3 flex-wrap"
                    >
                        {languages.map((language) => (
                            <Tag key={language} name={language} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className=" mb-2 text-foreground/70">
                        Web Development
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                        {webTechnologies.map((technology) => (
                            <Tag key={technology} name={technology} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className=" mb-2 text-foreground/70">Data Toolkit</h3>
                    <div className="flex gap-3 flex-wrap">
                        {dataScience.map((technology) => (
                            <Tag key={technology} name={technology} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
