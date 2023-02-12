"use client";
import { FormEvent } from "react";
import SearchIcon from "./Icon/SearchIcon";
import { useSearch } from "../store/search.store";

const SearchInput = () => {
  const { value, setValue } = useSearch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form method="GET" className="w-full mb-10" onSubmit={handleSubmit}>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <input
          //   type="search"
          className="py-4 px-6 pr-16 w-full rounded-full ring-2 ring-fade focus:ring-black focus:outline-none focus:text-black text-base"
          placeholder="Search Pokemon by ID (609)"
          //   autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <span className="absolute inset-y-0 right-0 flex items-center pr-6">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <SearchIcon />
          </button>
        </span>
      </div>
    </form>
  );
};
export default SearchInput;
