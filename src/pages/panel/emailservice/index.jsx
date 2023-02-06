import styled from "styled-components";

import NavBar from "../../../components/Navbar";
import EmailForm from "./EmailForm";
import EmailPreview from "./EmailPreview";

export default function EmailService(){
    return(
        <Container>
            <NavBar/>
            <EmailForm />
            <EmailPreview />
        </Container>
    )
};

const Container = styled.div`
    
`