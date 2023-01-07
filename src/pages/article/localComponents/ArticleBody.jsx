import styled from "styled-components";

export default function ArticleBody({post}){
    const {paragraphs} = post;
    return (
        <Container>
            {paragraphs.map((paragraph, index) => (
                <h1 key={index}>{paragraph}</h1>
            ))}
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    padding: 0 50px 50px 50px;
    h1{
        font-family: "Playfair Display";
        font-weight: 400;
        font-size: 35px;
        text-align: justify;
        margin-bottom: 30px;
    }
`