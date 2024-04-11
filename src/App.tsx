import { useEffect, useState } from "react";
import "./App.css";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { database } from "./firebaseApp";

const COLLECTION_NAME = "member"; // コレクション名

// Firestore に格納されるデータの型定義
type Data = {
  name: string;
  id: string;
  email: string;
};

function App() {
  const [userList, setUserList] = useState<Data[]>([]);
  // ユーザー入力のステートを作成
  const [userInput, setUserInput] = useState<Data>({
    name: "",
    id: "",
    email: "",
  });
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

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await addData(userInput);
  }

  // Firestore 上のユーザーデータを追加する
  async function addData(newUser: Data) {
    const userDoc = doc(database, COLLECTION_NAME, newUser.id);
    await setDoc(userDoc, newUser);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          名前:
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={userInput.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          メール:
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="登録" />
      </form>
      <div>
        <h2>登録ユーザー:</h2>
        <ul>
          {userList.map((user, index) => (
            <li key={index}>
              名前: {user.name}, ID: {user.id}, メール: {user.email}
            </li>
          ))}
        </ul>
        {/* ... */}
      </div>
    </>
  );
}

export default App;
