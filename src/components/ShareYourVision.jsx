import { Link } from "react-router-dom"
import styled from "styled-components"

export default function ShareYourVision(){
    return(
        <Container>
            <h1>Share Your Vision</h1>
            <h2>Our team will provide the editorial <br/> guidance you need to publish your story</h2>
            <Link to="/services">
                <Button>
                    <h3>More info</h3>
                </Button>
            </Link>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    h1{
        font-size: 50px;
        font-weight: 700;
    }
    h2{
        margin-top: 10px;
        font-size: 30px;
        font-family: "Nixie One";
        font-weight: 400;
        text-align: center;
    }
    @media (max-width: 1280px) {
        width: 360px;
        h1{
            font-size: 40px;
        }
        h2{
            font-size: 25px;
        }
    }
`

const Button = styled.div`
    width: 240px;
    height: 40px;
    background-color: #933D1B;
    margin-top: 20px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
        color: #ffffff;
        font-family: "Work Sans";
        font-size: 20px;  
    }
;
`