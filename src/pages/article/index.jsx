import styled from "styled-components";

import NavBar from "../../components/Navbar";
import PublicationsHeader from "../../components/PublicationsHeader";
import ArticleHeader from "./localComponents/ArticleHeader";
import ContactUs from "../../components/ContactUs";
import ArticleBody from "./localComponents/ArticleBody";

export default function Article(){
    return(
        <Container>
            <NavBar/>
            <PublicationsHeader/>
            <ArticleHeader/>
            <ArticleBody/>
            <ContactUs/>
        </Container>
    )
};

const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 1280px;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
`