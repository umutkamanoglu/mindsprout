import { Brain } from "lucide-react"

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">Mindsprout</span>
                        </div>
                        <p className="text-gray-400">Odaklan, büyüt, başar.</p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Ürün</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#features" className="hover:text-white transition-colors">Özellikler</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Mobil Uygulamalar</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Yol Haritası</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Şirket</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Yasal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Çerez Politikası</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Mindsprout. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer