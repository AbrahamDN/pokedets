"use client";
import Image from "next/image";
import Text from "./components/Text";
import PokemonTemplate from "./pokemon/template";
import { useScreenStore } from "./store/screenSize.store";
import Progress from "./components/Progress";
import { useSidebar } from "./store/sidebar.store";

export default function Home() {
  const { lgScreen } = useScreenStore();
  const { sidebar } = useSidebar();
  const breakpoint = lgScreen && sidebar;
  return (
    <main className="w-full max-w-screen-xl h-auto flex flex-col items-center flex-grow max-lg:pb-8">
      <PokemonTemplate>
        <div className="max-lg:mt-6 lg:mb-6 lg:self-center">
          <Text as="span" level={3}>
            #609
          </Text>

          <Text as="h1" level={1} className="mb-4 lg:mb-6">
            Chandelure
          </Text>

          <Text>
            It absorbs a spirit, which it then burns. By waving the flames on
            its arms, it puts its foes into a hypnotic trance.
          </Text>
        </div>

        <div
          className={`relative w-full h-full lg:aspect-square ${
            breakpoint || !lgScreen ? "row-start-1" : "items-center"
          } flex justify-center `}
        >
          <Image
            className="lg:absolute"
            src={`/img/pokemon/609.png`}
            alt="Pokemon"
            width={lgScreen ? (sidebar ? 359 : 409) : 217}
            height={lgScreen ? (sidebar ? 359 : 409) : 217}
          />
        </div>

        <div className="w-full text-left max-lg:mt-10">
          <div className="mb-10">
            <Text as="h2" level={2} className="mb-7">
              Type
            </Text>

            <ul className="w-full flex flex-wrap gap-2.5">
              <li>
                <Text
                  as="div"
                  className="rounded-full bg-purple-500 text-white font-semibold w-fit py-1.5 px-4"
                >
                  Ghost
                </Text>
              </li>
              <li>
                <Text
                  as="div"
                  className="rounded-full bg-orange-500 text-white font-semibold w-fit py-1.5 px-4"
                >
                  Fire
                </Text>
              </li>
            </ul>
          </div>

          <div className="">
            <Text as="h2" level={2} className="mb-7">
              Stats
            </Text>

            <ul className="w-full sm:px-7 grid gap-6">
              <Progress label="HP : 78" percent={45} />
              <Progress label="ATTACK : 84" percent={50} />
              <Progress label="DEFENCE : 78" percent={45} />
              <Progress label="SPEED : 109" percent={60} />
              <Progress label="SP.ATTACK : 85" percent={55} />
              <Progress label="SP.DEFENCE : 100" percent={69} />
            </ul>
          </div>
        </div>
      </PokemonTemplate>
    </main>
  );
}
