import { Sparkles } from "lucide-react"

function HeroBadge() {
    return (
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Odaklan, Büyüt, Başar
        </div>
    )
}

export default HeroBadge