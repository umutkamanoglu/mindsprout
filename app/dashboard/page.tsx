import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Header from '@/components/Dashboard/Header';
import TimerCard from "@/components/Dashboard/TimerCard";

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

    return (
        <div className='min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50'>
            <Header
                userNameShort={userNameShort}
                userName={userName}
                userEmail={session.user?.email || ""}
            />
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
                    <div className="lg:col-span-1 space-y-6">

                        <TimerCard />
                    </div>

                </div>
            </div>
        </div>
    );
}