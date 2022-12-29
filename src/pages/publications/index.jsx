import styled from "styled-components";

import ContactUs from "../../components/ContactUs";
import NavBar from "../../components/Navbar";
import ShareYourVision from "./../../components/ShareYourVision";
import Header from "./localComponents/Header";
import PublicationsDisplay from "./localComponents/PublicationsDisplay";
import SearchBar from "./localComponents/SearchBar";

export default function Publications() {

  return (
    <Container>
      <NavBar highlightedTab={"Publications"} />
      <Header/>
      <SearchBar/>
      <PublicationsDisplay/>
      <ShareYourVision/>
      <ContactUs/>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 1280px;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;