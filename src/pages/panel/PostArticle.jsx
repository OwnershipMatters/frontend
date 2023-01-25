import styled from "styled-components";
import {useEffect, useState} from "react"

import NavBar from "../../components/Navbar";
import ArticleBody from "../article/localComponents/ArticleBody";
import ArticleHeader from "../article/localComponents/ArticleHeader";
import ArticleForm from "./localComponents/ArticleForm";


export default function PostArticle(){

    const [post, setPost] = useState({
        title: "",
        paragraphs: [],
        image: "",
        author: "",
        date: "",
        category: "",
        text: ""
    });
    
    useEffect(() => {
        let newText = post.text.split("\n");
        setPost({...post, paragraphs: newText})
        console.log(post)
    }, [post.text]);

    return(
        <Container>
            <NavBar/>
            <ArticleForm post={post} setPost={setPost}/>
            <ArticleHeader post={post}/>
            <ArticleBody post={post}/>
        </Container>
    )
};

const Container = styled.div`
    
`