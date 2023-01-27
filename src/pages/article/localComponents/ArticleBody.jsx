import styled from "styled-components";

export default function ArticleBody({post}){
    return (
        <Container>
            <div dangerouslySetInnerHTML={{ __html: post.text }}></div>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    padding: 50px 50px 50px 50px;
    p{
        font-family: "Playfair Display";
        font-weight: 400;
        font-size: 35px;
        text-align: justify;
        margin-bottom: 30px;
    }
    a:link{
        color: var(--theme-color);
    }
    a:visited{
        color: var(--theme-color);
    }
    @media (max-width: 1280px) {
        width: 360px;
        padding: 15px 0;
        h1{
            padding: 2px;
            width: 350px;
            font-size: 20px;
            margin-bottom: 10px;
            text-align: left;
        }
    }
`