import { AppRouter } from "./components/AppRouter";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import DrawerMenu from "./components/DrawerMenu";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction="column" minHeight="100vh">
      <Box>
        <Header onOpen={onOpen} />
      </Box>
      <Flex>
        <DrawerMenu isOpen={isOpen} onClose={onClose} />
        <Box>
          <AppRouter />
        </Box>
      </Flex>
      {/* <Box>
        <Footer />
      </Box> */}
    </Flex>
  );
};

export default App;
