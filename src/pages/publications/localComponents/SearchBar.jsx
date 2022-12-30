import styled from "styled-components";

export default function SearchBar(){
    return(
        <Container>
            <input

            />
            <h1>Archive Search</h1>
        </Container>
    )
};

const Container = styled.div`
    width: 1128px;
    height: 160px;
    display: flex;
    background-color: black;
    margin-top: 50px;
    position: relative;
    input{
        position: absolute;
        top: 51px;
        left: 90px;
        width: 394px;
        background-color: black;
        border: none;
        border-bottom: 2px solid white;
        color: white;
        font-size: 15px;
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
`