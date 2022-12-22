import{ useState, useEffect } from "react";
import styled from "styled-components";
import ContactUs from "../../components/ContactUs";
import NavBar from "../../components/Navbar";

import GetToKnow from "./localComponents/GetToKnow";
import MosaicVision from "./localComponents/MosaicVision";
import Mural from "./localComponents/Mural";
import ShareOrVision from "./localComponents/ShareOrVision";

export default function Home() {

  return (
    <Container>
      <NavBar highlightedTab={"Home"} />
      <Mural/>
      <GetToKnow/>
      <MosaicVision/>
      <ShareOrVision/>
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
