import { useState } from "react";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { database } from "../firebaseApp"; // Replace with your Firebase initialization file

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
      <p>MyProfile</p>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={fetchRecord}>表示</button>
      {record && <pre>{JSON.stringify(record, null, 2)}</pre>}
    </>
  );
};

export default MyProfile;
