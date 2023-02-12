import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.319 14.433a8 8 0 1 0-1.412 1.411l.043.045 4.242 4.243a1 1 0 0 0 1.415-1.415l-4.243-4.242a1.117 1.117 0 0 0-.045-.042Zm-2.076-9.15a5.999 5.999 0 1 1-8.414 8.553 5.999 5.999 0 0 1 8.414-8.553Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SearchIcon;
