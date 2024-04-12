import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="teal.500" w="100%" color="white" position="fixed" bottom="0">
      <Text textAlign="center">&copy; {new Date().getFullYear()} GDSCchuo</Text>
    </Box>
  );
};

export default Footer;
