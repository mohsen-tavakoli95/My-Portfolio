import { HomeButton } from "@/components";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start xs:justify-center py-20 px-2 xs:px-16 lg:px-32">
      <HomeButton />
      {children}
    </main>
  );
}
