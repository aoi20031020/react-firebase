import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CommonMenuButton } from "./CommonMenuButton";
import { MenuItem } from "./MenuItem";

type MenuItemType = {
  name: string;
  path: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const DrawerMenu = (props: Props) => {
  const navigate = useNavigate();

  const onClickMenu = (path: string) => {
    // ページ遷移
    navigate(path);
    // ドロワーメニューを閉じる
    props.onClose();
  };

  return (
    <>
      <Drawer placement="left" isOpen={props.isOpen} onClose={props.onClose}>
        <DrawerOverlay>
          <DrawerContent bg="green.200">
            <DrawerBody>
              {MenuItem.map((item: MenuItemType) => (
                <Box textAlign="left" key={item.name}>
                  <CommonMenuButton
                    title={item.name}
                    onClick={() => onClickMenu(item.path)}
                  />
                </Box>
              ))}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
