import styled from "styled-components";

import TextBox from "./../../../components/TextBox";

export default function PublicationsDisplay(){
    return(
        <Container>
            <TextBox/>
            <TextBox/>
            <TextBox/>
            <TextBox/>
            <TextBox/>
            <TextBox/>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 53px;
    row-gap: 70px;
    margin-top: 34px;
`