import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, { params: { authRoutes } }: any) {
    console.log(authRoutes)
    return NextResponse.json({
        message: "Sarfraz Khan"
    })
}