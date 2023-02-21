import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";

export default function Panel(){

    return(
        <Container>
            <NavBar/>
            <h1>Welcome to Editor`s Panel!</h1>
            <div className="buttonsDisplay">
                <Link to="/panel/login">
                    <button>Login</button>
                </Link>
                <Link to="/panel/post">
                    <button>Article Post</button>
                </Link>
                <Link to="/panel/edit/post">
                    <button>Article Edit</button>
                </Link>
                <Link to="/panel/authors">
                    <button>Authors Registration</button>
                </Link>
                <Link to="/panel/email">
                    <button>Email Service</button>
                </Link>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .buttonsDisplay{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 30px;
        margin-top: 30px;
    }
    button{
        width: 400px;
        height: 200px;
        font-size: 30px;
        background-color: var(--theme-color);
        color: white;
        border-radius: 30px;
    }
`