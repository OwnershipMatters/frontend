import styled from "styled-components";
import dayjs from "dayjs";

export default function ArticleHeader({post}){
    return (
        <Container>
            <Image post={post}/>
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
    margin-top: 60px;
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
`
const Image = styled.div`
    width: 329px;
    height: 437px;
    background: url(${(props) => props.post.image});
    background-size: cover;
`