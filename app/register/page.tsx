'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Brain,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Chrome,
    Github,
    User,
    Check,
    Sparkles,
    Target,
    Trophy
} from 'lucide-react';

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleSubmit = () => {
        console.log('Signup:', formData);
    };

    const passwordRequirements = [
        { text: 'En az 8 karakter', met: formData.password.length >= 8 },
        { text: 'Bir büyük harf', met: /[A-Z]/.test(formData.password) },
        { text: 'Bir küçük harf', met: /[a-z]/.test(formData.password) },
        { text: 'Bir rakam', met: /[0-9]/.test(formData.password) }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4 py-12">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">

                {/* Sol Panel - Bilgi/Özellikler */}
                <div className="hidden lg:flex flex-col justify-center space-y-8 p-12">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                            <Brain className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-3xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Mindsprout
                        </span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                            Yolculuğuna Başla 🚀
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ücretsiz hesap oluştur ve odaklanma yolculuğuna hemen başla. İlk ağacını dikmek için sabırsızlanıyoruz!
                        </p>
                    </div>

                    {/* Özellik Kartları */}
                    <div className="space-y-4">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 flex items-start gap-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                                <Sparkles className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Ücretsiz Başla</h3>
                                <p className="text-sm text-gray-600">Kredi kartı gerektirmez. Hemen kullanmaya başla.</p>
                            </div>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-teal-100 flex items-start gap-4">
                            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                                <Target className="w-6 h-6 text-teal-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Özelleştirilebilir Arsa</h3>
                                <p className="text-sm text-gray-600">Kendi 3D dünyanı oluşturmaya başla.</p>
                            </div>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-cyan-100 flex items-start gap-4">
                            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
                                <Trophy className="w-6 h-6 text-cyan-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Başarımlar Kazan</h3>
                                <p className="text-sm text-gray-600">Rozetler topla, seviyeleri geç.</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="relative">
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>
                    </div>
                </div>

                {/* Sağ Panel - Kayıt Formu */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-emerald-100 max-h-[90vh] overflow-y-auto">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
                        <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Mindsprout
                        </span>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Hesap Oluştur</h2>
                        <p className="text-gray-600">Ücretsiz hesabınla hemen başla</p>
                    </div>

                    {/* Social Signup Buttons */}
                    <div className="space-y-3 mb-6">
                        <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl py-3 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group">
                            <Chrome className="w-5 h-5 text-gray-700 group-hover:text-emerald-600" />
                            <span className="font-semibold text-gray-700 group-hover:text-emerald-600">Google ile Kayıt Ol</span>
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl py-3 hover:border-gray-400 hover:bg-gray-50 transition-all group">
                            <Github className="w-5 h-5 text-gray-700" />
                            <span className="font-semibold text-gray-700">GitHub ile Kayıt Ol</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">veya email ile</span>
                        </div>
                    </div>

                    {/* Signup Form */}
                    <div className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Ad Soyad
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    placeholder="Ad Soyad"
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
                                />
                            </div>
                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Kullanıcı Adı
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="text-gray-400 font-medium">@</span>
                                </div>
                                <input
                                    type="text"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    placeholder="kullaniciadi"
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Adresi
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="ornek@email.com"
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Şifre
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
                                />
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>

                            {/* Password Requirements */}
                            {formData.password && (
                                <div className="mt-3 space-y-2">
                                    {passwordRequirements.map((req, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm">
                                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${req.met ? 'bg-emerald-500' : 'bg-gray-200'
                                                }`}>
                                                {req.met && <Check className="w-3 h-3 text-white" />}
                                            </div>
                                            <span className={req.met ? 'text-emerald-600' : 'text-gray-500'}>
                                                {req.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Şifre Tekrar
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
                                />
                                <button
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                                <p className="mt-2 text-sm text-red-600">Şifreler eşleşmiyor</p>
                            )}
                        </div>

                        {/* Terms Agreement */}
                        <div className="pt-2">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 mt-0.5"
                                />
                                <span className="text-sm text-gray-700">
                                    <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-700">Kullanım Şartları</a> ve{' '}
                                    <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-700">Gizlilik Politikası</a>'nı okudum ve kabul ediyorum.
                                </span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={!agreedToTerms}
                            className="w-full cursor-pointer bg-linear-to-r from-emerald-500 to-teal-500 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            Hesap Oluştur
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Zaten hesabın var mı?{' '}
                            <Link
                                href="/login"
                                className="font-semibold text-emerald-600 hover:text-emerald-700"
                            >
                                Giriş Yap
                            </Link>
                        </p>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span>Güvenli</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span>Şifreleme</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span>Ücretsiz</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}