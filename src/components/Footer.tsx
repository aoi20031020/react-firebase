import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="teal.600" w="100%" p={4} color="white" mt={4}>
      <Text textAlign="center">&copy; {new Date().getFullYear()} GDSCchuo</Text>
    </Box>
  );
};

export default Footer;
