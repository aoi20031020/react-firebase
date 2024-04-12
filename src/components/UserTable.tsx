import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { database } from "../firebaseApp";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const COLLECTION_NAME = "member"; // コレクション名

// Firestore に格納されるデータの型定義
type Data = {
  name: string;
  id: string;
  email: string;
  grade: string;
};

function UserTable() {
  const [userList, setUserList] = useState<Data[]>([]);

  useEffect(() => {
    // Firestoreからデータをリアルタイムに取得する
    const usersCollection = collection(database, COLLECTION_NAME);
    const q = query(usersCollection, orderBy("name")); // 名前でソート
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users: Data[] = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data() as Data);
      });
      setUserList(users);
    });

    // コンポーネントがアンマウントされたときにリッスンを停止する
    return unsubscribe;
  }, []);

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>名前</Th>
          <Th>学籍番号</Th>
          <Th>メールアドレス</Th>
          <Th>学年</Th>
        </Tr>
      </Thead>
      <Tbody>
        {userList.map((user) => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.id}</Td>
            <Td>{user.email}</Td>
            <Td>{user.grade}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default UserTable;
