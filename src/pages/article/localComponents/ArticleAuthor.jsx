import styled from "styled-components"

import URL from "../../../URL"

export default function AuthorBio({author}){
    return(
          author?
            <Container>
                <Image image={author.image}/>
                <div className="right">
                    <h1>ABOUT THE AUTHOR</h1>
                    <h1 className="author">{author.name}</h1>
                    <h2>{author.bio}</h2>
                </div>
            </Container>
            :
            <h1>Loding</h1>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    padding: 0 60px 60px 60px;
    .right{
        margin-left: 10px;
    }
    h1{
        font-family: "Work Sans"; 
    }
    h2{
        font-family: "Work Sans";
        width: 700px;
        font-size: 30px;
        font-weight: 400;
        margin-top: 30px;
        text-align: left;
    }
    .author{
        color: var(--theme-color);
        margin-top: 10px;
    }
    @media (max-width: 1280px) {
        width: 360px;
        flex-direction: column;
        padding: 0;
        .right{
            margin-left: 0;
        }
        h1{
            width: 360px;
            justify-content: center;
        }
        h2{
            width: 350px;
            justify-content: center;
            font-size: 25px;
        }
    }
`
const Image = styled.div`
    width: 328px;
    height: 436px;
    background: url(${(props) => URL + props.image});
    background-size: cover;
    @media (max-width: 1280px) {
        margin-top: 15px;
        width: 360px;
    }
`