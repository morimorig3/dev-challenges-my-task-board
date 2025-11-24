import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { CreateBoardScreen } from "./components/screens/CreateBoardScreen/index.tsx";
import { BoardScreen } from "./components/screens/BoardScreen/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateBoardScreen />} />
      <Route path=":boardId" element={<BoardScreen />} />
    </Routes>
  </BrowserRouter>
);
