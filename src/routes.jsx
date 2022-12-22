import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles";

import Home from "./pages/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};