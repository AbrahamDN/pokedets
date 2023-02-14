"use client";
import { FormEvent, useState } from "react";
import SearchIcon from "./Icon/SearchIcon";
import { useSearch } from "../store/search.store";
import { useRouter } from "next/navigation";
import { useSidebar } from "../store/sidebar.store";
import { useScreenStore } from "../store/screenSize.store";

type SearchInputProps = {
  disable?: boolean;
};

const SearchInput = ({ disable }: SearchInputProps) => {
  const router = useRouter();
  const { value, setValue } = useSearch();
  const { lgScreen } = useScreenStore();
  const { setSidebar } = useSidebar();

  const [trigger, setTrigger] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (disable) {
      setTrigger(true);
      return;
    }

    if (!lgScreen) setSidebar(false);

    router.push(`/pokemon/${value.toLowerCase()}`);
  };

  return (
    <form method="GET" className="w-full mb-10" onSubmit={handleSubmit}>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <input
          className={`py-4 px-6 pr-16 w-full rounded-full ring-2 ring-fade focus:${
            trigger ? "ring-red-400" : disable ? "" : "ring-black"
          } transition-all focus:outline-none focus:text-black text-base`}
          placeholder="Search Pokemon by name or id"
          //   autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <span className="absolute inset-y-0 right-0 flex items-center pr-6">
          <button
            type="submit"
            className={`p-1 focus:outline-none focus:shadow-outline ${
              trigger ? "text-red-400" : disable ? "" : "text-black"
            } transition-all`}
          >
            <SearchIcon />
          </button>
        </span>
      </div>
    </form>
  );
};
export default SearchInput;
