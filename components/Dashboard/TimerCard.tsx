"use client"
import React, { useState } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react';

function TimerCard() {
    const [timerRunning, setTimerRunning] = useState(false);
    const [focusTime, setFocusTime] = useState(25);
    const [currentTime, setCurrentTime] = useState(25 * 60);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-emerald-100" >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 Odak Seansı</h3>

            <div className="flex flex-col items-center mb-6">
                <div className="relative w-48 h-48">
                    <svg className="transform -rotate-90 w-48 h-48">
                        <circle cx="96" cy="96" r="88" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                        <circle
                            cx="96" cy="96" r="88"
                            stroke="url(#gradient)"
                            strokeWidth="12"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 88}`}
                            strokeDashoffset={`${2 * Math.PI * 88 * (1 - currentTime / (focusTime * 60))}`}
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#14b8a6" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-gray-800">{formatTime(currentTime)}</span>
                        <span className="text-sm text-gray-500 mt-1">{focusTime} dakika</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-2 mb-4">
                {[15, 25, 45, 60].map((minutes) => (
                    <button
                        key={minutes}
                        onClick={() => {
                            setFocusTime(minutes);
                            setCurrentTime(minutes * 60);
                        }}
                        className={`flex-1 py-2 rounded-lg font-medium transition-all ${focusTime === minutes
                            ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {minutes}dk
                    </button>
                ))}
            </div>

            <div className="flex gap-3">
                <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="flex-1 bg-linear-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                    {timerRunning ? <><Pause className="w-5 h-5" />Duraklat</> : <><Play className="w-5 h-5" />Başlat</>}
                </button>
                <button
                    onClick={() => setCurrentTime(focusTime * 60)}
                    className="bg-gray-100 text-gray-600 p-3 rounded-xl hover:bg-gray-200 transition-all"
                >
                    <RotateCcw className="w-5 h-5" />
                </button>
            </div>
        </div >
    )
}

export default TimerCard