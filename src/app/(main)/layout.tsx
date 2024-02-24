export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="max-w-[1200px] mx-auto px-6 z-10 pb-16">
            {children}
        </main>
    )
}
