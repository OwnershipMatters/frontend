import styled from "styled-components";

export default function Quote(){
    return(
        <Container>
            <div className="left">
                <h1>Quote request</h1>
            </div>
            <div className="right">
                <h2>If you are seeking price details and specific terms, contact us via email with your name, institution, a paragraph describing your editorial needs, and an initial budget. We do not work with an isolated standardized fee measurement (e.g. the number of characters or pages). Each service fee reflects the undertaking's size and complexity, its purpose, and the requester's financial capability, combined with the fair wages for the editorial workers.</h2>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    height: 332px;
    display: flex;
    background-color: var(--theme-color);
    align-items: center;
    padding: 10px 20px;
    margin: 50px 0;
    h1{
        font-family: "Playfair Display";
        font-weight: 700;
        font-size: 70px;
        color: white;
        margin-left: 10px;
    }
    h2{
        font-family: "Playfair Display";
        font-weight: 400;
        font-size: 25px;
        padding: 30px;
        text-align: justify;
        color: white;
    }
    @media (max-width: 1280px) {
        flex-direction: column;
        width: 360px;
        height: auto;
        h1{
            font-size: 40px;
        }
        h2{
            margin-left: 5px;
            font-size: 25px;
        }
        
    }
`