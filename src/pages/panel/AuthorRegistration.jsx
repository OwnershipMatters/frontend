import styled from "styled-components"
import NavBar from "../../components/Navbar"
import AuthorForm from "./localComponents/authorForm"

export default function AuthorRegistration () {
    return(
        <Container>
            <NavBar/>
            <AuthorForm/>
        </Container>
    )
};

const Container = styled.div`
    
`