"use client"
import Cta from "@/components/Home/Cta"
import Features from "@/components/Home/Features"
import Footer from "@/components/Home/Footer"
import Header from "@/components/Home/Header"
import Hero from "@/components/Home/Hero"
import HowItWorks from "@/components/Home/HowItWorks"
import Stats from "@/components/Home/Stats"
import Testimonials from "@/components/Home/Testimonials"

export default function Home() {
    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
            <Header />
            <Hero />
            <Stats />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    )
}