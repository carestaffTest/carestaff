import TranslateWithGoogle from "@/components/shared/TranslateWithGoogle";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex-center min-h-screen w-full bg-login-img bg-cover bg-center">
      {children}
      <TranslateWithGoogle />
    </div>
  );
};

export default Layout;
