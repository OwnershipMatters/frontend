import React, { useState } from "react";
import styled from "styled-components";

export default function ContactUs(){

  const [messaeData, setMessageData] = useState({
    name: "",
    message: "",
    organization: ""
  })

    return (
        <Container>
          <h1>Contact us</h1>
          <InputArea>
            <input 
              placeholder="Name"
              value={messaeData.name}
              onChange={(e)=> setMessageData({...messaeData, name: e.target.value})}
            />
            <input
              placeholder="Message"
              value={messaeData.message}
              onChange={(e)=> setMessageData({...messaeData, message: e.target.value})}
            />
            <input
              placeholder="Email"
              value={messaeData.organization}
              onChange={(e)=> setMessageData({...messaeData, organization: e.target.value})}
            />
          </InputArea>
          <Button>
            <h3>Send</h3>
          </Button>
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
  h4 {
    font-size: 15px;
    color: #f7f3f2;
    font-family: 'Work Sans', sans-serif;
    padding-top: 40px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      transform: scale(1.01);
    }
  }
  h5{
    font-family: "Work Sans";
    color: #f7f3f2;
    font-size: 25px;
    margin-top: 60px;
  }
`;

const InputArea = styled.div`
  background-color: black;
  max-width: 650px;
  height: 200px;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  input {
    background-color: black;
    color: #f7f3f2;
    border: none;
    padding: 0px 3px 15px 3px;
    margin: 15px 25px 0px 25px;
    border-bottom: 2px solid white;
    max-width: 260px;
    width: 334px;
    height: 40px;
    font-size: 30px;
    font-family: "Work Sans";
    ::placeholder {
      color: #f7f3f2;
    }
    :focus {
      outline: none;
    }
  }
`;

const Button = styled.div`
  max-width: 175px;
  width: 100%;
  height: 44px;
  background-color: var(--theme-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s;
  margin-top: 50px;
  margin-left: 0px;
  :hover {
    transform: scale(1.05);
  }
  h3 {
    font-size: 15px;
    color: white;
  }
`;
