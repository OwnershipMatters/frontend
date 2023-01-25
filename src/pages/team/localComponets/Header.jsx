import styled from "styled-components";

import img from "./../localAssets/teamImg.png"

export default function Header(){
    return(
        <Container>
            <img src={img} alt="Our Team"/>
            <h2>The Ownership Matters ecosystem brings together a group of enthusiasts devoted to building a better market for current and future generations. Our team aggregates <span>passionate collaborators</span> willing to share their experiences and expertise with the community.</h2> 
            <h2>They reflect diverse <span>ages</span>, <span>colors</span>, <span>gender identities</span>, <span>languages</span>, <span>cultural backgrounds</span>, and <span>life journeys</span>, offering insightful thoughts and actions on how to democratize our economy and forge collective wealth.</h2>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    margin-top: 60px;
    img{
        width: 1280px;
    }
    h2{
        margin: 60px;
        font-family: "Work Sans";
        font-weight: 400;
        font-size: 40px;
        text-align: center;
        span{
            color: var(--theme-color);
            font-weight: 700;
            font-family: "Work Sans";
        }
    }
    @media (max-width: 1280px) {
        width: 360px;
        margin-top: 15px;
        img{
            width: 360px;
        }
        h2{
            margin: 10px 5px;
            font-size: 20px;
        }
    }
`;