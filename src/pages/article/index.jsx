import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../../components/Navbar";
import PublicationsHeader from "../../components/PublicationsHeader";
import ArticleHeader from "./localComponents/ArticleHeader";
import ContactUs from "../../components/ContactUs";
import ArticleBody from "./localComponents/ArticleBody";
import URL from "../../URL";
import image from "./localAssets/eyes.png";

export default function Article(){

    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(()=>{
        const promise = axios.get(`${URL}/post/${id}`);
        promise.then(res => {
            setPost(res.data);
        })
        promise.catch(err => {
            console.log(err);
        })

    },[id]);

    return(
        <Container>
            <NavBar/>
            <PublicationsHeader/>
            <img src={image} alt="Picasso eyes"/>
            {
                post?
                    <>
                        <ArticleHeader post={post}/>
                        <ArticleBody post={post}/>
                    </>
                :
                    <h1>Loading</h1>
            }
            
            <ContactUs/>
        </Container>
    )
};

const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 1280px;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 1280px;
        margin: 50px 0
    }
`