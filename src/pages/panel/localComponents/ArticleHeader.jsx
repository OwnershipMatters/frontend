import styled from "styled-components";
import dayjs from "dayjs";

export default function ArticleHeader({post}){

    return (
        <Container>
            <Image image={post.image? window.URL.createObjectURL(post.image) : undefined}/>
            <div className="info">
                <h1>{post.category}</h1>
                <h2>{post.title}</h2>
                <h3>{post.author}</h3>
                <h3>{dayjs(post.date).format("DD MMMM YYYY")}</h3>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    column-gap: 24px;
    padding: 60px 50px 0 50px;
    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
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
    @media (max-width: 1280px) {
        width: 360px;
        margin-top: 15px;
        padding: 0;
        flex-direction: column-reverse;
        h1{
            font-size: 20px;
        }
        h2{
            font-size: 25px;
            margin-top: 15px;
        }
        h3{
            margin-top: 15px;
            font-size: 20px;
        }
    }
`
const Image = styled.div`
    width: 329px;
    height: 437px;
    background: url(${(props) => props.image});
    background-size: cover;
    background-position: -80px;
    @media (max-width: 1280px) {
        margin-top: 15px;
        width: 360px;
        background-position: -80px;
    }
`