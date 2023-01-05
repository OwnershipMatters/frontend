import styled from "styled-components";

export default function ArticleHeader(){
    return (
        <Container>
            <Image/>
            <div className="info">
                <h1>Categoria</h1>
                <h2>Defiant Geographies: Race and Urban Space in 1920s Rio de Janeiro by Lorraine Leu</h2>
                <h3>Autor</h3>
                <h3>Data</h3>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    column-gap: 24px;
    margin-top: 60px;
    h1{
        font-family: "Playfair Display";
        font-size: 55px;
        font-weight: 700;
    }
    h2{
        font-family: "Playfair Display";
        font-size: 55px;
        font-weight: 400;
        max-width: 965px;
    }
    h3{
        font-family: "Nixie One";
        font-size: 30px;
        font-weight: 400;
    }
`
const Image = styled.div`
    width: 329px;
    height: 437px;
    background: url(${(props) => props.image});
    background-size: cover;
`