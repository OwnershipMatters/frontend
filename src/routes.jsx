import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles";

import Home from "./pages/home";
import About from "./pages/about";
import Publications from "./pages/publications";
import Services from "./pages/services";
import Team from "./pages/team";
import Article from "./pages/article";
import Panel from "./pages/panel";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/panel" element={< Panel/>}/>
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};