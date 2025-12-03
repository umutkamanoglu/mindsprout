
function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-white/50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Nasıl Çalışır?
                    </h2>
                    <p className="text-xl text-gray-600">3 basit adımda başla</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                            1
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Süreyi Seç</h3>
                        <p className="text-gray-600">15-60 dakika arası odak seansı süresini belirle. Pomodoro tekniği ile başla.</p>
                    </div>

                    <div className="text-center">
                        <div className="w-20 h-20 bg-linear-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                            2
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Odaklan</h3>
                        <p className="text-gray-600">Dikkat dağıtıcı şeylerden uzak dur, işine konsantre ol. Zamanlayıcı bitene kadar devam et.</p>
                    </div>

                    <div className="text-center">
                        <div className="w-20 h-20 bg-linear-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                            3
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Arsanı Büyüt</h3>
                        <p className="text-gray-600">XP kazan, seviye atla, yeni nesneler unlock et. 3D arsanı özelleştir ve büyüt!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks