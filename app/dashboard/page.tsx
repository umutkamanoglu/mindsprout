import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Header from '@/components/Dashboard/Header';

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
        </div>
    );
}