import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Entry from "../pages/Entry";
import Member from "../pages/Member";
import MyProfile from "../pages/MyProfile";

// pages は [{key:key1, path:path1, element:element1}, ...] を受け取る
export const AppRouter = () => {
  return (
    <>
      <Box w="70vw">
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </Box>
    </>
  );
};
