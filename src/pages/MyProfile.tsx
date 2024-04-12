import { useState } from "react";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { database } from "../firebaseApp"; // Replace with your Firebase initialization file
import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";

const COLLECTION_NAME = "member";

const MyProfile = () => {
  const [id, setId] = useState("");
  const [record, setRecord] = useState<DocumentData | null>(null);

  const fetchRecord = async () => {
    const docRef = doc(database, COLLECTION_NAME, id); // Replace "collectionName" with your collection name
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setRecord(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <>
      <h1>MyProfile</h1>
      <Flex align="center">
        <label>学籍番号</label>
        <Input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          maxWidth="300px"
          margin="16px"
        />
        <Button onClick={fetchRecord}>表示</Button>
      </Flex>
      {record && (
        <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} mt={4}>
          <Text textAlign="left">
            <strong>学籍番号:</strong> {record.id}
          </Text>
          <Text textAlign="left">
            <strong>名前:</strong> {record.name}
          </Text>
          <Text textAlign="left">
            <strong>メールアドレス:</strong> {record.email}
          </Text>
          <Text textAlign="left">
            <strong>学年:</strong> {record.grade}
          </Text>
        </Box>
      )}
    </>
  );
};

export default MyProfile;
