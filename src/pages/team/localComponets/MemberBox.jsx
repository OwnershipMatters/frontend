import styled from "styled-components";

export default function MemberBox({image, name, role}){
    return(
        <Container>
            <Image image={image}/>
            <div className="box">
                <h1>{name}</h1>
                <h2>{role}</h2>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 347px;
    height: 449px;
    .box{
        background-color: white;
        width: 347px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-family: "Playfair Display";
        font-weight: 700;
        font-size: 27px;
    }
    h2{
        font-family: "Nixie One";
        font-weight: 400;
        font-size: 20px;
    }
`

const Image = styled.div`
    background: url(${(props) => props.image});
    background-size: cover;
    width: 347px;
    height:345px;
    @media (max-width: 1280px) {
        width: 360px;
    }
`