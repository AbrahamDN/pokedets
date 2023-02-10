type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  children: any;
  level?: 1 | 2 | 3 | 4 | "base";
};

const Text = ({ as: Element = "p", children, level = "base" }: TextProps) => {
  const classNames: { [key: number | string]: string } = {
    1: "text-3xl lg:text-4xl",
    2: "text-xl lg:text-2xl",
    3: "text-lg lg:text-xl",
    4: "text-md lg:text-base font-bold",
    base: "text-sm md:text-md lg:text-base",
  };

  return <Element className={`${classNames[level]}`}>{children}</Element>;
};

export default Text;
