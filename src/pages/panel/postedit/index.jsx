import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import URL from "../../../URL";

import NavBar from "../../../components/Navbar";
import DisplayPosts from "../localComponents/DisplayPosts";
import SearchBar from "../../publications/localComponents/SearchBar";

export default function PostEdit(){

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const promise = axios.get(URL+"/posts");
        promise.then(res=> setPosts(res.data))
        promise.catch(err=> console.log(err))
    }, [])

    return(
        <Container>
            <NavBar/>
            <SearchBar setPosts={setPosts}/>
            <DisplayPosts posts={posts}/>
        </Container>
    )
};

const Container = styled.div`
    
`