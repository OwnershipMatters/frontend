import { Link } from "react-router-dom";
import styled from "styled-components";

import TextBox from "./../../../components/TextBox";

export default function PublicationsDisplay({posts}){
    return(
        <Container>
            {
                posts 
                ?
                posts.map((post)=> (
                        <Link key={post.title} to={`/article/${post.id}`}>
                            <TextBox post={post}/>
                        </Link>
                ))
                :
                <h1>Loading</h1>
            }
            
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 53px;
    row-gap: 85px;
    margin-top: 85px;
    @media (max-width: 1280px) {
        margin-top: 15px;
        width: 360px;
        justify-content: center;
        row-gap: 20px;
    }
`