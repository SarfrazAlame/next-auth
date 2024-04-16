import { getServerSession } from "next-auth";
import React from "react";
import {authOptions} from '../lib/auth'

const page = async () => {
  const session = await getServerSession(authOptions);
  return <div>{JSON.stringify(session?.user)}</div>;
};

export default page;
