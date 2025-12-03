"use client"
import StreakBadge from './StreakBadge'
import Logo from '../Logo'
import UserSection from './UserSection'

function Header() {
    return (
        <header
            className='bg-white h-20 border border-x-0 border-t-0 border-gray-200 flex items-center justify-between p-[2vw]'
        >
            <Logo />
            <div className="flex items-center gap-4">
                <StreakBadge days={12} />

                <UserSection
                    level={5}
                    progress={65}
                    userNameShort="JD"
                />
            </div>
        </header >
    )
}

export default Header