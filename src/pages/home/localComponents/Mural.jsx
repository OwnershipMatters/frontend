import styled from "styled-components";

import img1 from "./../../../assets/img1.jpg";
import img2 from "./../../../assets/img2.jpeg";
import img3 from "./../../../assets/img3.jpg";

export default function Mural() {
    return (
      <Container>
        <div className="paintings">
          <American image={img1} alt="native american"/>
          <Village image={img2} alt="a village"/>
          <Workers image={img3} alt="industrial workers"/>
        </div>
        <OwnershipMattersText>
          <h1>
            OWNERSHIP MATTERS
          </h1>
          <h2>a community of practice driven by <br/> economic democracy</h2>
        </OwnershipMattersText>
      </Container>
    );
  }
  
  const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 53px;
    margin-bottom: 38px;
    flex-direction: column;
    .paintings{
      display: flex;
      column-gap: 15px;
      justify-content: center;
    }
    @media (max-width: 1280px) {
      margin-top: 10px;
      .paintings{
        column-gap: 5px;
      }
    }
  `;
  
  const OwnershipMattersText = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    max-width: 1280px;
    background-color: #f5f5f5;
    h1 {
      font-size: 80px;
      font-weight: 400;
      font-family: "Playfair Display";
      font-style: normal;
    }
    h2 {
      font-family: var(--secondary-font);
      font-size: 40px;
      font-weight: 400;
    }
    @media (max-width: 1280px) {
      width: 360px;
      h1{
        font-size: 30px;
      }
      h2{
        font-size: 18px;
        display: block;
        max-width: 340px;
      }
    }
  `;

const American = styled.div`
  width: 427px;
  height: 563px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: 0;
  @media (max-width: 1280px) {
    width: 107px;
    height: 126px;
  }
`
const Village = styled.div`
  width: 427px;
  height: 563px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: -120px;
  @media (max-width: 1280px) {
    width: 107px;
    height: 126px;
  }
`
const Workers = styled.div`
  width: 427px;
  height: 563px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: -180px;
  @media (max-width: 1280px) {
    width: 107px;
    height: 126px;
  }
`