import { Clock, Home, TrendingUp, BarChart3, Trophy, Leaf } from 'lucide-react';

function Features() {

    const features = [
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Pomodoro Zamanlayıcı',
            description: 'Özelleştirilebilir odak seansları ile verimliliğini artır. 15-60 dakika arası seçenekler.',
            color: 'from-emerald-500 to-teal-500'
        },
        {
            icon: <Home className="w-6 h-6" />,
            title: '3D Arsa Sistemi',
            description: 'Her odak seansı sonrası arsanı genişlet, ağaçlar ve binalar inşa et. Three.js ile gerçekçi görsellik.',
            color: 'from-teal-500 to-cyan-500'
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Seviye & XP Sistemi',
            description: 'Odaklandıkça seviye atla, yeni özellikler ve nesneler kilidi aç. Gamification ile motivasyon.',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: 'Detaylı İstatistikler',
            description: 'Günlük, haftalık ve aylık ilerleme grafikleri. Hedeflerini takip et, başarılarını gör.',
            color: 'from-blue-500 to-indigo-500'
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: 'Başarımlar',
            description: 'Özel görevleri tamamla, rozetler kazan. Streak sistemi ile düzenli çalışma alışkanlığı edin.',
            color: 'from-indigo-500 to-purple-500'
        },
        {
            icon: <Leaf className="w-6 h-6" />,
            title: 'Özelleştirilebilir Arsa',
            description: 'Ağaçlar, binalar, hayvanlar ve dekorasyonlarla kendi dünyani yarat. Sınırsız yaratıcılık.',
            color: 'from-purple-500 to-pink-500'
        }
    ];

    return (
        <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Özellikleri Keşfet
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Mindsprout, odaklanmanı eğlenceli bir deneyime dönüştürür
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all border border-emerald-100 group"
                    >
                        <div className={`w-14 h-14 bg-linear-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features