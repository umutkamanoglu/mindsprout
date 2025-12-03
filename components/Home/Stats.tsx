import React, { useState, ReactNode } from 'react'
import { Users, Target, Clock, Star } from 'lucide-react'
import StatsCard from './StatsCard';

interface StatItem {
    value: number,
    suffix: string
    label: string,
    icon: ReactNode,
}

function Stats() {
    const [stats, setStats] = useState<StatItem[]>([
        { value: 10, label: 'Aktif Kullanıcı', icon: <Users className="w-6 h-6" />, suffix: 'K+' },
        { value: 500, label: 'Tamamlanan Seans', icon: <Target className="w-6 h-6" />, suffix: 'K+' },
        { value: 2, label: 'Odak Saati', icon: <Clock className="w-6 h-6" />, suffix: 'M+' },
        { value: 4.9, label: 'Kullanıcı Puanı', icon: <Star className="w-6 h-6" />, suffix: '/5' },
    ]);

    return (
        <div className="text-center max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-6 mb-12">
                {stats.map((stat, index) => (
                    <StatsCard
                        icon={stat.icon}
                        value={stat.value}
                        suffix={stat.suffix}
                        label={stat.label}
                        key={index}
                    />
                ))}
            </div>
        </div >
    )
}

export default Stats