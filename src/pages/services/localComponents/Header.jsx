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
    img{
        width: 653px;
        height:728px;
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
        margin-top: 20px;
        font-family: "Work Sans";
        font-weight: 400;
        font-size: 35px;
    }
`