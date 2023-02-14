"use client";
import Text from "./Text";
import { theme } from "../../../tailwind.config";
import Link from "next/link";
import Avatar from "./Avatar";
import { useScreenStore } from "../store/screenSize.store";
import { useSidebar } from "../store/sidebar.store";

type PokemonEntryProps = {
  id: number | string;
  name: string;
  type?: string[];
};

const PokemonEntry = ({ id, name, type }: PokemonEntryProps) => {
  const { lgScreen } = useScreenStore();
  const { setSidebar } = useSidebar();

  const closeSidebar = () => !lgScreen && setSidebar(false);

  return (
    <Link
      href={`/pokemon/${id}`}
      className="hover:bg-slate-50 focus:bg-slate-100 focus:outline-none"
      onClick={closeSidebar}
    >
      <article className="w-full py-7 flex items-center">
        <Avatar src={`/img/pokemon/${id}.png`} alt={name} />

        <div className="ml-4 w-full flex items-center justify-between flex-wrap gap-2 sm:gap-4">
          <article className="flex flex-col uppercase">
            <Text as="span" level="xs" className="font-medium">
              #{id}
            </Text>
            <Text as="span" className="font-bakbakOne">
              {name}
            </Text>
          </article>

          <ul className="flex flex-wrap gap-2 sm:gap-4">
            {type?.map((typeName, idx) => (
              <li
                key={`type-${idx}`}
                className="w-10 h-5 bg-fade rounded-full"
                style={{
                  backgroundColor: theme.extend.colors[typeName] as string,
                }}
              />
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
};
export default PokemonEntry;
