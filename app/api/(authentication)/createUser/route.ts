import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import crypto from "crypto";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;
        const fullname = formData.get("fullname") as string;

        // Validasyon kontrolleri
        if (!username || !email || !password) {
            return NextResponse.json({
                status: "fail",
                message: "Kullanıcı adı, email ve şifre gereklidir."
            }, { status: 400 });
        }

        if (password !== confirmPassword) {
            return NextResponse.json({
                status: "fail",
                message: "Şifreler eşleşmiyor."
            }, { status: 400 });
        }

        // Kullanıcı adı kontrolü
        const checkUser = await prisma.users.findFirst({
            where: {
                username
            }
        });

        if (checkUser) {
            return NextResponse.json({
                status: "fail",
                message: "Kullanıcı adı mevcut."
            }, { status: 400 });
        }

        // Email kontrolü (NextAuth için önemli - email unique olmalı)
        const checkEmail = await prisma.users.findFirst({
            where: {
                email
            }
        });

        if (checkEmail) {
            return NextResponse.json({
                status: "fail",
                message: "Bu email adresi zaten kullanılıyor."
            }, { status: 400 });
        }

        // Şifreyi hash'le
        const encryptedPassword = await bcrypt.hash(
            crypto.createHash("sha256").update(password).digest("hex"),
            10
        );

        const newUser = await prisma.users.create({
            data: {
                username,
                fullname: fullname || null,
                email,
                password: encryptedPassword
            }
        });

        // Hassas bilgileri döndürme
        return NextResponse.json({
            status: "success",
            message: "Kullanıcı başarıyla oluşturuldu.",
            data: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                fullname: newUser.fullname
            }
        }, { status: 201 });

    } catch (error) {
        console.error("Kullanıcı oluşturma hatası:", error);
        return NextResponse.json({
            status: "fail",
            message: "Bir hata oluştu."
        }, { status: 500 });
    }
}