import { useEffect, useState } from "react";
import "../App.css";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { database } from "../firebaseApp";

const COLLECTION_NAME = "member"; // コレクション名

// Firestore に格納されるデータの型定義
type Data = {
  name: string;
  id: string;
  email: string;
};

function Member() {
  const [userList, setUserList] = useState<Data[]>([]);
  // ユーザー入力のステートを作成

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
    <>
      <div>
        <h2>登録ユーザー:</h2>
        <ul>
          {userList.map((user, index) => (
            <li key={index}>
              名前: {user.name}, 学籍番号: {user.id}, メール: {user.email}
            </li>
          ))}
        </ul>
        {/* ... */}
      </div>
    </>
  );
}

export default Member;
