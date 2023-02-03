import styled from "styled-components";

export default function ContactUs(){
  return (
      <Container>
        <h1>Contact us</h1>
          <div className="icons">
            <a href="mailto: ownershipmatters@protonmail.com" target="_blank" rel='noreferrer'>
              <ion-icon name="mail-outline"></ion-icon>
            </a>  
            <a href="https://www.linkedin.com/company/ownershipmatters/" target="_blank" rel='noreferrer'>
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>  
            <a href="https://www.instagram.com/coopchoice/" target="_blank" rel='noreferrer'>
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div> 
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
    font-size: 15px;
    margin-top: 30px;
  }
  .icons{
    display: flex;
    width: 400px;
    justify-content: space-around;
  }
  ion-icon{
    margin-top: 30px;
    color: white;
    font-size: 80px;
    cursor: pointer;
  }
  @media (max-width: 1280px) {
    h1{
      font-size: 30px;
    }
    h5{
      font-size: 12px;
    }
    .icons{
      padding: 0 40px;
    }
    ion-icon{
      font-size: 50px;
    }
  }
`;