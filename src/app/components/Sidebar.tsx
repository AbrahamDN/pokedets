import React from "react";
import HeaderLogo from "./HeaderLogo";
import Image from "next/image";
import PokemonList from "./PokemonList";
import { useScreenStore } from "../store/screenSize.store";
import { useSidebar } from "../store/sidebar.store";

const Sidebar = () => {
  const { lgScreen } = useScreenStore();
  const { toggleSidebar } = useSidebar();
  return (
    <aside className="sidebar h-full w-full lg:w-4/5 lg:min-w-[340px] max-lg:absolute bg-white px-5 py-6 md:px-10 lg:py-10 lg:px-16 flex justify-center z-40">
      <div className="w-full max-w-screen-xl">
        <header className="flex w-full max-w-screen-xl justify-between min-[350px]:justify-center items-center py-8 mx-auto relative gap-2">
          <HeaderLogo />

          {!lgScreen && (
            <button
              onClick={toggleSidebar}
              className="w-6 h-6 min-[350px]:absolute right-0 font-bold"
            >
              <Image
                src="/img/icons/sidebar-close.svg"
                alt="Close sidebar"
                width={24}
                height={24}
              />
            </button>
          )}
        </header>

        <div className="max-w-lg">
          <PokemonList />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
