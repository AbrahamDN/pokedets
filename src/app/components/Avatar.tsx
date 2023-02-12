import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  className?: string;
};

const Avatar = ({ src, alt, className }: AvatarProps) => {
  return (
    <figure
      className={`min-w-[5rem] min-h-[5rem] grid content-center rounded-full p-3.5 ring-2 ring-fade relative max-[250px]:hidden ${
        className || ""
      }`}
    >
      <Image src={src} alt={alt} width={80} height={80} />
    </figure>
  );
};
export default Avatar;
