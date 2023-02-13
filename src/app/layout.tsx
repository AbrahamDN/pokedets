"use client";
import "./globals.css";
import useWindowSize, { Size } from "./hooks/useWindowSize";
import { useSidebar } from "./store/sidebar.store";
import { useScreenStore } from "./store/screenSize.store";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useLoading } from "./store/loading.store";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width }: Size = useWindowSize();
  const isLargeScreen = (width as number) >= 1024;
  const { sidebar } = useSidebar();
  const { setLgScreen } = useScreenStore();
  const { loading } = useLoading();

  useEffect(() => {
    setLgScreen(isLargeScreen);
  }, [isLargeScreen, setLgScreen]);

  return (
    <html lang="en" className="h-full">
      <head />
      <body className="h-full">
        <div className="h-full flex relative">
          <Sidebar show={sidebar} />

          <section className="bg-transparent w-full min-h-full overflow-hidden overflow-y-auto px-5 py-6 md:px-10 lg:py-10 lg:px-16 flex flex-col items-center relative">
            <Header noLogo={sidebar} />

            {children}
          </section>
        </div>

        {loading && <Loading />}
      </body>
    </html>
  );
}
