import React from "react";
import PokemonList from "./PokemonList";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";

type SidebarProps = {
  show?: boolean;
};

const Sidebar = ({ show }: SidebarProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          layout
          initial={{ x: "-120%" }}
          animate={{ x: 0 }}
          exit={{
            x: "-120%",
            minWidth: 0,
            width: 0,
            padding: 0,
            scaleX: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 25,
          }}
          className="sidebar h-full w-full lg:w-4/5 lg:min-w-[340px] max-lg:absolute bg-white px-5 py-6 md:px-10 lg:py-10 lg:px-16 flex justify-center z-40 border-r border-fade"
        >
          <div className="w-full max-w-screen-xl flex-grow flex flex-col overflow-y-hidden px-1">
            <Header type="sidebar" />

            <div className="max-w-lg mx-auto w-full h-full max-h-[85%]">
              <PokemonList />
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
