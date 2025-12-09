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

        const checkUser = await prisma.users.findFirst({
            where: {
                username
            }
        })

        if (checkUser) {
            return NextResponse.json({ status: "fail", message: "Kullanıcı adı mevcut." });
        }

        const encryptedPassword = await bcrypt.hash(crypto.createHash("sha256").update(password).digest("hex"), 10);

        const newUser = await prisma.users.create({
            data: {
                username,
                fullname,
                email,
                password: encryptedPassword
            }
        })

        return NextResponse.json({ status: "success", message: "Kullanıcı başarıyla oluşturuldu.", data: newUser });

    } catch (error) {
        return NextResponse.json({ status: "fail", message: "an error occurred", error: error });
    }
}