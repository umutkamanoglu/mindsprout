"use client"
import Header from "@/components/Home/Header"
import Hero from "@/components/Home/Hero"

export default function Home() {
    return (
        <div className="h-full min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
            <Header />
            <Hero />
        </div>
    )
}