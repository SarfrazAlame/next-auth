"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Appbar = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Signin
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        logout
      </button>

      {JSON.stringify(session.data?.user)}
    </div>
  );
};

export default Appbar;
