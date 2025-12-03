import { Flame } from 'lucide-react'
import CountUp from 'react-countup'

interface StreakBadgeProps {
    days?: number
}

function StreakBadge({ days }: StreakBadgeProps) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r cursor-pointer hover:scale-105 duration-300 from-amber-100 to-orange-100 rounded-full">
            <Flame className="w-5 h-5 text-orange-600" />
            {/* <span className="font-semibold text-orange-700">{days} gün</span> */}
            <CountUp
                start={0}
                end={10}
                className='font-semibold text-orange-700'
                suffix=' gün'
            />
        </div>
    )
}

export default StreakBadge