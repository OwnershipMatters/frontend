import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";

import NavBar from "../../components/Navbar";
import ArticleBody from "../article/localComponents/ArticleBody";
import ArticleAuthor from "../article/localComponents/ArticleAuthor";
import ArticleHeader from "./localComponents/ArticleHeader";
import ArticleForm from "./localComponents/ArticleForm";
import URL from "../../URL";

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

    const [author, setAuthor] = useState({})

    useEffect(()=> {
        let search = post.author.split(" ");
        axios.get(`${URL}/author/${search.join("-")}`)
        .then(res=> setAuthor(res.data))
        .catch(err=> console.log(err))
    }, [post.author])

    return(
        <Container>
            <NavBar/>
            <ArticleForm post={post} setPost={setPost}/>
            <ArticleHeader post={post}/>
            <ArticleBody post={post}/>
            <ArticleAuthor  author={author}/>
        </Container>
    )
};

const Container = styled.div`
    
`