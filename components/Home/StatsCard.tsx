"use client"
import React from 'react'
import CountUp from 'react-countup'

interface StatsCardProps {
    icon: React.ReactNode,
    value: number,
    suffix: string,
    label: string,
}

function StatsCard({ icon, value, suffix, label }: StatsCardProps) {
    return (
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100" >
            <div className="flex justify-center mb-2 text-emerald-600">
                {icon}
            </div>
            <CountUp
                start={0}
                end={value}
                enableScrollSpy
                decimals={value % 1 !== 0 ? 1 : 0}
                suffix={suffix}
                scrollSpyDelay={100}
            >
                {({ countUpRef }) => (
                    <span
                        ref={countUpRef}
                        className="text-3xl font-bold text-gray-900 mb-1"
                    />
                )}
            </CountUp>
            <div className="text-sm text-gray-600">{label}</div>
        </div>
    )
}

export default StatsCard