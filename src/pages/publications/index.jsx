import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

import ContactUs from "../../components/ContactUs";
import NavBar from "../../components/Navbar";
import ShareYourVision from "./../../components/ShareYourVision";
import PublicationsHeader from "../../components/PublicationsHeader";
import PublicationsDisplay from "./localComponents/PublicationsDisplay";
import SearchBar from "./localComponents/SearchBar";
import URL from "../../URL";


export default function Publications() {

  const [posts, setPosts] = useState();

  useEffect(()=>{
    const promise = axios.get(URL+"/posts");
    promise.then(res=>{
      setPosts(res.data)
    })
    .catch(err=> console.log(err));
  },[])

  return (
    <Container>
      <NavBar highlightedTab={"Publications"} />
      <PublicationsHeader />
      <SearchBar setPosts={setPosts}/>
      <PublicationsDisplay posts={posts}/>
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
  }
`;

