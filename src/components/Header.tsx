import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";

type Props = {
  onOpen: () => void;
};

const Header = (props: Props) => {
  return (
    <Flex
      bg="teal.400"
      w="100%"
      zIndex="docked"
      color="white"
      height={20}
      align="center"
    >
      <Button
        variant="ghost"
        fontSize={"2xl"}
        boxSize={12}
        onClick={() => props.onOpen()}
        margin={2}
      >
        <HamburgerIcon />
      </Button>
      <Text
        fontSize={{ base: "3xl", lg: "6xl" }}
        py={{ base: 2, lg: 0 }}
        fontWeight={600}
        textAlign="center"
      >
        GDSCchuo-Membership
      </Text>
    </Flex>
  );
};

export default Header;
