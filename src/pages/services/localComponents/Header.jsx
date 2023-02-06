import styled from "styled-components";

import img1 from "./../localAssets/ServicesImg.png"

export default function Header(){
    return(
        <Container>
            <img src={img1} alt="Editorial Assistance & Consultancy Services"/>
            <div className="right">
                <h1>We share the same language.</h1>
                <h2>Seed projects and local organizations often lack the financial resources to hire an in-house writer or marketing specialist to share their vision. Aware of the challenges in finding mission-aligned service providers, the Ownership Matters community provides freelancing editorial services for institutions with mutual values. Here, we speak your language.</h2>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    img{
        width: 653px;
        height: 600px;
    }
    .right{
        padding: 0 50px 50px 50px;
    }
    h1{
        color: var(--theme-color);
        font-family: "Playfair Display";
        font-weight: 700;
        font-size: 60px;
    }
    h2{
        margin-top: 50px;
        font-family: "Inter";
        font-weight: 400;
        font-size: 25px;
        width: 500px;
        text-align: left;
    }
    @media (max-width: 1280px) {
        width: 360px;
        flex-direction: column;
        margin-top: 30px;
        img{
            width: 325px;
            height: 300px;
        }
        .right{
            padding: 20px 0 0 0;
            h1{
                font-size: 25px;
                text-align: center;
            }
            h2{
                margin-top: 10px;
                font-size: 15px;
                text-align: justify;
                width: 360px;
                text-align: center;
            }
        }
    }
`