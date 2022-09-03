import { HeaderSimple } from "./components/Header";
import { AddTime } from "./components/pages/Add-time";
import { Statistics } from "./components/pages/Statistics";
import { Admin } from "./components/pages/Admin";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mantine/core";

function App() {
  const links = [
    {
      link: "/",
      label: "Добавить часы",
    },
    {
      link: "/statistics",
      label: "Статистика",
    },
    {
      link: "/admin",
      label: "Панель управления",
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderSimple links={links} />
        <Container>
          <Routes>
            <Route path="/" element={<AddTime />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
