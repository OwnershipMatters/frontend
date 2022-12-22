import{ useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../components/Navbar";

import GetToKnow from "./localComponents/GetToKnow";
import MosaicVision from "./localComponents/MosaicVision";
import Paintings from "./localComponents/Paintings";
import ShareOrVision from "./localComponents/ShareOrVision";

export default function Home() {

  return (
    <Container>
      <NavBar/>
      <Paintings/>
      <GetToKnow/>
      <MosaicVision/>
      <ShareOrVision/>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
