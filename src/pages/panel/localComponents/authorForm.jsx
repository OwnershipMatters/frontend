import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

import Button from "../../../components/Button";
import URL from "../../../URL";


export default function AuthorForm () {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [ loading, setLoading ] = useState(false);
    const [ author, setAuthor ] = useState({
        name: "",
        bio: "",
        image: ""
    });

    function postAuthor(e){
        e.preventDefault();
        setLoading(true);
        const newAuthor = new FormData();
        newAuthor.append("name", author.name);
        newAuthor.append("bio", author.bio);
        newAuthor.append("image", author.image);
        const promise = axios.post(URL+"/author", newAuthor, { headers: { Authorization: `Bearer ${token}` }});
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
                onSubmit={postAuthor}
                encType="multipart/form-data"
            >
                    <input 
                        type="text"
                        id="name"
                        placeholder="name"
                        onChange={(e) => setAuthor({...author, name: e.target.value})}
                        value={author.name}
                        required/>
                    <textarea 
                        className="text-input"
                        type="text"
                        id="bio"
                        placeholder="bio"
                        onChange={(e) => setAuthor({...author, bio: e.target.value})}
                        value={author.bio}
                        required/>      
                    <input 
                        type="file"
                        id="image"
                        placeholder="image"
                        onChange={(e) => setAuthor({...author, image: e.target.files[0]})}
                        value={setAuthor.image}
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
            height: 500px;
            width: 1000px;
            margin-bottom: 15px;
            font-size: 30px;
            overflow-wrap: break-word;
            padding: 10px;
        }
    }    
`
