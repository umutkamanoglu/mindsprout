"use client"
import { Leaf } from 'lucide-react'
import StreakBadge from './StreakBadge'
import Logo from './Logo'

function Header() {
    return (
        <header
            className='bg-white h-18 border border-x-0 border-t-0 border-gray-200 flex items-center justify-between p-[2vw]'
        >
            <Logo />
            <div className="flex items-center gap-4">
                <StreakBadge days={12} />

                <div className="flex items-center gap-2">
                    <div className="text-right">
                        <p className="text-xs text-gray-600">Level 8</p>
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-linear-to-r from-emerald-500 to-teal-500 transition-all duration-300" style={{ width: '39%' }} />
                        </div>
                    </div>
                    <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        8
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header