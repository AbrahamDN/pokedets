import PokemonEntry from "./PokemonEntry";
import SearchInput from "./SearchInput";

const PokemonList = () => {
  return (
    <section className="max-w-screen-xl w-full flex flex-col items-center flex-grow h-inherit">
      <SearchInput />

      <p className="w-full mb-6 ">
        Results: <mark className="font-medium bg-transparent">6</mark>
      </p>

      <hr />

      <div className="w-full grid grid-cols-1 divide-y-2 flex-grow overflow-y-auto scrollbar-hide px-1 pb-24">
        <span />
        <PokemonEntry id={609} name="Chandelure" type={["ghost", "fire"]} />
        <PokemonEntry id={609} name="Chandelure" type={["ghost", "fire"]} />
        <PokemonEntry id={609} name="Chandelure" type={["ghost", "fire"]} />
        <PokemonEntry id={609} name="Chandelure" type={["ghost", "fire"]} />
        <PokemonEntry id={609} name="Chandelure" type={["ghost", "fire"]} />
        <PokemonEntry id={609} name="Chandelure" type={["ghost", "fire"]} />
      </div>
    </section>
  );
};

export default PokemonList;
