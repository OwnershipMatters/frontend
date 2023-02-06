import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles";

import Home from "./pages/home";
import About from "./pages/about";
import Publications from "./pages/publications";
import Services from "./pages/services";
import Team from "./pages/team";
import Article from "./pages/article";
import Panel from "./pages/panel";
import Login from "./pages/panel/Login";
import PostArticle from "./pages/panel/PostArticle";
import AuthorRegistration from "./pages/panel/AuthorRegistration";
import PostEdit from "./pages/panel/postedit";
import EditForm from "./pages/panel/postedit/EditForm";
import EmailService from "./pages/panel/emailservice";

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
        <Route path="/panel/login" element={<Login/>} />
        <Route path="/panel/post" element={<PostArticle/>} />
        <Route path="/panel/email" element={<EmailService/>} />
        <Route path="/panel/authors" element={<AuthorRegistration/>} />
        <Route path="/panel/edit/post" element={<PostEdit/>} />
        <Route path="/panel/edit/post/:id" element={<EditForm />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};