import WidgetItem from "@/components/WidgetItem";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <WidgetItem title="Usuario Conectado Server Side">
          <div className="flex flex-col">
            <span>{session.user?.name}</span>
            <Image
              className="rounded-full"
              src={session.user?.image || ""}
              alt="User Image"
              width={50}
              height={50}
            />
            <span>{session.user?.image}</span>
            <span>{session.user?.email}</span>
          </div>
        </WidgetItem>
      </div>
    </>
  );
}