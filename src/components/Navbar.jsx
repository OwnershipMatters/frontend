import styled from "styled-components";
import { Link } from "react-router-dom";

import OMLogo from "./../assets/OMLogo.png"

export default function NavBar({ highlightedTab }){
    const tabs = [
        "Home",
        "About",
        "Publications",
        "Services",
        "Team",
    ];
    return(
        <Container>
            <Logo image={OMLogo}/>
            <div className="buttons">
                {tabs.map((tab, index) => (
                    <Tab key={index} highlightedTab={highlightedTab === tab}>
                        <Link to={`/${tab.replaceAll(" ", "").toLowerCase()}`}>
                            <h2>{tab}</h2>
                        </Link>
                    </Tab>
                ))}        
            </div>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    padding-top: 25px;
    width: 1280px;
    margin-left: -10px;
    .buttons{
        padding-left: 129px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    @media (max-width: 1280px) {
      width: 360px;
      .buttons{
        padding-left: 10px;
      }
    }
`

const Logo = styled.div`
  height: 287px;
  width: 295px;
  background: url(${(props) => props.image});
  background-size: cover;
  @media (max-width: 1280px) {
    width: 81px;
    height: 80px;
  }
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 165px;
  height: 97px;
  background-color: ${(props) =>
    props.highlightedTab ? "#E9E2E2" : "none"};
  h2 {
    font-size: 25px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s;
    :hover {
      color: var(--theme-color);
    }
  }
  @media (max-width: 1280px) {
    width: 52px;
    height: 29px;
    h2{
      font-size: 10px;
    }
  }
`;