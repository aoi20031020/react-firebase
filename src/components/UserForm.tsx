import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  useToast,
} from "@chakra-ui/react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { database } from "../firebaseApp";

const COLLECTION_NAME = "member"; // コレクション名

// Firestore に格納されるデータの型定義
type Data = {
  id: string;
  name: string;
  email: string;
  grade: string;
};

function Entry() {
  // ユーザー入力のステートを作成
  const [userInput, setUserInput] = useState<Data>({
    id: "",
    name: "",
    email: "",
    grade: "1",
  });

  const toast = useToast();

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const docRef = doc(database, COLLECTION_NAME, userInput.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // ドキュメントが既に存在する場合はエラーを表示
      toast({
        title: "ユーザー登録に失敗しました。",
        description: "このIDは既に使用されています。",
        status: "error",
        duration: 3000,
        isClosable: false,
        position: "bottom-left",
      });
    } else {
      try {
        await setDoc(docRef, userInput);

        // ユーザー登録が成功したときのトースト通知
        toast({
          title: "ユーザー登録に成功しました。",
          status: "success",
          duration: 3000,
          isClosable: false,
          position: "bottom-left",
        });
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error("Error adding document: ", e);
          // ユーザー登録が失敗したときのトースト通知
          toast({
            title: "ユーザー登録に失敗しました。",
            status: "error",
            duration: 3000,
            isClosable: false,
            position: "bottom-left",
          });
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="id">
        <FormLabel>学籍番号</FormLabel>
        <Input
          type="text"
          name="id"
          value={userInput.id}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl id="name">
        <FormLabel>名前</FormLabel>
        <Input
          type="text"
          name="name"
          value={userInput.name}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl id="grade">
        <FormLabel>学年</FormLabel>
        <Select
          name="grade"
          value={userInput.grade}
          onChange={handleInputChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Select>
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Entry;
