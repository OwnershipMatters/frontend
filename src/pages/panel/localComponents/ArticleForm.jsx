import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import InputMask from 'react-input-mask';
import dayjs from "dayjs";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 


import Button from "../../../components/Button";
import URL from "../../../URL";
import Quill from "quill";

export default function ArticleForm({post, setPost}){

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [authors, setAuthors] = useState([]);

    const token = localStorage.getItem('token');

    const formats = [ 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'indent', 'align', 'link', 'header', 'blockquote' ];
    const modules = {
        clipboard: {
            matchVisual: false,
            formats: formats
        }
    };

    useEffect(()=> {
        axios.get(URL+"/authors")
        .then(res => setAuthors(res.data))
        .catch(err =>  console.log(err))
    }, [])

    useEffect(()=>{
        console.log(post)
    }, [post.text])

    function postArticle(e){
        e.preventDefault();
        setLoading(true);
        const newPost = new FormData();
        newPost.append("title", post.title);
        newPost.append("author", post.author);
        newPost.append("text", post.text);
        newPost.append("image", post.image);
        newPost.append("category", post.category);
        newPost.append("date", dayjs(post.date).toISOString());
        const promise = axios.post(URL+"/post", newPost, { headers: { Authorization: `Bearer ${token}` }});
        promise.then(res => {
            setLoading(false);
            navigate("/panel");
        }).catch(e => {
            toast.error(e.response.data);
            setLoading(false);
        });
    };

    return(
        <Container>
            <div><Toaster
                    position="top-center"
                    reverseOrder={false}
            /></div>
            <form 
                onSubmit={postArticle}
                encType="multipart/form-data"
            >
                    <input 
                        type="text"
                        id="title"
                        placeholder="title"
                        onChange={(e) => setPost({...post, title: e.target.value})}
                        value={setPost.title}
                        required/>  
                    <select 
                        type="text"
                        id="author"
                        onChange={(e) => setPost({...post, author: e.target.value})}
                        value={setPost.author}
                        required>
                            <option value="">Author</option>
                        {
                            authors.length > 0?
                            authors.map((author)=> (
                                <option key={author.name+"-key"} value={author.name}>{author.name}</option>
                            ))
                            :
                            <option>LOADING</option>
                        }
                    </select>    
                    <input 
                        type="file"
                        id="image"
                        placeholder="image"
                        onChange={(e) => setPost({...post, image: e.target.files[0]})}
                        value={setPost.image}
                        required/>
                    <input 
                        type="text"
                        id="category"
                        placeholder="category"
                        onChange={(e) => setPost({...post, category: e.target.value})}
                        value={setPost.category}
                        required/>
                    <InputMask 
                        mask="9999-99-99"
                        type="text"
                        id="date"
                        placeholder="date YYYY-MM-DD"
                        onChange={(e) => setPost({...post, date: e.target.value})}
                        value={setPost.date}
                        required
                    />  
                    <ReactQuill className="quill" formats={formats} modules={modules} value={post.text}  onChange={(value) => setPost({...post, text: value})} /> 
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
        select{
            width: 1000px;
            height: 50px;
            font-size: 30px;
        }
        .quill{
            height: 1000px;
            width: 1000px;
            margin-bottom: 50px;
            padding: 10px;
        }
    }
`