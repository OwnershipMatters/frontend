import styled from "styled-components";

import image from "./../assets/planet.png";

export default function MailList(){
    return(
        <Container image={image}>
            <div className="box">
                <h1>Don't want to miss anything?</h1>
                <h2>Ownership Matters writes to our community every few weeks with updates on the newest stories and events.</h2>
                <form>
                    <input></input>
                    <input></input>
                </form>
            </div>
        </Container>
    )
};

const Container = styled.div`
    background: url(${(props) => props.image});
    background-size: cover;
    width: 659px;
    height: 678px;
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        width: 516px;
        height: 564px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1{
            font-family: "Playfair Display";
            font-weight: 700;
            font-size: 40px;
            text-align: center;
        }
        h2{
            font-family: "Inter";
            font-weight: 400;
            font-size: 28px;
            margin-top: 10px;
            text-align: center;
        }
    }
`