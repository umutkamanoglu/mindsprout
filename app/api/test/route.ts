import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
    const users = await prisma.users.findMany();
    return NextResponse.json(users);
}