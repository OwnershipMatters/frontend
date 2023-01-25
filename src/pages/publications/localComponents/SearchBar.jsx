import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

import image from "./../localAssets/lupa.png";
import URL from "../../../URL";

export default function SearchBar({setPosts}){

    const [search, setSearch] = useState("");

    function searchProducts(){
        axios.post(URL+"/search", {search})
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        if(search === ""){
            axios.get(URL+"/lastposts/12")
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => console.log(err));
        }
        else searchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);
    
    return(
        <Container>
            <img src={image} alt="search"/>
            <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <h1>Archive Search</h1>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    height: 160px;
    display: flex;
    background-color: black;
    margin-top: 50px;
    position: relative;
    img{
        height: 55px;
        position: absolute;
        top: 24px;
        left: 27px;
    }
    input{
        position: absolute;
        top: 51px;
        left: 90px;
        width: 394px;
        background-color: black;
        border: none;
        border-bottom: 2px solid white;
        color: white;
        font-size: 20px;
        padding-bottom: 5px;
    }
    input:focus{
        outline: none;
    }
    h1{
        background-color: var(--theme-color);
        width: 157px;
        height: 38px;
        font-family: "Work Sans";
        font-style: regular;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        position: absolute;
        top: 88px;
        left: 92px;
        font-weight: 400;
    }
    @media (max-width: 1280px) {
        width: 360px;
        margin-top: 20px;
        img{
            top: 50px;
            height: 30px;
        }
        input{
            left: 70px;
            width: 250px;
        }
        h1{
            left: 70px;
        }
    }
`