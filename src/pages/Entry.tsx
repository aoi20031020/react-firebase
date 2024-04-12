import { useState } from "react";
import "../App.css";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebaseApp";

const COLLECTION_NAME = "member"; // コレクション名

// Firestore に格納されるデータの型定義
type Data = {
  id: string;
  name: string;
  email: string;
};

function Entry() {
  // ユーザー入力のステートを作成
  const [userInput, setUserInput] = useState<Data>({
    id: "",
    name: "",
    email: "",
  });

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
          学籍番号:
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
    </>
  );
}

export default Entry;
