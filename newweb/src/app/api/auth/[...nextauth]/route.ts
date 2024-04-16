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
import CredentialsProvider from 'next-auth/providers/credentials'

export const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "email", type: 'text', placeholder: 'email' },
                password: { label: "password", type: "password", placeholder: 'password' }
            },
            async authorize(credentials: any) {
                console.log(credentials);

                return {
                    id: "2",
                    name: "sarfraz khan",
                    email: "sarfraz",
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        // jwt: ({ token, user }) => {
        //     console.log(token)
        //     token.userId = token.sub;
        //     return token
        // },

        session: ({ session, token, user }: any) => {
            console.log(session)
            session.user.id = token.sub
            return session
        }
    }
})

export const GET = handler
export const POST = handler