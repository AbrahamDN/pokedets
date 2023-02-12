// import PokeDetsBall from "./pokedets-ball-animated.svg";

function Loading() {
  return (
    <div className="loading w-screen h-screen bg-white fixed top-0 z-50 flex justify-center items-center">
      <object
        className="w-20"
        type="image/svg+xml"
        data="/img/pokedets-ball-animated.svg"
      >
        svg-animation
      </object>
    </div>
  );
}
export default Loading;
