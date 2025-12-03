import { Play } from "lucide-react"
import Link from "next/link"

function Cta() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="bg-linear-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-center shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Hazır Mısın?
                </h2>
                <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
                    Bugün başla, ilk odak seansını tamamla ve arsanda ilk ağacı dik!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/register"
                        className="bg-white cursor-pointer text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all text-lg flex items-center justify-center gap-2"
                    >
                        <Play className="w-5 h-5" />
                        Ücretsiz Başla
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Cta