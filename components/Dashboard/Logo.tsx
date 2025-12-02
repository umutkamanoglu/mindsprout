"use client"
import { Leaf } from "lucide-react"

function Logo() {
    return (
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Mindsprout
            </span>
        </div>
    )
}

export default Logo