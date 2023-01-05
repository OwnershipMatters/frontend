import styled from "styled-components";

export default function TextBox(){
    const props = {
        date: "8 January 2023",
        title: "Como a Julia pode ser tao chata?",
        author: "Manuel H. M. Rodrigues",
        image:"https://imgs.search.brave.com/oKy2tYasEFDgqb4wcbHyfmzchb7jio91wmrGsN7rxos/rs:fit:1100:625:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8tSS10ZVREOGlQ/NWsvVnhaNEtMYnNK/R0kvQUFBQUFBQUFK/ekUvRWxGMDJ1WmZo/X1E2ZGVLSmJwUnZu/VWRJYVlCOXdGRmJB/Q0xjQi9zMTYwMC9j/YWxvcHNpdGEuanBn"  
        }
    return(
        <Container>
            <div className="left">
                <Image image={props.image}/>
            </div>
            <div className="right">
                <h2>{props.date}</h2>
                <h1>{props.title}</h1>
                <h2>{props.author}</h2>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 538px;
    height: 308px;
    background-color: #D9D9D9;
    display: flex;
    :hover{
        cursor: pointer;
    }
    .left{
        display: flex;
        align-items: center;
        height: 308px;
    }
    .right{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px;
        h1{
            font-family: "Playful Display";
            font-size: 28px;
            font-weight: 700;
        }
        h2{
            font-family: "Nixie One";
            font-size: 20px;
            font-weight: 400;
        }
    }
    @media (max-width: 1280px) {
        width: 300px;
        height: 150px;
        .left{
            height: 150px;
        }
        .right{
            padding: 5px;
            h1{
            font-size: 15px;
            }
            h2{
            font-size: 12px;
            }
        } 
    }
`
const Image = styled.div`
    width: 273px;
    height: 277px;
    background: url(${(props) => props.image});
    background-size: cover;
    background-position: 0;
    @media (max-width: 1280px) {
        width: 120px;
        height: 120px;
    }
`