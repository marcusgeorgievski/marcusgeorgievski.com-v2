"use client"
import { useState, useEffect } from "react"

interface PointerProps {
    //children: React.ReactNode;
}

interface Position {
    x: number
    y: number
}

export default function Pointer() {
    const [pos, setPos] = useState<Position>({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent) => {
        setPos({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    // return large circle blur

    return (
        <div className="relative">
            <div
                className="bg-blue-600 lg:flex items-center justify-center z-[1] pointer-events-none blur-[200px] opacity-[0.10] backdrop-blur-3xl hidden "
                style={{
                    position: "fixed",
                    top: pos.y,
                    left: pos.x,
                    width: "700px",
                    height: "700px",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    background:
                        "radial-gradient(600px at 150px 542px, rgba(29, 78, 216, 0.15)",
                }}
            ></div>
            <div
                className="bg-red-500 z-[100]  items-center justify-center pointer-events-none hidden"
                style={{
                    position: "fixed",
                    top: pos.y,
                    left: pos.x,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    background:
                        "radial-gradient(600px at 150px 542px, rgba(29, 78, 216, 0.15)",
                }}
            ></div>
        </div>
    )

    // return (
    //     <div
    //         className="pointer-events-none bg-[] fixed inset-0  transition duration-300 flex items-start justify-center"
    //         style={{
    //             background:
    //                 "radial-gradient(600px at 150px 542px, rgba(29, 78, 216, 0.15)",
    //             opacity: "80%",
    //             top: pos.y,
    //             left: pos.x,
    //             transform: "translate(-50%, -50%)",
    //         }}
    //     >
    //         e
    //     </div>
    // )

    // return (
    //     <div
    //         className="flex items-center justify-center z-0 pointer-events-none"
    //         style={{
    //             position: "fixed",
    //             top: pos.y,
    //             left: pos.x,
    //             // width: "20px",
    //             // height: "20px",
    //             // borderRadius: "50%",
    //             // backgroundColor: "red",
    //             transform: "translate(-50%, -50%)",
    //         }}
    //     >
    //         <img src="/cow.png" alt="hi" className="w-[200px] h-[200px]" />
    //     </div>
    // )
}
