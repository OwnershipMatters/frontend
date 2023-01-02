import styled from "styled-components";

import ContactUs from "../../components/ContactUs";
import NavBar from "../../components/Navbar";
import Header from "./localComponents/Header";
import Quote from "./localComponents/Quote";
import ServiceList from "./localComponents/ServicesList";

export default function Services() {

  return (
    <Container>
      <NavBar highlightedTab={"Services"} />
      <Header/>
      <ServiceList/>
      <Quote/>
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