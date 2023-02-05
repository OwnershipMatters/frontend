import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import URL from "../../../URL";
import ArticleForm from "./ArticleForm";
import NavBar from "../../../components/Navbar";
import ArticleBody from "../../article/localComponents/ArticleBody";
import ArticleHeader from "../../article/localComponents/ArticleHeader";

export default function EditForm(){

    const { id } = useParams();
    const [ post, setPost ] = useState();

    useEffect(()=>{
        const promise = axios.get(URL+`/post/${id}`);
        promise.then(res => setPost(res.data));
        promise.catch(err => console.log(err));
    },[id]); 

    return(
        <Container>
            <NavBar/>
            {
                post?
                <>
                    <ArticleForm post={post} setPost={setPost}/>
                    <ArticleHeader post={post}/>
                    <ArticleBody post={post}/>
                </>
                :
                <h1>Loading</h1>
            }
        </Container>
    )
}

const Container = styled.div`
    
`