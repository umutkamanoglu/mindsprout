interface UserSectionProps {
    level?: number,
    progress?: number
    userNameShort?: string
}

function UserSection({ level, progress, userNameShort }: UserSectionProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="text-right">
                <p className="text-xs text-gray-600">Level {level}</p>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-emerald-500 to-teal-500 transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
            </div>
            <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {userNameShort}
            </div>
        </div>
    )
}

export default UserSection