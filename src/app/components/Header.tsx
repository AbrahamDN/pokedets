import Image from "next/image";
import { useScreenStore } from "../store/screenSize.store";
import HeaderLogo from "./HeaderLogo";
import { useSidebar } from "../store/sidebar.store";
import { AnimatePresence, motion } from "framer-motion";

type HeaderProps = {
  noLogo?: boolean;
  type?: "default" | "sidebar";
};

const Header = ({ noLogo, type = "default" }: HeaderProps) => {
  const { lgScreen } = useScreenStore();
  const { sidebar, toggleSidebar } = useSidebar();

  const forSidebar = type === "sidebar";

  return (
    <header
      className={`flex w-full max-w-screen-xl justify-between min-[350px]:justify-center items-center py-8 mx-auto relative gap-2`}
      style={{ height: !lgScreen ? 17.25 : 27.25 }}
    >
      <AnimatePresence>
        {!noLogo && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 360,
              damping: 25,
            }}
          >
            <HeaderLogo />
          </motion.span>
        )}
      </AnimatePresence>

      {((lgScreen && !forSidebar) || !lgScreen) && (
        <button
          onClick={toggleSidebar}
          className={`w-6 h-6 min-[350px]:absolute ${
            forSidebar || !lgScreen ? "right-0" : "left-0"
          } font-bold`}
        >
          <Image
            src={`/img/icons/sidebar-${sidebar ? "close" : "open"}.svg`}
            alt={`${sidebar ? "Close" : "Open"} sidebar`}
            width={24}
            height={24}
          />
        </button>
      )}
    </header>
  );
};
export default Header;
