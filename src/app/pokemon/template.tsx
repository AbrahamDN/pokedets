"use client";
import { useScreenStore } from "../store/screenSize.store";
import { useSidebar } from "../store/sidebar.store";

type PokemonTemplateProps = {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
};

const PokemonTemplate = ({ children: elements }: PokemonTemplateProps) => {
  elements = Array.isArray(elements) ? elements : [elements];

  const { lgScreen } = useScreenStore();
  const { sidebar } = useSidebar();
  const children = Array.from(elements);
  const breakpoint = lgScreen && !sidebar;

  return (
    <section
      className={`h-auto w-full grid ${
        breakpoint ? "grid-cols-3" : "text-center max-lg:max-w-md"
      } gap-5 ${!sidebar ? "lg:place-content-center" : "max-w-md"} my-auto`}
    >
      {children}
    </section>
  );
};
export default PokemonTemplate;
