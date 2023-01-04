import styled from "styled-components";

import ContactUs from "../../components/ContactUs";
import NavBar from "../../components/Navbar";
import Header from "./localComponets/Header";
import Members from "./localComponets/Members";

export default function Team() {

  return (
    <Container>
      <NavBar highlightedTab={"Team"} />
      <Header/>
      <Members/>
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