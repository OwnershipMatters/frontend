import styled from "styled-components";

import NavBar from "../../components/Navbar";
import DisplayPosts from "./localComponents/DisplayPosts";

export default function EmailService(){
    return(
        <Container>
            <NavBar/>
            <DisplayPosts/>
        </Container>
    )
};

const Container = styled.div`
    
`