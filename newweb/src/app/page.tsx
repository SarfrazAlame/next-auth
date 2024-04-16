import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Appbar />
      user components
      {JSON.stringify(session)}
    </div>
  );
}
