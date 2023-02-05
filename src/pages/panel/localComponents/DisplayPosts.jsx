import { Link } from "react-router-dom";
import styled from "styled-components";

import TextBox from "./TextBox";

export default function DisplayPosts({posts}){

    return(
        <Container>
            {
                posts?
                posts.map(post=> (
                    <Link to={`/panel/edit/post/${post.id}`} key={post.title}>
                        <TextBox post={post} />
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 30px;
    margin-top: 30px;
`