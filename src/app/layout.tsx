import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Viewport } from "next"

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Marcus Georgievski",
    description: "Marcus Georgievski's personal website",
    keywords: [
        "Marcus Georgievski",
        "Georgievski",
        "Full Stack Developer",
        "Web Developer",
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={""}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <div className="relative min-h-screen bg-background">
                        <Header />
                        <main className="max-w-[1200px] mx-auto px-6 z-10 pb-16">
                            {children}
                        </main>
                        <Toaster />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
