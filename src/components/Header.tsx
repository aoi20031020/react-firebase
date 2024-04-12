import { Box, Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      zIndex={10}
      bg="teal.200"
      width="full"
      height="100px"
      textAlign="right"
      py={1}
      px={6}
    >
      <Box bg="teal.400" w="100%" p={4} color="white">
        <Heading>GDSCchuo-Membership</Heading>
      </Box>
    </Flex>
  );
};

export default Header;
