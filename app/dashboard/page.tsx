import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import {
    Clock,
    Target,
    Music,
    Play,
    ChartLine,
    Flame,
    Trophy,
    TrendingUp,
    Calendar,
    Leaf
} from "lucide-react";
import Header from '@/components/Dashboard/Header';
import TimerCard from "@/components/Dashboard/TimerCard";
import PlotViewer from "@/components/Dashboard/PlotViewer";

export default async function Page() {
    const session = await getServerSession(authOptions);

    // Oturum yoksa login'e yönlendir
    if (!session) {
        redirect("/login");
    }

    // Kullanıcı bilgilerini hazırla
    const userName = session.user?.name || session.user?.username || session.user?.email || "User";
    const userNameShort = userName
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    const stats = {
        totalFocusTime: 1247,
        todayFocus: 85,
        weekStreak: 12,
        plantsEarned: 34,
        level: 8,
        completedSessions: 47,
        dailyGoal: 120,
        weeklyData: [
            { day: 'Pzt', minutes: 120 },
            { day: 'Sal', minutes: 95 },
            { day: 'Çar', minutes: 140 },
            { day: 'Per', minutes: 110 },
            { day: 'Cum', minutes: 85 },
            { day: 'Cmt', minutes: 60 },
            { day: 'Paz', minutes: 85 },
        ],
        recentSessions: [
            { date: '2024-12-01', duration: 45, completed: true },
            { date: '2024-12-01', duration: 25, completed: true },
            { date: '2024-11-30', duration: 50, completed: true },
            { date: '2024-11-30', duration: 30, completed: false },
        ]
    };

    const maxMinutes = Math.max(...stats.weeklyData.map(d => d.minutes));

    return (
        <div className='min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50'>
            <Header
                userNameShort={userNameShort}
                userName={userName}
                userEmail={session.user?.email || ""}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Üst Grid - Timer ve 3D Arsa */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Timer Card */}
                    <div className="lg:col-span-1">
                        <TimerCard />
                    </div>

                    {/* 3D Arsa - 2 kolon genişliğinde */}
                    <div className="lg:col-span-2">
                        <PlotViewer
                            groundSize={20}
                            plantsEarned={stats.plantsEarned}
                        />
                    </div>
                </div>

                {/* İstatistik Kartları */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* Bugünkü Odak */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-emerald-100">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                            <Clock className="w-5 h-5 text-emerald-600" />
                        </div>
                        <p className="text-sm text-gray-600">Bugün</p>
                        <p className="text-3xl font-bold text-gray-800">{stats.todayFocus}</p>
                        <p className="text-xs text-gray-500">dakika</p>

                        {/* Progress Bar */}
                        <div className="mt-3">
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                                <span>Hedef: {stats.dailyGoal}dk</span>
                                <span>{Math.round((stats.todayFocus / stats.dailyGoal) * 100)}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-linear-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                                    style={{ width: `${Math.min((stats.todayFocus / stats.dailyGoal) * 100, 100)}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tamamlanan Seanslar */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-teal-100">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                            <Target className="w-5 h-5 text-teal-600" />
                        </div>
                        <p className="text-sm text-gray-600">Seans</p>
                        <p className="text-3xl font-bold text-gray-800">{stats.completedSessions}</p>
                        <p className="text-xs text-gray-500">tamamlandı</p>

                        <div className="mt-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-teal-600" />
                            <span className="text-xs text-gray-600">Bu ay +12 seans</span>
                        </div>
                    </div>

                    {/* Streak */}
                    <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl shadow-xl p-6 border border-orange-200">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                            <Flame className="w-5 h-5 text-orange-600" />
                        </div>
                        <p className="text-sm text-gray-600">Günlük Seri</p>
                        <p className="text-3xl font-bold text-gray-800">{stats.weekStreak}</p>
                        <p className="text-xs text-gray-500">gün üst üste</p>

                        <div className="mt-3 flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-orange-600" />
                            <span className="text-xs text-gray-600">Rekor serin: 30 gün</span>
                        </div>
                    </div>
                </div>

                {/* Alt Grid - Grafik ve Diğerleri */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Haftalık Grafik - 2 kolon */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 border border-emerald-100">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                                    <ChartLine className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Haftalık İstatistikler</h3>
                                    <p className="text-sm text-gray-600">Son 7 gün</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Ortalama</p>
                                <p className="text-2xl font-bold text-emerald-600">
                                    {Math.round(stats.weeklyData.reduce((a, b) => a + b.minutes, 0) / 7)}dk
                                </p>
                            </div>
                        </div>

                        {/* Grafik */}
                        <div className="flex items-end justify-between gap-3 h-64">
                            {stats.weeklyData.map((day, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                    <div className="w-full bg-gray-100 rounded-t-lg overflow-hidden relative h-full flex items-end">
                                        <div
                                            className="w-full bg-linear-to-t from-emerald-500 to-teal-500 rounded-t-lg transition-all duration-500 hover:from-emerald-600 hover:to-teal-600 relative group cursor-pointer"
                                            style={{ height: `${(day.minutes / maxMinutes) * 100}%` }}
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                {day.minutes} dk
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600">{day.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sağ Kolon - Müzik ve Aktiviteler */}
                    <div className="space-y-6">
                        {/* Müzik Kontrolü */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                                <Music className="w-5 h-5 text-purple-600" />
                            </div>
                            <p className="text-sm text-gray-600 mb-1">Müzik Kontrolü</p>
                            <p className="text-xs text-gray-500 mb-4">Odaklanırken müzik dinle</p>

                            <button className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                <Play className="w-4 h-4" />
                                Spotify Bağla
                            </button>
                        </div>

                        {/* Ödüller */}
                        <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-6 border border-amber-200">
                            <div className="flex items-center justify-between mb-3">
                                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <Trophy className="w-5 h-5 text-amber-600" />
                                </div>
                                <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">
                                    Level {stats.level}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">Kazanılan Ödüller</p>
                            <div className="flex items-baseline gap-2 mb-4">
                                <p className="text-3xl font-bold text-gray-800">{stats.plantsEarned}</p>
                                <span className="text-sm text-gray-600">toplam nesne</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Leaf className="w-4 h-4 text-emerald-600" />
                                <span className="text-xs text-gray-600">Arsana {Math.floor(stats.plantsEarned / 10)} ağaç eklenebilir</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Son Seanslar */}
                <div className="mt-6 bg-white rounded-2xl shadow-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Son Seanslar</h3>
                            <p className="text-sm text-gray-600">Geçmiş aktiviteleriniz</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.recentSessions.map((session, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${session.completed
                                    ? 'bg-emerald-100'
                                    : 'bg-gray-200'
                                    }`}>
                                    {session.completed ? (
                                        <Clock className="w-6 h-6 text-emerald-600" />
                                    ) : (
                                        <Target className="w-6 h-6 text-gray-500" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">{session.duration} dk</p>
                                    <p className="text-xs text-gray-500">{session.date}</p>
                                    <div className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${session.completed
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-gray-200 text-gray-600'
                                        }`}>
                                        {session.completed ? '✓ Tamamlandı' : '○ Yarıda'}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}