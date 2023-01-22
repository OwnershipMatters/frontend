import styled from "styled-components"

export default function Button({loading}){
    return (
        loading?
            <Container>
                <button>
                        <div className='loading' />
                </button>   
            </Container>
        :
            <Container>
                <button id="button" type='submit'> Send</button>
            </Container>  
    )
};

const Container = styled.div`
    width: 500px;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 65px;
        width: 500px;
        background-color: var(--theme-color);
        border: none;
        font-size: 30px;
        color: #ffffff;
        border-radius: 5px;
        margin-bottom: 15px;
    }
    .loading {
        animation: is-rotating 1s infinite;
        width: 25px;
        height: 25px;
        border: 4px solid var(--theme-color);
        border-top-color: #ffffff;
        border-radius: 50%;
        margin: 15px;
    }
    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`