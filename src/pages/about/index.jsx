import styled from "styled-components";

import ContactUs from "../../components/ContactUs";
import NavBar from "../../components/Navbar";
import AnOpenInvitation from "./localComponents.js/AnOpenInvitation";
import Header from "./localComponents.js/Header";
import OurMultiverse from "./localComponents.js/OurMultiverse";
import ShareYourVision from "./localComponents.js/ShareYourVision";

export default function About() {

  return (
    <Container>
      <NavBar highlightedTab={"About"} />
      <Header/>
      <OurMultiverse/>
      <AnOpenInvitation/>
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