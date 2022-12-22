import styled from "styled-components";
import { Link } from "react-router-dom";

export default function GetToKnow() {
  return (
    <Container>
      <Left>
        <ContentWrapper>
          <h1 className="our-eco">
            Our Ecosystem:<br />
            A Mosaic Vision
          </h1>
          <Link to={"/about"}>
            <Button>
              <h1>Read More</h1>
            </Button>
          </Link>
        </ContentWrapper>
      </Left>
      <Right>
        <h1>Get to Know Us</h1>
        <h2>
            Ownership Matters is a free publication platform and community of practice bringing together the diverse voices of those building the next economy. We welcome the many frameworks and ways of reimagining the future of our market and institutions. Here, we identify solidarity, democracy, mutualism, decentralization, impact investing, shared ownership and governance as colorful pieces of the same vibrant mosaic. We seek to untangle our communal life from the profit-at-all-costs hegemonic paradigm through collective action and cooperation, building a system that serves all people and the planet.
        </h2>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Left = styled.div`
  width: 640px;
  height: 566px;
  background-color: black;
  position: relative;
  padding: 100px;
  .our-eco {
    color: white;
    font-size: 50px;
    font-weight: 700;
    line-height: 67px;
    position: absolute;
    top: 158px;
    left: 116px;
  }
`;

const Button = styled.button`
  width: 220px;
  height: 74px;
  background-color: var(--theme-color);
  position: absolute;
  top: 327px;
  left: 116px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  transition: 2s;
  h1 {
    font-family: "Work Sans";
    font-size: 35px;
    font-weight: 700;
    color: white;
  }
  :hover {
    transform: scale(1.05);
    background-color: #ff9900;
  }
`;

const Right = styled.div`
  box-sizing: border-box;
  padding: 20px 130px 20px 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 640px;
  width: 640px;
  h1 {
    color: var(--theme-color);
    text-align: left;
    font-size: 20px;
    margin-bottom: 20px;
    font-size: 28px;
  }
  h2 {
   
    font-family: 'Nixie One', cursive;
    text-align: justify;
    font-size: 28px;
    max-width: 635px;
    width: 635px;
    font-weight: 400;
    font-family: var(--secondary-font);
  }
`;
