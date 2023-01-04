import styled from "styled-components";

export default function Header(){
    return(
        <Container>
            <h1>A COMMUNITY OF PRACTICE</h1>
            <h2>Ownership Matters is a <span>free publication platform</span> and a <span>community of practice</span>. Our mission is to consolidate a democratic-driven ecosystem, catalyzing business formation and sharing operational insights in the emerging landscape around impact investing, racial equity, and the solidarity economy. Ownership Matters also explores larger themes of the economic democracy movement, cooperatives, human rights, Indigenous Collective Rights, and more.</h2>
        </Container>
    )
}

const Container = styled.div`
    width: 1280px;
    margin-top: 55px;
    h1{
        font-family: "Playfair Display";
        font-style: 700;
        font-size: 70px;
        text-align: center;
    }
    h2{
        margin-top: 10px;
        font-family: "Work Sans";
        font-weight: 400;
        font-size: 35px;
        text-align: center;
    }
    span{
        color: var(--theme-color);
    }
`