import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();
  return (
    <div>
      <Appbar />
      user components
      {JSON.stringify(session)}
    </div>
  );
}
