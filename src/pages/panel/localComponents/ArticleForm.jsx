import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

import Button from "../../../components/Button";
import URL from "../../../URL";

export default function ArticleForm({post, setPost}){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');

    function postArticle(e){
        e.preventDefault();
        setLoading(true);
        const promise = axios.post(URL+"/post", {
            title: post.title,
            paragraphs: post.paragraphs,
            image: post.image,
            category: post.category,
            author: post.author
        }, { headers: { Authorization: `Bearer ${token}` }});
        promise.then(res => {
            setLoading(false);
            navigate("/panel");
        }).catch(e => {
            toast.error(e.response.data);
            setLoading(false);
        })
    }


    return(
        <Container>
            <div><Toaster
                    position="top-center"
                    reverseOrder={false}
            /></div>
            <form onSubmit={postArticle}>
                    <input 
                        type="tex"
                        id="title"
                        placeholder="title"
                        onChange={(e) => setPost({...post, title: e.target.value})}
                        value={setPost.title}
                        required/>
                    <input 
                        type="text"
                        id="author"
                        placeholder="author"
                        onChange={(e) => setPost({...post, author: e.target.value})}
                        value={setPost.author}
                        required/>    
                    <input 
                        type="url"
                        id="image"
                        placeholder="image"
                        onChange={(e) => setPost({...post, image: e.target.value})}
                        value={setPost.image}
                        required/>
                    <input 
                        type="text"
                        id="category"
                        placeholder="category"
                        onChange={(e) => setPost({...post, category: e.target.value})}
                        value={setPost.category}
                        required/>
                    <h3>To add a link write {`<a href="THE LINK WITH HTTPS" target="_blank">TEXT TO BE LINKED</a>`}</h3>    
                    <textarea 
                        className="text-input"
                        type="text"
                        id="text"
                        placeholder="text"
                        onChange={(e) => setPost({...post, text: e.target.value})}
                        value={setPost.text}
                        required/>    
                    <Button loading={loading}/>
                </form>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    margin-top: 30px;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            width: 1000px;
            margin-bottom: 15px;
            height: 50px;
            font-size: 30px;
            padding-left: 10px;

        }
        textarea{
            height: 1000px;
            width: 1000px;
            margin-bottom: 15px;
            font-size: 30px;
            overflow-wrap: break-word;
            padding: 10px;
        }
    }
`