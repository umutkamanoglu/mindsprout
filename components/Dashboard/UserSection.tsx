"use client"
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { LogOut, User, Settings } from 'lucide-react';

interface UserSectionProps {
    level: number;
    progress: number;
    userNameShort: string;
    userName: string;
    userEmail: string;
}

function UserSection({ level, progress, userNameShort, userName, userEmail }: UserSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/login' });
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 hover:bg-gray-50 rounded-xl p-2 transition-all"
            >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                    {userNameShort}
                </div>
                <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900">Level {level}</div>
                    <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <span className="text-xs text-gray-500">{progress}%</span>
                    </div>
                </div>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                        <div className="px-4 py-3 border-b border-gray-100">
                            <div className="font-semibold text-gray-900">{userName}</div>
                            <div className="text-sm text-gray-500">{userEmail}</div>
                        </div>

                        <button
                            className="w-full text-left px-4 py-2.5 hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
                        >
                            <User className="w-4 h-4" />
                            Profil
                        </button>

                        <button
                            className="w-full text-left px-4 py-2.5 hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
                        >
                            <Settings className="w-4 h-4" />
                            Ayarlar
                        </button>

                        <div className="border-t border-gray-100 mt-2 pt-2">
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2.5 hover:bg-red-50 flex items-center gap-3 text-red-600 transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                Çıkış Yap
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default UserSection;