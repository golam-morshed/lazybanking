import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = await getLoggedInUser();
  if (!loggedInUser) redirect("/sign-in");
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedInUser} />
      <div className='flex size-full flex-col'>
        <div className="root-layout">
          <Image src='/icons/logo.svg' alt='Lazy Banking' width={30} height={30} className="cursor-pointer" />
          <div className="">
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
