import { Button } from "@chakra-ui/react";

type Props = {
  title: string;
  onClick: () => void;
};

// 共通のメニューボタン
export const CommonMenuButton = (props: Props) => (
  <Button
    w="100%"
    h="auto"
    px={6}
    py={3}
    variant="ghost"
    justifyContent="start"
    onClick={props.onClick}
  >
    {/* ボタンタイトル */}
    {props.title}
  </Button>
);
