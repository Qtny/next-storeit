import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="flex h-full w-2/5 flex-col bg-primary-100 p-16 text-white max-md:hidden lg:py-28">
        <div className="flex flex-col gap-16 lg:gap-28">
          <div className="w-32 lg:w-36 xl:w-40">
            <Image src="/icons/logo-full.svg" height="0" width="0" sizes="100vw" className="h-auto w-full" alt="brand" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold xl:text-4xl">Manage your files the best way</h1>
            <h4 className="text-sm font-normal">Awesome, we&apos;ve created the perfect place for you to store all your documents.</h4>
          </div>
        </div>

        <div className="flex flex-1 items-end justify-center">
          <div className="w-full max-w-[342px] lg:px-8 2xl:px-0">
            <Image src="/images/files.png" alt="file" height="0" width="0" sizes="100vw" className="h-auto w-full" />
          </div>
        </div>
      </div>
      {children}
    </main>
  );
}
