import HomepageClientSideProvider from "@/components/shared/HomepageClientSideProvider";
import NavBarHeader from "@/components/shared/NavBarHeader";
import PageFooter from "@/components/shared/PageFooter";
import TranslateWithGoogle from "@/components/shared/TranslateWithGoogle";
import { Toaster } from "@/components/ui/toaster";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;
  const user = userId ? await getUserById(userId) : "";
  const userPosition = user ? user.position : "";
  return (
    <div className="flex h-screen flex-col">
      <NavBarHeader userPosition={userPosition} children={children} />
      <main className="flex-1">{children}</main>
      <PageFooter />
      <Toaster />
      <TranslateWithGoogle />
    </div>
  );
}
