import Text from "./Text";

const PokemonList = () => {
  return (
    <div>
      <Text as="h1" level={1}>
        Heading 1
      </Text>
      <Text as="h2" level={2}>
        Heading 2
      </Text>
      <Text as="h3" level={3}>
        Heading 3
      </Text>
      <Text as="h4" level={4}>
        Heading 4
      </Text>
      <Text>Paragraph</Text>
    </div>
  );
};

export default PokemonList;
