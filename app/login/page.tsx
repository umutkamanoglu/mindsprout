"use client";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CountUp from "react-countup";
import {
  Brain,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Chrome,
  Github,
  Leaf,
} from "lucide-react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Eğer oturum varsa dashboard'a yönlendir
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  // Yükleniyor durumu
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Kontrol ediliyor...</p>
        </div>
      </div>
    );
  }

  // Eğer oturum varsa hiçbir şey gösterme (yönlendirme yapılıyor)
  if (status === "authenticated") {
    return null;
  }

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Email ve şifre gereklidir.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email veya şifre hatalı. Lütfen tekrar deneyin.");
      } else {
        // Başarılı giriş
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  // Enter tuşu ile giriş
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Sol Panel - Bilgi/Görsel */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 p-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Mindsprout
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Tekrar Hoş Geldin! 👋
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Arsanı büyütmeye kaldığın yerden devam et. Yeni başarımlar ve
              ödüller seni bekliyor!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100">
              <CountUp
                start={0}
                end={10}
                className="text-4xl font-bold text-emerald-600 mb-2"
                suffix="K+"
              />
              <div className="text-sm text-gray-600">Aktif Kullanıcı</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100">
              <CountUp
                start={0}
                end={500}
                className="text-4xl font-bold text-teal-600 mb-2"
                suffix="K+"
              />
              <div className="text-sm text-gray-600">Tamamlanan Seans</div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-emerald-200">
              <div className="text-center">
                <Leaf className="w-24 h-24 text-emerald-600 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">
                  Arsanı Keşfetmeye Devam Et
                </p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>

        {/* Sağ Panel - Giriş Formu */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-emerald-100">
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Mindsprout
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl cursor-pointer font-bold text-gray-900 mb-2">
              Giriş Yap
            </h2>
            <p className="text-gray-600">
              Hesabına erişim sağla ve odaklanmaya başla
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <button className="w-full cursor-pointer flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl py-3 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group">
              <Chrome className="w-5 h-5 text-gray-700 group-hover:text-emerald-600" />
              <span className="font-semibold text-gray-700 group-hover:text-emerald-600">
                Google ile Devam Et
              </span>
            </button>
            <button className="w-full cursor-pointer flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl py-3 hover:border-gray-400 hover:bg-gray-50 transition-all group">
              <Github className="w-5 h-5 text-gray-700" />
              <span className="font-semibold text-gray-700">
                GitHub ile Devam Et
              </span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                veya email ile
              </span>
            </div>
          </div>

          {/* Hata mesajı */}
          {error && (
            <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-600 font-medium">{error}</p>
            </div>
          )}

          <div className="space-y-5">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="ornek@email.com"
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Şifre
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="••••••••"
                  disabled={loading}
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                  className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                />
                <span className="text-sm text-gray-700">Beni Hatırla</span>
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Şifremi Unuttum?
              </a>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Giriş Yapılıyor...
                </>
              ) : (
                <>
                  Giriş Yap
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Hesabın yok mu?{" "}
              <Link
                href="/register"
                className="font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Hemen Kayıt Ol
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Güvenli Bağlantı</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>256-bit Şifreleme</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}