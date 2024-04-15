'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { signIn, signOut } from 'next-auth/react'

const Appbar = () => {
    const router = useRouter()
  return (
    <div>
        <button onClick={()=>{
            signIn()
        }}>Signin</button>
         <button onClick={()=>{
            signOut()
        }}>logout</button>
    </div>
  )
}

export default Appbar