import HeroBadge from './HeroBadge'
import Link from 'next/link'
import { Play, LogIn, ChevronDown } from 'lucide-react'

function Hero() {
    return (
        <section
            className='h-[calc(100vh-5rem)] flex flex-col items-center justify-center max-w-7xl mx-auto px-4 relative'
        >
            <HeroBadge />

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight text-center">
                Her Odak Seansı,
                <br />
                <span className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Yeni Bir Başarı
                </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed text-center max-w-3xl">
                Pomodoro tekniği ile odaklan, her seansla arsanı büyüt. 3D dünyanda ağaçlar, binalar inşa et.
                Mindsprout ile üretkenliğini artır ve başarılarını somutlaştır.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                    href="/register"
                    className="bg-linear-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center gap-2 text-lg w-full sm:w-auto"
                >
                    <Play className="w-5 h-5" />
                    Hemen Kullanmaya Başla
                </Link>
                <Link
                    href="/login"
                    className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2 text-lg border-2 border-gray-200 w-full sm:w-auto"
                >
                    <LogIn className="w-5 h-5" />
                    Giriş Yap
                </Link>
            </div>

            <ChevronDown className="w-14 h-14 text-gray-400 animate-bounce absolute bottom-6" />
        </section>
    )
}

export default Hero