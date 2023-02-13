type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  children: any;
  level?: 1 | 2 | 3 | 4 | "base" | "xs";
  className?: string;
  style?: React.CSSProperties;
};

const Text = ({
  as: Element = "p",
  children,
  level = "base",
  className,
  style,
}: TextProps) => {
  const classNames: { [key: number | string]: string } = {
    1: "text-3xl lg:text-4xl font-bakbakOne",
    2: "text-xl lg:text-2xl font-bakbakOne",
    3: "text-lg lg:text-xl font-bakbakOne",
    4: "text-md lg:text-base font-bold font-bakbakOne",
    base: "text-sm md:text-md lg:text-base",
    xs: "text-xs lg:text-sm",
  };

  return (
    <Element
      className={`${classNames[level]} ${className || ""}`}
      style={style}
    >
      {children}
    </Element>
  );
};

export default Text;
