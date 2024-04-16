// import { NextRequest, NextResponse } from "next/server";
// export function GET(req: NextRequest, { params: { authRoutes } }: {
//     params: { authRoutes: string[] }
// }) {
//     console.log(authRoutes)
//     return NextResponse.json({
//         message: "Sarfraz Khan"
//     })
// }



import NextAuth from "next-auth/next";
import  {authOptions} from '../../../lib/auth'

const handler = NextAuth(authOptions)



export const GET = handler
export const POST = handler