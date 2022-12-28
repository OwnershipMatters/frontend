import styled from "styled-components";

import ContactUs from "../../components/ContactUs";
import NavBar from "../../components/Navbar";
import ShareYourVision from "./../../components/ShareYourVision";

export default function Publications() {

  return (
    <Container>
      <NavBar highlightedTab={"Publications"} />
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