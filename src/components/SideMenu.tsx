import { Box } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { CommonMenuButton } from "./CommonMenuButton";
import { MenuItem } from "./MenuItem";

type Props = {
  width: string;
};

export const SideMenu = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Box w={props.width} position="fixed" h="full" py={3} bg="green.200">
      {MenuItem.map((item) => (
        <Box textAlign="left">
          <CommonMenuButton
            title={item.name}
            onClick={() => navigate(item.path)}
          />
        </Box>
      ))}
    </Box>
  );
};
