import { appRouter } from "./pages/AppRouter";
import Entry from "./pages/Entry";
import Member from "./pages/Member";
import MyProfile from "./pages/MyProfile";

// ページ情報を定義して appRouter に設定
const pages = [
  { key: "Entry", path: "/", element: <Entry /> },
  { key: "Member", path: "/Member", element: <Member /> },
  {
    key: "MyProfile",
    path: "/MyProfile",
    element: <MyProfile />,
  },
];
const router = appRouter(pages);

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>App.jsx</p>
      {/* appRouter の navbarLink に書き換え*/}
      {router.navbarLink}
      {/* appRouter の browserRouter に書き換え*/}
      {router.browserRouter}
    </>
  );
};

export default App;
