import React, { useState } from "react";
import styled from "styled-components";

export default function ContactUs(){
  return (
      <Container>
        <h1>Contact us</h1>

        <h5>© 2023 A PROJECT OF SOLIDARITY HALL, 501(C)3</h5>
      </Container>
    );
};

const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  h1 {
    color: #f7f3f2;
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    margin-top: 60px;
    font-size: 45px;
  }
  h5{
    font-family: "Work Sans";
    color: #f7f3f2;
    font-size: 25px;
    margin-top: 60px;
  }
`;