interface SectionProps {
    children: React.ReactNode
    subtitle?: string
}

export default function Section({ children, subtitle }: SectionProps) {
    return (
        <div className="mb-4 border-b  pb-2">
            <h2 className="text-3xl font-bold">{children}</h2>
            <p className="text-sm text-foreground/50">{subtitle}</p>
        </div>
    )
}
