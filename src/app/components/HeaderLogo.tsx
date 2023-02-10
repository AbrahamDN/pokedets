import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useScreenStore } from "../store/screenSize.store";

const HeaderLogo = () => {
  const { lgScreen } = useScreenStore();
  return (
    <Link href="/" className="cursor-pointer">
      <Image
        src={`/img/pokeDets-logo.svg`}
        alt="logo"
        width={!lgScreen ? 113.71 : 174.23}
        height={!lgScreen ? 17.25 : 27.25}
      />
    </Link>
  );
};

export default HeaderLogo;
