import { Link } from "react-router-dom";
import styled from "styled-components";

import TextBox from "./../../../components/TextBox";

export default function PublicationsDisplay({posts}){
    return(
        <Container>
            {
                posts 
                ?
                posts.map((post, index)=> (
                        <Link key={index} to={`/article/${post.id}`}>
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
    justify-content: center;
    column-gap: 53px;
    row-gap: 70px;
    margin-top: 34px;
`