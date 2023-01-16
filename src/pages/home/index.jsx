import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

import ContactUs from "../../components/ContactUs";
import NavBar from "../../components/Navbar";
import GetToKnow from "./localComponents/GetToKnow";
import MosaicVision from "./localComponents/MosaicVision";
import Mural from "./localComponents/Mural";
import ShareYourVision from "./../../components/ShareYourVision";

import URL from "./../../URL"

export default function Home() {

  const [posts, setPosts] = useState();
  useEffect(()=>{
    const promise = axios.get(URL+"/last4posts")
    promise.then(res => {
      setPosts(res.data)
    promise.catch(err => {
      console.log(err)
    });  
    })
  },[])

  return (
    <Container>
      <NavBar highlightedTab={"Home"} />
      <Mural/>
      <GetToKnow/>
      {
        posts?
          <MosaicVision posts={posts}/>
        :
          <h1>Loading</h1>
      }
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
  @media (max-width: 1280px) {
    width: 360px;
    max-width: 360px;
  }
`;
