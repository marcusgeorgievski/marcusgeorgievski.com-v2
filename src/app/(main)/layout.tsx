import Pointer from "@/components/pointer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="z-10">{/* <Pointer /> */}</div>
            <main className="max-w-[1200px] min-h-[calc(100vh-110px)] mx-auto px-6 pb-6 z-10 relative">
                {children}
            </main>
            <footer className="max-w-[1200px]  mx-auto px-6 z-10 relative">
                <Link href="/studio" target="_blank">
                    <Button
                        variant="link"
                        className="text-muted-foreground/20 px-0"
                    >
                        Admin
                    </Button>
                </Link>
            </footer>
        </>
    )
}
