import Text from "./Text";

type ProgressProps = {
  as?: keyof JSX.IntrinsicElements;
  label?: string;
  percent: number;
};

const Progress = ({ as: Element = "li", label, percent }: ProgressProps) => {
  return (
    <Element className="w-full">
      {label && (
        <Text as="span" level={4}>
          {label}
        </Text>
      )}

      <div className="w-full bg-fade rounded-full h-2 mt-1.5">
        <div
          className="bg-black h-2 rounded-full"
          style={{ width: percent + "%" }}
        />
      </div>
    </Element>
  );
};
export default Progress;
