import styled from "styled-components";

import img from "./../localAssets/about3.png"

export default function ShareYourVision(){
    return(
        <Container>
            <img src={img} alt="An eye"/>
            <div className="right">
                <h1>Become a contributing writer!</h1>
                <h2>You do not need to be a journalist, scholar or professional writer to share your insights about the next economy. If you feel enticed by sharing ideas with the community, OM's team will provide the editorial guidance you need to publish your story.<span> Submit your article (up to 1,000 words)</span> by e-mail, and a team member will contact you about the next steps.</h2>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 1050px;
    display: flex;
    margin: 55px 0 35px 0;
    align-items: center;
    img{
        height: 240px;
    }
    h1{
        font-family: "Playfair Display";
        text-align: center;
        font-style: Bold;
        font-size: 45px;
    }
    h2{
        font-family: "Inter";
        font-weight: 400;
        font-size: 25px;
        text-align: justify;
        padding: 60px;
        span{
            font-weight: 700;
        }
    }
    @media (max-width: 1280px) {
        width: 360px;
        flex-direction: column;
        margin-top: 30px;
        img{
            width: 250px;
        }
        h1{
            font-size: 30px;
        }
        h2{
            margin-top: 10px;
            padding: 5px;
            font-size: 20px;
        }
    }
`