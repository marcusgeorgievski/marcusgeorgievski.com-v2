import Pointer from "@/components/pointer"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="z-10">{/* <Pointer /> */}</div>
            <main className="max-w-[1200px] mx-auto px-6 pb-16 z-10 relative">
                {children}
            </main>
        </>
    )
}
