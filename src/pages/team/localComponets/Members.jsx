import styled from "styled-components";

import MemberBox from "./MemberBox";

export default function Members(){
    return(
        <Container>
            <MemberBox image="https://imgs.search.brave.com/g5fdHtoNtKdfqjBYBg-_2Rl9BV7BTeJ6gidjF9_Y7og/rs:fit:712:922:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg5Lzlh/LzQ3Lzg5OWE0N2Vj/YzMwNjRlMmNkNDUw/MmUyZmU3YmFhNGQy/LmpwZw" name="Manuel Rodrigues" role="Fullstack"/>
            <MemberBox image="https://imgs.search.brave.com/g5fdHtoNtKdfqjBYBg-_2Rl9BV7BTeJ6gidjF9_Y7og/rs:fit:712:922:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg5Lzlh/LzQ3Lzg5OWE0N2Vj/YzMwNjRlMmNkNDUw/MmUyZmU3YmFhNGQy/LmpwZw" name="Manuel Rodrigues" role="Fullstack"/>
            <MemberBox image="https://imgs.search.brave.com/g5fdHtoNtKdfqjBYBg-_2Rl9BV7BTeJ6gidjF9_Y7og/rs:fit:712:922:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg5Lzlh/LzQ3Lzg5OWE0N2Vj/YzMwNjRlMmNkNDUw/MmUyZmU3YmFhNGQy/LmpwZw" name="Manuel Rodrigues" role="Fullstack"/>
            <MemberBox image="https://imgs.search.brave.com/g5fdHtoNtKdfqjBYBg-_2Rl9BV7BTeJ6gidjF9_Y7og/rs:fit:712:922:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg5Lzlh/LzQ3Lzg5OWE0N2Vj/YzMwNjRlMmNkNDUw/MmUyZmU3YmFhNGQy/LmpwZw" name="Manuel Rodrigues" role="Fullstack"/>
        </Container>
    )
};

const Container = styled.div`
    padding: 30px;
    width: 1280px;
    background-color: #D9D9D9;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;