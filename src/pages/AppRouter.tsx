import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

type Page = {
  key: string;
  path: string;
  element: ReactElement;
};

// pages は [{key:key1, path:path1, element:element1}, ...] を受け取る
export const appRouter = (pages: Page[]) => {
  // BrowserRouter 返す処理
  const router = () => {
    return (
      <>
        <BrowserRouter basename={import.meta.env.VITE_URL}>
          <Routes>
            {pages.map((p) => (
              <Route key={p.key} path={p.path} element={p.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  // ページ遷移リンク 返す処理
  const links = () => (
    <ul>
      {pages.map((p) => (
        <li key={p.key}>
          <a href={`${import.meta.env.VITE_URL || ""}${p.path}`}>{p.key}</a>
        </li>
      ))}
    </ul>
  );
  // BrowserRouter, ページ遷移リンク の定義を返す
  return {
    browserRouter: router(),
    navbarLink: links(),
  };
};
