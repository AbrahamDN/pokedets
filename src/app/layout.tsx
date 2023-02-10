"use client";
import Image from "next/image";
import PokemonList from "./components/PokemonList";
import "./globals.css";
import useWindowSize, { Size } from "./hooks/useWindowSize";
import HeaderLogo from "./components/HeaderLogo";
import { useSidebar } from "./store/sidebar.store";
import { useScreenStore } from "./store/screenSize.store";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width }: Size = useWindowSize();
  const isLargeScreen = (width as number) >= 1024;
  const { sidebar, toggleSidebar } = useSidebar();
  const { setLgScreen } = useScreenStore();

  useEffect(() => {
    setLgScreen(isLargeScreen);
  }, [isLargeScreen, setLgScreen]);

  return (
    <html lang="en" className="h-full">
      <head />
      <body className="h-full">
        <div className="h-full bg-slate-200 flex relative">
          {sidebar && <Sidebar />}

          <div className="w-full px-5 py-6 md:px-10 lg:py-10 lg:px-16">
            <header className="flex w-full max-w-screen-xl justify-center items-center py-8 mx-auto relative">
              <button
                onClick={toggleSidebar}
                className="w-6 h-6 absolute right-0 lg:left-0 font-bold"
              >
                <Image
                  src={`/img/icons/sidebar-${sidebar ? "close" : "open"}.svg`}
                  alt="Open sidebar"
                  width={24}
                  height={24}
                />
              </button>

              <HeaderLogo />
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
