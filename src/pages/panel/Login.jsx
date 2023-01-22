import styled from "styled-components";
import NavBar from "../../components/Navbar";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import URL from "../../URL";
import Button from "../../components/Button";


export default function Login() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    function postSignIn(e){
        e.preventDefault();
        setLoading(true);
        localStorage.removeItem('token');
        const promise = axios.post(URL+"/signin", loginData)
        promise.then(res => {
            localStorage.setItem('token', res.data.token);
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
            <NavBar/>
            <form onSubmit={postSignIn}>
                    <input 
                        type="email"
                        id="email"
                        placeholder="email"
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        value={setLoginData.email}
                        required/>
                    <input 
                        type="password"
                        id="password"
                        placeholder="password"
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        value={setLoginData.password}
                        required/>
                    <Button loading={loading}/>
                </form>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }
    input{
        height: 65px;
        width: 500px;
        margin-bottom: 10px;
        padding-left: 10px;
        border-radius: 5px;
        font-size:30px;
    }
`

