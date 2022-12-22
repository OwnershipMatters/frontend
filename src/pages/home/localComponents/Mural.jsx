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
  `;

const American = styled.div`
  width: 427px;
  height: 563px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: 0;
`
const Village = styled.div`
  width: 427px;
  height: 563px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: -120px;
`
const Workers = styled.div`
  width: 427px;
  height: 563px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: -180px;
`