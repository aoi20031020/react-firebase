import { AppRouter } from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, Flex } from "@chakra-ui/react";
import { SideMenu } from "./components/SideMenu";
const App = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box flexGrow={1}>
        <Header />
      </Box>
      <Box
        w="100vw"
        h={{ base: "calc(100vh - 80px)", lg: "calc(100vh - 100px)" }}
      >
        <SideMenu width="20vw" />
        <Box
          w={{ base: "100vw", lg: "80vw" }}
          ml={{ base: "0vw", lg: "19vw" }}
          p={{ base: "3", lg: "4" }}
        >
          <AppRouter />
        </Box>
      </Box>
      <Box flexGrow={1}>
        <Footer />
      </Box>
    </Flex>
  );
};

export default App;
