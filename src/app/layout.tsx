"use client";
import "./globals.css";
import useWindowSize, { Size } from "./hooks/useWindowSize";
import { useSidebar } from "./store/sidebar.store";
import { useScreenStore } from "./store/screenSize.store";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width }: Size = useWindowSize();
  const isLargeScreen = (width as number) >= 1024;
  const { sidebar } = useSidebar();
  const { setLgScreen } = useScreenStore();

  useEffect(() => {
    setLgScreen(isLargeScreen);
  }, [isLargeScreen, setLgScreen]);

  return (
    <html lang="en" className="h-full">
      <head />
      <body className="h-full">
        <div className="h-full flex relative">
          <Sidebar show={sidebar} />

          <section
            className="bg-slate-200 w-full min-h-full overflow-hidden overflow-y-auto px-5 py-6 md:px-10 lg:py-10 lg:px-16 flex flex-col items-center"
            style={{
              background: `linear-gradient(143.33deg, hsl(266deg 27% 47% / 13%) -28.36%, hsl(266deg 27% 47% / 0%) 78.66%), #FFFFFF`,
            }}
          >
            <Header noLogo={sidebar} />

            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
