import styled from "styled-components";

export default function PublicationsHeader(){
    return(
        <Container>
            <h1>MOSAIC VISION</h1>
            <h2>publications</h2>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
        font-family: "Playfair Display";
        font-style: bold;
        font-size: 90px;
    }
    h2{
        font-family: "Nixie One";
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
    }
    @media (max-width: 1280px) {
        width: 360px;
        h1{
            font-size: 50px;
            text-align: center;
        }
    }
`