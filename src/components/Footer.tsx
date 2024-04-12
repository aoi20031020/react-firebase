import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bg="teal.400"
      w="100%"
      zIndex="docked"
      color="white"
      height={10}
      bottom="0"
    >
      <Text>&copy; {new Date().getFullYear()} GDSCchuo</Text>
    </Flex>
  );
};

export default Footer;
