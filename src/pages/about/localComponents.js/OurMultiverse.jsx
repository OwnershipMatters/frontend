import styled from "styled-components";

import img1 from "./../localAssets/about1.png";
import img2 from "./../localAssets/about2.png";

export default function OurMultiverse(){
    return(
        <Container>
            <img src={img1} alt="some people"/>
            <div className="middle">
                <div className="left">
                    <h1>Our Multiverse</h1>
                </div>
                <div className="right">
                    <h2>Ownership Matters is a <span>diverse community</span> that values the unique perspectives of all those reimagining our economic system by creating a safe space for:</h2>
                    <ul>
                        <li><span>exchanging experiences</span></li>
                        <li><span>discovering stories</span></li>
                        <li><span>sparking powerful conversations</span></li>
                        <li><span>engaging in critical dialogue</span></li>
                    </ul>
                    <h2>We seeks to create a <span>plural space for actions and ideas</span> open to the vast solidarity ecosystem. Here, entrepreneurs, funders, scholars, grassroots movement leaders, and enthusiasts are welcome to share their stories, enlighting the challenges and possibilities faced by <span>alternative institutional designs and mission-driven organizations</span>. Ownership Matters explore the connections among multiple approaches to economic democracy and build new bridges between our many ecosystem partners.</h2>
                </div>
            </div>
            <img src={img2} alt="some people"/>
        </Container>
    )
}

const Container = styled.div`
    width: 1280px;
    margin-top: 20px;
    img{
        width: 1280px;
    }
    .middle{
        margin-top: -4px;
        height: 1050px;
        display: flex;
    }
    .left{
        background-color: black;
        width: 453px;
        h1{
            font-family: "Playfair Display";
            font-weight: 700;
            font-size: 60px;
            color: white;
            margin-top: 75px;
            margin-left: 54px;
        }
    }
    .right{
        width: 871px;
        background-color: var(--theme-color);
        padding: 45px;
        h2{
            font-family: "Work Sans";
            font-weight: 400;
            font-size: 35px;
            color: white;
            text-align: justify;
        }
        span{
            color: white;
            font-weight: 700;
            font-size: 35px;
        }
        ul{
            list-style: disc;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 30px;
        }
        li{
            color: white;
        }
    }   
`