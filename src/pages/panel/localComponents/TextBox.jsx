import styled from "styled-components";
import dayjs from "dayjs";

import URL from "./../../../URL";

export default function TextBox({post}){
    return(
        <Container>
            <div className="left">
                <Image image={post.image}/>
            </div>
            <div className="right">
                <h2>{dayjs(post.date).format("DD MMMM YYYY")}</h2>
                <h1>{post.title}</h1>
                <h2>{post.author}</h2>
                <h2>Views: {post.views}</h2>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 600px;
    height: 350px;
    background-color: #D9D9D9;
    display: flex;
    :hover{
        cursor: pointer;
    }
    .left{
        display: flex;
        align-items: center;
        height: 350px;
    }
    .right{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px;
        text-align: left;
        h1{
            font-family: "Playful Display";
            font-size: 28px;
            font-weight: 700;
        }
        h2{
            font-family: "Nixie One";
            font-size: 20px;
            font-weight: 400;
        }
    }
    @media (max-width: 1280px) {
        width: 300px;
        height: 150px;
        .left{
            height: 150px;
        }
        .right{
            padding: 5px;
            h1{
            font-size: 15px;
            }
            h2{
            font-size: 12px;
            }
        } 
    }
`
const Image = styled.div`
    width: 273px;
    height: 350px;
    background: url(${(props) => URL + props.image});
    background-size: cover;
    @media (max-width: 1280px) {
        width: 120px;
        height: 150px;
    }
`